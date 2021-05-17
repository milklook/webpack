import qs from 'qs'
import request from '@/utils/axios'

/**
 * @name select下拉：字典库
 * @param {type:字典库表名, number:limit显示条数, name：queryString输入查询值} params 
 * @returns
 */
export function dictList({type, number, name}) {
  return request({
		url: '/eaqc/rest/sys/select/getDictByType',
		method: 'get',
		params: {type, number, name}
	})
}

/**
 * @name hsCode词典表
 */
 export function hsList(parmas) {
	return request({
		url: '/eaqc/rest/sys/select/getHsByName',
		method: 'get',
		params
	})
}

/**
 * @name 所有关区
 */
 export function customsList({name, number}) {
	return request({
		url: '/eaqc/rest/sys/select/getAllCustoms',
		method: 'get',
		params: {name, number}
	})
}

/**
 * @name 直属关区
 */
 export function directCustomsList({name, number}) {
	return request({
		url: '/eaqc/rest/sys/select/getAllCustoms',
		method: 'get',
		params: {name, number}
	})
}

/**
 * @name 直属关区code获取隶属关区
 */
 export function subCustomsListByCode({parentCode, number, name}) {
	return request({
		url: '/eaqc/rest/sys/select/getAllCustoms',
		method: 'get',
		params: {
			parentCode,
			number,
			name
		}
	})
}

/**
 * 自定义上传 附件
 * @param {*} fileobj  
 */
 export function file(fileobj, url) {
	let param = new FormData();
	// 上传文件对象 名称file与后台控制器参数要一致
	param.append('file', fileobj.file);
	return request({
			method: 'post',
			// 上传地址
			url: url,
			// 定义上传头
			headers: {
					'Content-Type': 'multipart/form-data'
			},
			data: param
	});
}

/**
 * 获取附件列表
 * @param {*} ossObjectVo {businessId: 业务id, clientId: 应用id, businessType: 业务类型, md: 文件md}
 * @returns {Array} fileList
 */
export function fileList(ossObjectVo) {
	return request({
		url: '/eaqc/rest/oss/list',
		method: 'get',
		params: {
			clientId: 'eaqc',
			...ossObjectVo
		}
	})
}

/**
 * 下载附件
 * @param {*} params 
 * @returns 
 */
export function downloadFile(fileId) {
	return request({
		url: '/eaqc/rest/oss/getObject',
		method: 'get',
		params: {fileId}
	})
}

/**
 * 登录接口
 * @param
 * @returns
 */
export function login(params) {
	return request({
		url: 'eaqc/login',
		method: 'get',
		params
	})
}

/**
 * 退出登录
 * @param {*} token 
 * @returns 
 */
export function logout() {
	return request({
		url: 'eaqc/logoutNew',
		method: 'get'
	})
}

/**
 *
 */
export function getLoginInfo(token) {
	return request({
		url: 'eaqc/getLoginInfo',
		method: 'get',
		params: {token}
	})
}