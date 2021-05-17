<template>
  <div>
    <el-dropdown @command="handleCommand">
      <span style="cursor: pointer">
        <i class="el-icon-user" style="margin-right: 2px"></i>
        {{ user.userRealName }}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="userInfo">个人中心</el-dropdown-item>
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { logout } from "@/api/common";
export default {
  name: "top-header",
  data() {
    return {};
  },
  computed: {
    user() {
      return localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : "游客";
    },
  },
  methods: {
    handleCommand(command) {
      if (command == "logout") {
        logout().then((response) => {
          console.log(response.data);
          if (40310 == response.data.status) {
            this.$message.success("注销成功");
            localStorage.removeItem("sys_token");
            window.open(response.data.data, "_self");
          }
        });
      }
    },
  },
};
</script>

<style scoped>
</style>
