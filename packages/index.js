import ruiguClock from './ruiguClock/index.vue'

const components = [ruiguClock]

// 定义install方法
const install = (Vue) => {
  // 遍历注册所有的组件
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}