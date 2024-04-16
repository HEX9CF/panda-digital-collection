<template>
  <div class="home">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20">
        <h1>{{ title }}</h1>
        <el-text class="mx-1" size="small">{{ smallTitle }}</el-text>
        <el-divider></el-divider>
        <br/>
        <el-row>
          <el-col :span="6"></el-col>
          <el-col :span="12">
            <el-form label-width="auto" style="max-width: 600px">
              <el-form-item label="激活码">
                <el-input
                  style="width: 480px"
                  type="password"
                  placeholder="请输入激活码"
                  show-password
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" disabled>激活 Activate</el-button>
                <el-button>取消 Cancel</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row>
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
