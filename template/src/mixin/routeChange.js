import { mapGetters } from 'vuex'
export default {
  watch: {
    allVisitedPages: {
      handler(value) {
        const flag = value.some(el => el.fullPath === this.tempFullPath)
        if (!flag) {
          this.$emit('destroyed', {
            tempFullPath: this.tempFullPath,
            component: this
          })
        }
      }
    },
  },
  data() {
    return {
      tempFullPath: undefined
    }
  },
  computed: {
    ...mapGetters({
      allVisitedPages: 'tabViews/allVisitedPages',
    }),
  },
  mounted() {
    this.tempFullPath = this.$route.fullPath
  },
  deactivated() {
    this.$emit('deactivated', this.tempFullPath)
  }
}