<template>
  <div>
    <div class="logo">
      <img :src="require('@/assets/img/logo.png')" style="width: 22px" />
      出境动物检疫管理
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      unique-opened
      :default-active="defaultSelectKey"
      background-color="#12375e"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <menu-item :menus="jsonMenus"></menu-item>
    </el-menu>
  </div>
</template>

<script>
import menuItem from '@/components/menu-item'
import jsonMenus from '@/assets/json/menu.json'
export default {
  name: 'left-aside',
  components: {
    menuItem,
  },
  computed: {
    defaultSelectKey() {
      const selectKey = this.$route.fullPath || '/home'
      return selectKey
    },
  },
  data() {
    return {
      jsonMenus,
    }
  },
  methods: {},
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
