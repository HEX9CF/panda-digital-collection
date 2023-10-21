<script setup>

</script>

<template>
  <div id="app">
    <h1>app</h1>
    <p>
      <router-link to="/">home</router-link>
      &nbsp;
      <router-link to="/display">display</router-link>
      &nbsp;
      <router-link to="/about">about</router-link>
    </p>
    <router-view></router-view>
    <h1>app</h1>
  </div>
</template>

<style scoped>

</style>
