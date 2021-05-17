import store from '@/store'
/**
 * 
 * @param {*} fullPath 路由全路径
 * @param {*} label Tab名称
 * @param {*} isIndexed 是否根据path和label自动生成index
 */
export function setPage(fullPath, label = '未命名', isIndexed = false) {
  store.dispatch('tabViews/setPage', {
    fullPath: fullPath,
    label: label,
    isIndexed: isIndexed
  })
}

/**
 * 跳转到目标页并刷新
 * @param component 关闭的当前组件实例
 * @param toFullPath 跳转的目标路由
 * @param toLabel 跳转的目标tab名 
 */
export function jumpPage(component, toFullPath, toLabel) {
  removePage(component.$route.fullPath)
  delete component.$options.parent.cache[`${toFullPath}`]
  setPage(toFullPath, toLabel)
}

export function removePage(fullPath, isCurrent = true) {
  store.dispatch('tabViews/removePage', {
    fullPath: fullPath,
    isCurrent: isCurrent
  })
}

export function removeOtherPages(fullPath) {
  store.dispatch('tabViews/removeOtherPages', {
    fullPath: fullPath
  })
}

export function removeLeftPages(fullPath) {
  store.dispatch('tabViews/removeLeftPages', {
    fullPath: fullPath
  })
}

export function removeRightPages(fullPath) {
  store.dispatch('tabViews/removeRightPages', {
    fullPath: fullPath
  })
}