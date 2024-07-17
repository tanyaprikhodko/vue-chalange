import { defineStore } from 'pinia'
import postersApi from '../fakeAPI/posters'
import type * as types from '../types/posters'

export const usePostersStore = defineStore('posters', {
  state: () =>
    ({
      postersProperties: [],
      postersExcludes: [],
      addedPosters: []
    }) as types.StoreState,
  actions: {
    async getPosters() {
      const data: types.Posters = (await postersApi.getPosters()) as types.Posters
      const { properties, excludes } = data
      this.postersProperties = properties
      this.postersExcludes = excludes
    },

    async addPoster(poster: types.SelectedOptions) {
      try {
        await postersApi.addPoster(poster)
        this.addedPosters.push(poster)
      } catch (error) {
        console.log(error)
      }
    }
  }
  // I don't know should I add a delete action, but I definitely can add it
})
