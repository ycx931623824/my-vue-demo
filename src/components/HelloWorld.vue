<template>
  <div class="hello">
    <!-- 输出变量 -->
    <h1>父组件</h1>
    <h2>Essential Links</h2>
    <aaa></aaa>
  </div>
</template>

<script>
import aaa from './aaa'
export default {
    // 定义页面名称，可以不要
  name: 'HelloWorld',
  components: {
    aaa
  },
  data () {
    return {
    }
  },
  mounted () {
    console.log(getSelection)
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
