import { defineStore } from 'pinia'
import businessCardsApi from '../fakeAPI/business-cards'
import type * as types from '../types/business-cards'

export const useBusinessCardsStore = defineStore('businessCards', {
  state: () =>
    ({
      businessCardsProperties: [],
      businessCardsExcludes: [],
      addedBusinessCards: []
    }) as types.StoreState,
  actions: {
    async getBusinessCards() {
      try {
        const data: types.BusinessCards =
          (await businessCardsApi.getBusinessCards()) as types.BusinessCards

        const { properties, excludes } = data

        this.businessCardsProperties = properties
        this.businessCardsExcludes = excludes
      } catch (error) {
        console.log(error)
      }
    },

    async addBusinessCard(businessCard: types.SelectedOptions) {
      try {
        await businessCardsApi.addBusinessCard(businessCard)
        this.addedBusinessCards.push(businessCard)
      } catch (error) {
        console.log(error)
      }
    }

    // I don't know should I add a deleteBusinessCard action, but I definitely can add it
  }
})
