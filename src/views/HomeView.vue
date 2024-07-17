<template>
  <div class="main-container">
    <h1>Your Added Items</h1>
    <div class="added-container">
      <div v-if="addedPosters.length">
        <h2>Added Posters</h2>
        <AddedCard :addedItems="addedPosters" />
      </div>
      <div v-if="addedFlyers.length">
        <h2>Added Flyers</h2>
        <AddedCard :addedItems="addedFlyers" />
      </div>
      <div v-if="addedBusinessCards.length">
        <h2>Added Business Cards</h2>
        <AddedCard :addedItems="addedBusinessCards" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostersStore } from '../stores/posters'
import { useFlyersStore } from '../stores/flyers'
import { useBusinessCardsStore } from '../stores/business-cards'
import { storeToRefs } from 'pinia'
import AddedCard from '../components/AddedCard.vue'

const postersStore = usePostersStore()
const flyersStore = useFlyersStore()
const businessCardsStore = useBusinessCardsStore()

const { addedPosters } = storeToRefs(postersStore)
const { addedFlyers } = storeToRefs(flyersStore)
const { addedBusinessCards } = storeToRefs(businessCardsStore)
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  overflow: auto;

  h2 {
    text-align: center;
    width: 100%;
  }

  .added-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }
}
</style>
