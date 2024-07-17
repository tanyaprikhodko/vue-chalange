import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostersView from '../views/PostersView.vue'
import FlyersView from '../views/FlyersView.vue'
import BusinessCardsView from '../views/BusinessCardsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      children: [
        {
          path: 'posters',
          name: 'posters',
          component: PostersView
        },
        {
          path: 'flyers',
          name: 'flyers',
          component: FlyersView
        },
        {
          path: 'business-cards',
          name: 'business-cards',
          component: BusinessCardsView
        }
      ]
    }
  ]
})

export default router
