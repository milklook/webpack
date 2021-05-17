<template>
  <div>
    <template v-for="menu in menus">
      <el-submenu
        :index="menu.path || menu.id"
        :key="menu.id"
        v-if="menu.children.length !== 0"
      >
        <template slot="title">
          <i :class="menu.icon"></i>
          {{ menu.title }}
        </template>
        <menu-item :menus="menu.children" />
      </el-submenu>
      <el-menu-item
        :index="menu.path || menu.id"
        :key="menu.id"
        v-else
        @click="menuClick(menu)"
      >
        <template slot="title">
          <i :class="menu.icon"></i>
          {{ menu.title }}
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import { setPage } from '@/utils/page'
export default {
  name: 'menu-item',
  props: {
    menus: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    menuClick({ path, title }) {
      setPage(path, title)
    },
  },
}
</script>

<style scoped>
</style>
