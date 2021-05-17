<template>
  <el-container>
    <!-- 侧边栏菜单区域 -->
    <el-aside width="230px">
      <left-aside />
    </el-aside>
    <!-- 主页面区域 -->
    <el-container style="position: relative">
      <!-- 顶部工具栏区域 -->
      <el-header style="height: 40px; text-align: right">
        <top-header />
      </el-header>
      <el-main style="margin-top: 20px">
        <!-- tag标签区域 -->
        <tab-views></tab-views>
        <keep-alive>
          <router-view
            @destroyed="destroyed"
            :key="$route.fullPath"
          />
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import leftAside from './components/left-aside'
import topHeader from './components/top-header'
import tabViews from './components/tab-views'
export default {
  name: 'layout',
  components: {
    leftAside,
    topHeader,
    tabViews,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      allVisitedPages: 'tabViews/allVisitedPages',
    }),
  },
  methods: {
    destroyed({ tempFullPath, component }) {
      const that = component
      console.log('destroyed', tempFullPath)
      this.$nextTick(() => {
        that.$destroy()
        delete that.$options.parent.cache[`${tempFullPath}`]
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
}
.el-aside {
  background-color: #12375e !important;
}
.el-submenu__title span {
  display: inline-block;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.logo {
  text-align: center;
  padding: 16px;
  font-size: 18px;
  color: #fff;
  background-color: #004693 !important;
  img {
    margin-right: 3px;
    vertical-align: middle;
  }
}
</style>
