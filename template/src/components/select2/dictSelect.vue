<template>
  <el-select
    v-model="newValue"
    :multiple="multiple"
    filterable
    reserve-keyword
    clearable
    :placeholder="placeholder"
    :filter-method="filterMethod"
    value-key="code"
    @clear="handleClear"
    @change="handleChange"
    :loading="loading"
  >
    <el-option
      v-for="item in options"
      :key="item.code"
      :label="item.name"
      :value="item"
    >
    </el-option>
  </el-select>
</template>

<script>
import * as dictApi from '@/api/common'
export default {
  props: {
    value: {},
    placeholder: String,
    multiple: {
      type: Boolean,
      default: false,
    },
    dictType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      options: [],
      loading: false
    };
  },
  computed: {
    newValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  mounted() {
    this.handleClear()
  },
  methods: {
    async filterMethod(query) {
      this.loading = true
      try {
        let resp = await dictApi.dictList({
          type: this.dictType,
          number: this.number || 10,
          name: query
        })
        this.loading = false
        this.options = resp.data.data
      } catch(err) {
        this.loading = false
        this.$message.error("请求失败")
      }
    },
    handleClear() {
      this.filterMethod('')
    },
    handleChange(rowData) {
      this.$emit('onChange', rowData)
    }
  },
};
</script>