<template>
  <div class="hello">
    <!-- 输出变量 -->
    <h1>子组件</h1>
    <h2>子组件1</h2>
  </div>
</template>

<script>
export default {
    // 定义页面名称，可以不要
  name: 'aaa',
  data () {
    return {
       // 定义变量
      msg: 'Welcome to Your 123dasdasasasa123123.jass asdassadas'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
