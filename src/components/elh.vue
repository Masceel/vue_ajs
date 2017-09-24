<template>
  <div class="hello">
     <el-button @click="visible = true">按钮</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'elh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false
    }
  }
}
</script>

 