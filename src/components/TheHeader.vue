<template>
  <div class="header">
    <div class="logo">
      <router-link to="/home">
        <img src="@/assets/print.png" alt="Logo" />
      </router-link>
    </div>
    <div class="menu">
      <ul>
        <li>
          <router-link
            :class="{ active: isActive('business-cards') }"
            to="/products/business-cards"
          >
            Business Cards
          </router-link>
        </li>
        <li>
          <router-link :class="{ active: isActive('flyers') }" to="/products/flyers">
            Flyers
          </router-link>
        </li>
        <li>
          <router-link :class="{ active: isActive('posters') }" to="/products/posters">
            Posters
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (item: string) => {
  return route.name === item
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #fff;

  .logo img {
    height: 50px;
  }

  .menu ul {
    list-style-type: none;
    display: flex;
    gap: 20px;

    li {
      display: flex;
      align-items: center;
      font-weight: bold;
      text-transform: uppercase;

      a {
        text-decoration: none;
        color: #565656;
      }

      .active {
        color: #ec0a33bc;
      }
    }
  }
}
</style>
