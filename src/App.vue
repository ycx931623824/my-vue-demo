<!-- 模板 
（1） 模板只能包含一个父节点，也就是说顶层的div只能有一个（如上图，父节点为#app的div，其没有兄弟节点）
（2）<router-view/>是子路由视图插槽，后面的路由页面都显示在此处，相当于iframe
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<!-- js代码 
vue通常用es6来写，用export default导出，其下面可以包含数据data，生命周期(mounted等)，方法(methods)等。
-->
<script>
export default {
  name: 'App'
}
</script>

<!-- 
css样式 
样式通过style标签<style></style>包裹，默认是影响全局的，如需定义作用域只在该组件下起作用，需在标签上加scoped，<style scoped></style>
-->

<style>
#app {
  sadasdsad
  sadasdsadasd
  a
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
