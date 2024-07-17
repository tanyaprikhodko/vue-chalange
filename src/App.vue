<template>
  <div class="app-container">
    <TheHeader />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  font-family: 'Arial', sans-serif;

  .content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
}
</style>
