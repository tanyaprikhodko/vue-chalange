<template>
  <main>
    <h1>Flyers</h1>
    <ul>
      <li v-for="flyer in flyersProperties" :key="flyer.slug">
        <h2>{{ flyer.title }}</h2>
        <v-form>
          <v-select
            :disabled="flyer.locked"
            v-model="selected[flyer.slug]"
            :items="normalizedOptions(flyer.options)"
            item-title="name"
            item-value="slug"
            :label="flyer.title"
            :rules="validationRules"
            return-object
          ></v-select>
        </v-form>
      </li>
    </ul>
    <v-btn @click="addFlyer">Add Flyer</v-btn>
  </main>
</template>

<script setup lang="ts">
import { useFlyersStore } from '../stores/flyers'
import { onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { validateSelect, normalizeOptions } from '../utils'
import type * as type from '../types/flyers'

import { useRouter } from 'vue-router'

const router = useRouter()

const flyersStore = useFlyersStore()
const { flyersProperties, flyersExcludes } = storeToRefs(flyersStore)

const selected = ref<type.SelectedOptions>({} as type.SelectedOptions)

const validationRules = [
  //should I add validation for nullable fields? Is it works like required??
  (v: any) => {
    if (!selected.value || !!v) {
      return true
    }

    return validateSelect(flyersExcludes.value, selected.value)
  }
]

const normalizedOptions = (options: type.Option[]) => {
  return normalizeOptions(options)
}

const addFlyer = async () => {
  await flyersStore.addFlyer(selected.value)
  selected.value = {} as type.SelectedOptions
  router.push('/home')
}

onBeforeMount(() => {
  flyersStore.getFlyers()
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
