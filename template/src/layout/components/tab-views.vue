<template>
  <div style="height: 50px;">
    <!-- @click.right和@contextmenu等效 -->
    <el-tabs
      type="card"
      v-model="currentTab"
      @tab-remove="tabRemove"
      @tab-click="tabClick"
      @contextmenu.native.prevent="tabRightClick($event)"
    >
      <template v-for="page in allVisitedPages">
        <el-tab-pane
          :closable="page.fullPath !== '/home'"
          :key="page.fullPath"
          :name="page.fullPath"
          :label="page.label"
        />
      </template>
    </el-tabs>
    <ul
      v-show="contextmenuVisible"
      :style="{ left: contextmenuLeft + 'px', top: contextmenuTop + 'px' }"
      class="contextmenu"
    >
      <li @click="tabCloseOthers">关闭其他</li>
      <li @click="tabCloseLeft" v-if="choosedTab !== '/home'">关闭左侧</li>
      <li @click="tabCloseRight" v-if="choosedTab !== '/home'">关闭右侧</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as pageOperation from '@/utils/page'
export default {
  name: 'tab-views',
  data() {
    return {
      currentTab: '/home',
      choosedTab: undefined,
      contextmenuVisible: false,
      contextmenuLeft: 0,
      contextmenuTop: 0,
    }
  },
  computed: {
    ...mapGetters({
      allVisitedPages: 'tabViews/allVisitedPages',
    }),
  },
  watch: {
    '$store.state.tabViews.activedPage': {
      handler({ fullPath }) {
        if (fullPath) {
          this.currentTab = fullPath
        }
      },
      immediate: true
    },
    currentTab: {
      handler(value) {
        this.$router.push({ path: value }).then(({ redirectedFrom }) => {
          // 说明发生了重定向
          if (redirectedFrom) {
            this.tabRemove(value)
            this.tabClick({
              name: '/home',
              label: 'Home',
            })
          }
        })
      },
      immediate:true
    },
    contextmenuVisible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeContextmenu)
      } else {
        document.body.removeEventListener('click', this.closeContextmenu)
      }
    },
  },
  methods: {
    tabClick({ name, label }) {
      pageOperation.setPage(name, label)
    },
    tabRemove(name) {
      pageOperation.removePage(name, name === this.currentTab)
    },
    tabRightClick(event) {
      const fullPath = event.target.id.split('-')[1]
      if (fullPath) {
        this.choosedTab = fullPath
        const offsetLeft = this.$el.getBoundingClientRect().left
        this.contextmenuVisible = true
        this.contextmenuLeft = event.clientX - offsetLeft
        this.contextmenuTop = event.clientY
      }
    },
    closeContextmenu() {
      this.contextmenuVisible = false
    },
    tabCloseOthers() {
      pageOperation.removeOtherPages(this.choosedTab)
    },
    tabCloseLeft() {
      pageOperation.removeLeftPages(this.choosedTab)
    },
    tabCloseRight() {
      pageOperation.removeRightPages(this.choosedTab)
    },
  },
}
</script>

<style lang="scss" scoped>
.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: absolute;
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
}
</style>
