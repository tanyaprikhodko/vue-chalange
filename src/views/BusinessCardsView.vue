<template>
  <main>
    <h1>Business Cards</h1>
    <ul>
      <li v-for="card in businessCardsProperties" :key="card.slug">
        <h2>{{ card.title }}</h2>
        <v-select
          :disabled="card.locked"
          v-model="selected[card.slug]"
          :items="normalizedOptions(card.options)"
          item-title="name"
          item-value="slug"
          :label="card.title"
          :rules="validationRules"
          return-object
        ></v-select>
      </li>
    </ul>
    <v-btn @click="addBusinessCard">Add Business Card</v-btn>
  </main>
</template>

<script setup lang="ts">
import { useBusinessCardsStore } from '../stores/business-cards'
import { onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { validateSelect, normalizeOptions } from '../utils'
import * as type from '../types/business-cards'

import { useRouter } from 'vue-router'

const router = useRouter()

const businessCardsStore = useBusinessCardsStore()
const { businessCardsProperties, businessCardsExcludes } = storeToRefs(businessCardsStore)

const selected = ref<type.SelectedOptions>({} as type.SelectedOptions)

const validationRules = [
  //should I add validation for nullable fields? Is it works like required??
  (v: any) => {
    if (!selected.value || !!v) {
      return true
    }

    return validateSelect(businessCardsExcludes.value, selected.value)
  }
]

const normalizedOptions = (options: type.Option[]) => {
  return normalizeOptions(options)
}

const addBusinessCard = async () => {
  await businessCardsStore.addBusinessCard(selected.value)
  selected.value = {} as type.SelectedOptions
  router.push('/home')
}

onBeforeMount(() => {
  businessCardsStore.getBusinessCards()
})
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 32px;

  ul {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;

    li {
      width: 100%;
      list-style-type: none;
    }
  }
}
</style>
