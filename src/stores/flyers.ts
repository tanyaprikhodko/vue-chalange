import { defineStore } from 'pinia'
import flyersApi from '../fakeAPI/flyers'
import type * as types from '../types/flyers'

export const useFlyersStore = defineStore('flyers', {
  state: () =>
    ({
      flyersProperties: [],
      flyersExcludes: [],
      addedFlyers: []
    }) as types.StoreState,
  actions: {
    async getFlyers() {
      const data: types.Flyers = (await flyersApi.getFlyers()) as types.Flyers

      const { properties, excludes } = data

      this.flyersProperties = properties
      this.flyersExcludes = excludes
    },
    async addFlyer(flyer: types.SelectedOptions) {
      try {
        await flyersApi.addFlyer(flyer)
        this.addedFlyers.push(flyer)
      } catch (error) {
        console.log(error)
      }
    }
    // I don't know should I add a deleteFlyer action, but I definitely can add it
  }
})
