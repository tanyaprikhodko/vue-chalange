<template>
  <main>
    <h1>Posters</h1>
    <ul>
      <li v-for="poster in postersProperties" :key="poster.slug">
        <h2>{{ poster.title }}</h2>
        <v-form>
          <v-select
            :disabled="poster.locked"
            v-model="selected[poster.slug]"
            :items="normalizedOptions(poster.options)"
            item-title="name"
            item-value="slug"
            :label="poster.title"
            :rules="validationRules"
            return-object
          ></v-select>
        </v-form>
      </li>
    </ul>
    <v-btn @click="addPoster">Add Poster</v-btn>
  </main>
</template>

<script setup lang="ts">
import { usePostersStore } from '../stores/posters'
import { onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { validateSelect, normalizeOptions } from '../utils'
import type * as type from '../types/posters'

import { useRouter } from 'vue-router'

const router = useRouter()

const postersStore = usePostersStore()
const { postersProperties, postersExcludes } = storeToRefs(postersStore)

const selected = ref<type.SelectedOptions>({} as type.SelectedOptions)

const validationRules = [
  //should I add validation for nullable fields? Is it works like required??
  (v: any) => {
    if (!selected.value || !!v) {
      return true
    }

    return validateSelect(postersExcludes.value, selected.value)
  }
]

const normalizedOptions = (options: type.Option[]) => {
  return normalizeOptions(options)
}

const addPoster = async () => {
  await postersStore.addPoster(selected.value)
  selected.value = {} as type.SelectedOptions
  router.push('/home')
}

onBeforeMount(() => {
  postersStore.getPosters()
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
