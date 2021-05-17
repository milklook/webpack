import qs from 'qs'
import request from '@/utils/axios'

/**
 * 列表数据
 * @param {*} data 
 * @returns 
 */
export function getList(data) {
  return request({
		url: '/eaqc/rest/declare/getListByPage',
		method: 'post',
		data: qs.stringify(data)
	})
}

export function getDetail(params) {
  return request({
		url: '/eaqc/rest/declare/fetchById',
		method: 'get',
		params
	})
}

/**
 * 提交审核
 * @param {*} data 
 * @returns 
 */
export function submitAudit(data) {
  return request({
		url: '/eaqc/rest/declare/examine',
		method: 'post',
		headers: {'Content-Type': 'application/json; charset=UTF-8'},
		data
	})
}