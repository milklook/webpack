<template>
  <div class="container">
    <div class="query-form">
      <el-form
        :inline="true"
        size="mini"
        :model="formInline"
        class="demo-form-inline"
        @submit.native.prevent
      >
        <el-row :gutter="10">
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="申请单编号">
              <el-input
                v-model="formInline.declId"
                placeholder="申请单编号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="申报企业">
              <el-input
                v-model="formInline.entName"
                placeholder="申报企业"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="出仓数量">
              <el-input
                v-model="formInline.owQty"
                placeholder="出仓数量"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="封识号">
              <el-input
                v-model="formInline.owSealingNo"
                placeholder="封识号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="证书号">
              <el-input
                v-model="formInline.owCertNo"
                placeholder="证书号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="审核时间开始">
              <el-date-picker
                v-model="formInline.examTimeStart"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="审核时间开始"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="6">
            <el-form-item label="审核时间结束">
              <el-date-picker
                v-model="formInline.examTimeEnd"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                placeholder="审核时间结束"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <div style="text-align: right">
          <el-button
            type="primary"
            size="small"
            icon="el-icon-search"
            @click="onSubmit"
            >查询</el-button
          >
          <el-button
            size="small"
            icon="el-icon-refresh-right"
            @click="onRefresh"
            >重置</el-button
          >
        </div>
      </el-form>
    </div>

    <el-card class="box-card">
      <el-table
        :data="tableData"
        size="small"
        stripe
        border
        style="width: 100%"
        max-height="400"
      >
        <el-table-column
          type="index"
          label="序号"
          width="80"
          align="center"
          fixed="left"
        ></el-table-column>
        <el-table-column
          prop="declId"
          label="申请单编号"
          width="150"
          fixed="left"
        >
          <template slot-scope="{ row }">
            <a
              href="javascript:;"
              @click="toDetail(row.declId)"
              style="color: #3a8ee6"
              ><span>{{ row.declId }}</span></a
            >
          </template>
        </el-table-column>
        <el-table-column prop="entryId" label="报关单号" width="150">
        </el-table-column>
        <el-table-column prop="entName" label="申报企业" minWidth="150">
        </el-table-column>
        <el-table-column prop="animalSpec" label="动物品种" width="120">
        </el-table-column>
        <el-table-column prop="qty2" label="数量" width="120">
        </el-table-column>
        <el-table-column prop="weight" label="重量" width="120">
        </el-table-column>
        <el-table-column prop="value" label="货值（美元）" width="120">
        </el-table-column>
        <el-table-column prop="certNo" label="证书编号" width="150">
        </el-table-column>
        <el-table-column prop="transportName" label="运输工具" min-width="120">
        </el-table-column>
        <el-table-column prop="shipmentQty" label="实际装运数量" width="120">
        </el-table-column>
        <el-table-column prop="exitPort" label="出境口岸" width="120">
        </el-table-column>
        <el-table-column prop="transferWh" label="目的地中转仓" width="150">
        </el-table-column>
        <el-table-column prop="declTime" label="上报时间" width="150">
        </el-table-column>
        <el-table-column prop="rowState" label="状态" width="120" fixed="right">
          <template slot-scope="{ row }">
            <span v-if="row.rowState == '10'">待审核</span>
            <span v-if="row.rowState == '11'">退回</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :page-size="formInline.limit"
        layout="total, prev, pager, next"
        :total="count"
        @current-change="handleChange"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import routeChange from '@/mixin/routeChange'
import * as demoApi from '@/api/demo'

const INIT_PAGE_INFO = {
  limit: 10,
  page: 1,
}

export default {
  name: 'declareList',
  mixins: [routeChange],
  data() {
    return {
      formInline: { ...INIT_PAGE_INFO },
      tableData: [],
      count: 0,
    }
  },
  mounted() {
    this.getPageList(this.formInline)
  },
  methods: {
    getPageList(queryParams) {
      demoApi
        .getList(queryParams)
        .then((res) => {
          this.count = res.data.count
          this.tableData = res.data.data
        })
        .catch((err) => {})
    },
    handleChange(currPage) {
      this.formInline.page = currPage
      this.getPageList(this.formInline)
    },
    onSubmit() {
      this.getPageList(this.formInline)
    },
    onRefresh() {
      this.formInline = { ...INIT_PAGE_INFO }
      this.getPageList(this.formInline)
    },
    toDetail(id) {
      const randomId = new Date().getTime()
      const fullPath = '/demo/detail' + (id ? `?id=${id}` : `?r=${randomId}`)
      const title = id ? `申报详情页_${id}` : `申报新增页`
      this.$tabMethods.setPage(fullPath, title)

      // /* const randomId = new Date().getTime() */
      // const fullPath = `/declare/detail?id=${id}`
      // const title = id ? `申报详情页_${id}` : `申报新增页`
      // setPage(fullPath, title)
    },
  },
}
</script>

<style scoped>
</style>