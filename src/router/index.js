// 引入vue框架
import Vue from 'vue'
// 引入vue-router路由依赖
import Router from 'vue-router'
// 引入页面组件，命名为HelloWorld
import HelloWorld from '@/components/HelloWorld'

// 使用路由依赖
Vue.use(Router)

// 定义路由配置
export default new Router({
  routes: [   //配置路由，这里是个数组
    {      //每一个链接都是一个对象
      path: '/',     //链接路径
      name: 'HelloWorld',   //路由名称，
      component: HelloWorld  //对应的组件模板
    }
  ]
})
