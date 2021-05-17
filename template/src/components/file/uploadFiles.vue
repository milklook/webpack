<template>
    <div class="uploadFils">
        <el-upload
            class="upload-demo"
            action
            :http-request="fileupload"
            :before-upload="beforeAvatarUpload"
            :show-file-list="false"
        >
            <el-button size="mini" type="primary" style="margin:5px">附件上传</el-button>
        </el-upload>

        <el-table :data="newList" border stripe style="width: 100%">
            <el-table-column prop="fileName" label="文件名称"></el-table-column>
            <el-table-column prop="uploadUserName" label="上传人"></el-table-column>
            <el-table-column prop="createTime" label="上传时间">
                <template
                    slot-scope="scope"
                >{{scope.row.createTime|formatDate(scope.row.createTime)}}</template>
            </el-table-column>
            <el-table-column width="80px">
                <template slot-scope="scope">
                    <el-button size="small" type="text">
                        <a :href="scope.row.fileUrl">下载</a>
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column width="80px" v-if="isShowDel">
                <template slot-scope="scope">
                    <el-button size="small" type="text" @click="deleteButton(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    
    </div>
</template>

<script>

import * as common from '@/api/common'

export default {
    props: {
        //文件列表
        files: {
            type: Array,
            default: () => []
        },
        url:{
            type:String,
            required: true
        },
        //是否展示删除列(默认显示删除列,可自定义)
        isShowDel: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            newList: []
        };
    },
    methods: {
        //上传前判断
        beforeAvatarUpload(file) {
            //文件数量判断
            const isLt5 = this.newList.length < 5;
            if (!isLt5) {
                this.$message.error('上传文件数量不能超过 5 个!');
            }
            //大小判断
            const isLt10M = file.size / 1024 / 1024 < 10;
            if (!isLt10M) {
                this.$message.error('上传文件大小不能超过 10MB!');
            }
            return isLt5 && isLt10M;
        },
        //根据索引删除文件列表中的文件
        deleteButton(index) {
            this.newList.splice(index, 1);
        },
        //上传文件
        fileupload(file) {
            common.file(file, this.url).then(res => {
                if (res.code === 20000) {
                    this.newList.push(res.data);
                } else {
                    this.$message.error('服务器繁忙，请稍后再试');
                }
            });
        }
    },
    watch: {
        //监听文件列表
        newList: function(newVal, oldVal) {
            this.$emit('fun', { backData: this.newList });
        }
    },
    filters: {
        //时间过滤器
        formatDate: function(val) {
            let date = new Date(val);
            return date;
        }
    },
    computed: {},
    created() {
        //父组件传递过来的附件数组
        this.newList = this.files;
    }
};
</script>

<style scoped>
.uploadFils {
    width: 100%;
    margin-top: 20px;
    border: 1px solid #666;
    padding: 4px;
    min-height: 100px;
    box-sizing: border-box;
}
.mt20 {
    margin-top: 20px;
}
</style>