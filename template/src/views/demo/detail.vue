<template>
  <div class="container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>详情页</span>
          <el-button
            class="button"
            type="success"
            size="mini"
            @click="drawer = true"
            >查看审核</el-button
          >
        </div>
      </template>
      <el-form
        :inline="true"
        size="mini"
        :model="formInline"
        class="demo-form-inline"
        disabled
      >
        <el-divider content-position="left">企业基本信息</el-divider>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="注册场号">
              <el-input
                v-model="formInline.regPlaceNo"
                placeholder="注册场号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="企业名称">
              <el-input
                v-model="formInline.entName"
                placeholder="企业名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="法人名称">
              <el-input
                v-model="formInline.legalPerson"
                placeholder="法人名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="法定地址">
              <el-input
                v-model="formInline.legalAddress"
                placeholder="法定地址"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="联系方式">
              <el-input
                v-model="formInline.telephone2"
                placeholder="联系方式"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left">其他企业信息</el-divider>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="注册场地理信息">
              <el-input
                v-model="formInline.regPlaceGeoInfo"
                placeholder="注册场地理信息"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="场所布局">
              <el-input
                v-model="formInline.siteLayout"
                placeholder="场所布局"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="关键位置图片">
              <el-input
                v-model="formInline.keyPic"
                placeholder="关键位置图片"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="饲养管理人员">
              <el-input
                v-model="formInline.management"
                placeholder="饲养管理人员"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="押运人员">
              <el-input
                v-model="formInline.supercargo"
                placeholder="押运人员"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="存栏母猪数量">
              <el-input
                v-model="formInline.sowNum"
                placeholder="存栏母猪数量"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="存栏活猪数量">
              <el-input
                v-model="formInline.livePigNum"
                placeholder="存栏活猪数量"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="运输车辆">
              <el-input
                v-model="formInline.transportCar"
                placeholder="运输车辆"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left">隔离检疫申报数据</el-divider>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="隔离栏舍号">
              <el-input
                v-model="formInline.isolationNo"
                placeholder="隔离栏舍号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="隔离开始日期">
              <el-input
                v-model="formInline.isolationStartTime"
                placeholder="隔离开始日期"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="计划出口日期">
              <el-input
                v-model="formInline.isolationEndTime"
                placeholder="计划出口日期"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="巡查日期">
              <el-input
                v-model="formInline.inspTime"
                placeholder="巡查日期"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="巡查内容">
              <el-input
                v-model="formInline.inspContent"
                placeholder="巡查内容"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="兽医姓名">
              <el-input
                v-model="formInline.veterName"
                placeholder="兽医姓名"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider content-position="left">动物出境申报数据</el-divider>
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="报关单号">
              <el-input
                v-model="formInline.entryId"
                placeholder="报关单号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="动物品种">
              <el-input
                v-model="formInline.animalSpec"
                placeholder="动物品种"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="数量">
              <el-input v-model="formInline.qty2" placeholder="数量"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="重量">
              <el-input
                v-model="formInline.weight"
                placeholder="重量"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="货值">
              <el-input
                v-model="formInline.value"
                placeholder="货值"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="运输工具代码">
              <el-input
                v-model="formInline.transportCode"
                placeholder="运输工具代码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="运输工具">
              <el-input
                v-model="formInline.transportName"
                placeholder="运输工具"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8">
            <el-form-item label="证书编号">
              <el-input
                v-model="formInline.certNo"
                placeholder="证书编号"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider content-position="left">安全风险监控数据</el-divider>
        <el-table
          :data="formInline.riskMonitor || []"
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
            prop="regId"
            label="注册场号"
            width="150"
            fixed="left"
          >
          </el-table-column>
          <el-table-column prop="sampleTime" label="采样时间" width="150">
          </el-table-column>
          <el-table-column prop="samplePlace" label="采样地点">
          </el-table-column>
          <el-table-column prop="sampleMethod" label="采样方法" width="120">
          </el-table-column>
          <el-table-column prop="testItem" label="检测项目" width="150">
          </el-table-column>
          <el-table-column prop="itemNo" label="样品编号" width="150">
          </el-table-column>
          <el-table-column prop="projectName" label="项目名称" width="200">
          </el-table-column>
        </el-table>
        <el-divider content-position="left">疫病检测数据</el-divider>
        <el-table
          :data="formInline.blightMonitor || []"
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
            prop="regId"
            label="注册场号"
            width="150"
            fixed="left"
          >
          </el-table-column>
          <el-table-column prop="sampleTime" label="采样时间" width="150">
          </el-table-column>
          <el-table-column prop="samplePlace" label="采样地点">
          </el-table-column>
          <el-table-column prop="sampleMethod" label="采样方法" width="120">
          </el-table-column>
          <el-table-column prop="testItem" label="检测项目" width="150">
          </el-table-column>
          <el-table-column prop="itemNo" label="样品编号" width="150">
          </el-table-column>
          <el-table-column prop="projectName" label="项目名称" width="200">
          </el-table-column>
        </el-table>
        <el-divider content-position="left">随附单据信息</el-divider>
        <el-table
          :data="fileList || []"
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
            prop="fileName"
            label="文件名"
            fixed="left"
          >
          </el-table-column>
          <el-table-column prop="contentLength" label="大小(KB)" width="150">
          </el-table-column>
          <el-table-column prop="businessType" label="业务类型" width="120">
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="150">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <a :href="scope.row.filePath" target="_blank">下载</a>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <div class="down">
        <el-button
          type="info"
          size="small"
          icon="el-icon-close"
          @click="closePage"
          >关 闭</el-button
        >
      </div>
    </el-card>

    <el-drawer
      :visible.sync="drawer"
      :direction="'rtl'"
      :show-close="false"
      :with-header="false"
      destroy-on-close
    >
      <div class="drawer-content">
        <el-form
          :inline="true"
          size="small"
          :model="formInline"
          :rules="rules"
          ref="ruleForm"
          :disabled="formInline.rowState==='11'"
        >
          <div id="planAduit">
            <el-divider content-position="left">出境申报审核</el-divider>
            <el-form-item label="审核人">
              <el-input
                v-model="formInline.examPersonName"
                placeholder="审核人"
                disabled
              ></el-input>
            </el-form-item>
            <el-form-item label="审核时间">
              <el-input
                v-model="formInline.examTime"
                placeholder="审核时间"
                disabled
              ></el-input>
            </el-form-item>
            <el-form-item label="审核结果" prop="examResult">
              <el-radio-group v-model="formInline.examResult">
                <el-radio label="APPROVAL">通过</el-radio>
                <el-radio label="REJECT">退回补正</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="审核意见" prop="examComment">
              <el-input
                type="textarea"
                v-model="formInline.examComment"
                :rows="5"
                :maxlength="500"
                :autosize="{ minRows: 5, maxRows: 10 }"
                :show-word-limit="true"
                placeholder="请输入审核意见"
              >
              </el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="drawer-footer">
        <el-button icon="el-icon-refresh-left" @click="drawer = false"
          >取 消</el-button
        >
        <el-button
          type="primary"
          icon="el-icon-s-promotion"
          @click="onSubmit"
          :loading="loading"
          v-if="formInline.rowState==='10'"
          >{{ loading ? '提交中 ...' : '提交审核' }}</el-button
        >
      </div>
    </el-drawer>
  </div>
</template>

<script>
import mixin from '@/mixin/routeChange'
import * as demoApi from '@/api/demo'
import dictSelect from '@/components/select2/dictSelect'

export default {
  name: 'declare-detail',
  components: {
    'dict-select': dictSelect,
  },
  mixins: [mixin],
  data() {
    let checkPercentPass = (rule, value, callback) => {
      if (!value) {
        return callback('此项为必填项')
      }
    }
    return {
      fileList: [{fileName: 'xxx', filePath: 'https://www.baidu.com', contentLength: 131, businessType: '出口申报', createTime: '2021-05-06 00:00:00'}],
      formInline: {
        regPlaceNo: '',
        entName: '',
      },
      rules: {
        examResult: [
          { required: true, message: '此项为必填项', trigger: 'blur' },
        ],
        checkPercent: [{ validator: checkPercentPass, trigger: 'blur' }],
        examComment: [
          { required: true, message: '此项为必填项', trigger: 'blur' },
        ],
      },
      drawer: false,
      loading: false,
    }
  },
  computed: {
  },
  mounted() {
    let declId = this.$route.query.id
    if (declId) {
      this.getPageDetail(declId)
    }
  },
  methods: {
    getPageDetail(declId) {
      demoApi
        .getDetail({ declId })
        .then((res) => {
          this.formInline = res.data.data
        })
        .catch((err) => {})
    },
    onSubmit() {
      this.loading = true
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          demoApi
            .submitAudit(this.formInline)
            .then((res) => {
              if (res.data.status == -1) {
                throw '提交失败！'
              }
              this.loading = false
              this.drawer = false
              this.$message.success('提交成功！')
              setTimeout(() => {
                this.closePage()
              }, 500)
            })
            .catch((err) => {
              this.loading = false
              this.drawer = false
              this.$message.error(err)
            })
        } else {
          this.loading = false
        }
      })
    },
    closePage() {
      this.$tabMethods.jumpPage(this, "/demo/list", "申报信息审核")
    },
  }
}
</script>

<style scoped>
</style>