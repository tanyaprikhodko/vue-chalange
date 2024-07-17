<template>
  <div class="container" v-for="items in addedItems" :key="items.slug">
    <ul>
      <li v-for="item in items" :key="item.slug">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  addedItems: Array
})
</script>

<style lang="scss" scoped>
.container {
  padding: 16px;
  border-bottom-style: solid;
  border-bottom-color: rgba(238, 0, 0, 0.566);
  border-bottom-width: 2px;
}
</style>
