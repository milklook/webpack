<template></template>

<script>
import { login, getLoginInfo } from '@/api/common'
export default {
  data() {
    return {}
  },
  mounted() {
    let token = this.$route.query.sys_token || localStorage.getItem('sys_token')
    if (!token) {
      this.$message.error('用户未登录')
      setTimeout(() => {
        login()
          .then(({ data }) => {})
          .catch((err) => {
            this.$router.replace({ path: '/401' })
          })
      }, 1000)
    } else {
      localStorage.setItem('sys_token', token)
      let user = localStorage.getItem('user')
      if (!user) {
        getLoginInfo(token)
          .then(({ data }) => {
            if (data.status == -1) throw '获取用户信息失败，重新刷新获取'
            localStorage.setItem('user', JSON.stringify(data.data))
            this.$router.replace({ path: '/home' })
          })
          .catch((err) => {
            this.$message.error(err)
          })
      } else {
        this.$router.replace({ path: '/home' })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
</style>