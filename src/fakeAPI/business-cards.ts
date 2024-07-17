import businessCards from './mockedData/business-cards.json'

// This is a fake API that simulates fetching business cards from a server
// and adding a business card to a server
// but in reality, it just returns the business cards from a JSON file
// and logs the business card to the console

// There is no setTimeout to simulate a delay, because I didn't add loading states to the UI
const getBusinessCards = async () => {
  return new Promise((resolve) => {
    resolve(businessCards)
  })
}

const addBusinessCard = async (businessCard: any) => {
  return new Promise((resolve) => {
    // I don't think it's a good idea to log the business card to the console, but this is just a fake API
    console.log(`added ${businessCard}`)
    resolve({ status: '200' })
  })
}

export default { getBusinessCards, addBusinessCard }