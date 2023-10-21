<template>
  <div class="home">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
        <el-skeleton :rows="5" animated />
        <br/>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script setup>
const title = "激活藏品";
const smallTitle = "激活你的数字藏品";
</script>


<style scoped>
el-carousel {
  height: 100px;
  width: 100px;
}

el-carousel-item el-image {
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
</style>
