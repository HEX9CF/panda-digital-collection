<script setup>
import logo from '../../../../resources/images/icon.png?asset'
</script>

<template>
  <el-affix position="top" :offset="0">
    <el-menu
        :default-active="'/'"
        mode="horizontal"
        text-color="#fff"
        background-color="#121212"
        active-text-color="#ffd04b"
        router
    >
      <div>
        <img :src="logo" id="logo"/>
        <span id="logoText">&nbsp;岁岁廿廿的元宇宙&nbsp;</span>
      </div>
      <el-menu-item index="/"><el-icon><HomeFilled /></el-icon>首页 Home</el-menu-item>
      <el-menu-item index="/display"><el-icon><View /></el-icon>元宇宙 Metaverse</el-menu-item>
      <el-menu-item index="/activation"><el-icon><Key /></el-icon>激活藏品 Activation</el-menu-item>
      <el-menu-item index="/about"><el-icon><InfoFilled /></el-icon>关于 About</el-menu-item>
    </el-menu>
  </el-affix>
</template>

<style scoped>
#logo {
  max-height: 48px;
  width: auto;
  vertical-align:middle;
}

#logoText {
  font-size: 24px;
}

a {
  text-decoration:none;
}
</style>
