<script setup>
import NavbarComp from "./components/NavbarComp.vue";
import FooterComp from "./components/FooterComp.vue";
</script>

<template>
  <div id="app">
    <navbar-comp></navbar-comp>
    <router-view></router-view>
    <footer-comp></footer-comp>
  </div>
</template>

<style scoped>
#app {
  text-align: center;
  color: white;
}
</style>
