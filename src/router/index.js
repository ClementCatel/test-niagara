import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from '../views/AddCard.vue'
import FirstStep from '../views/addcard/FirstStep.vue'
import SecondStep from '../views/addcard/SecondStep.vue'
import ThirdStep from '../views/addcard/ThirdStep.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/nouvelle-carte',
    component: AddCard,
    children: [
      {
        path: 'etape-1',
        name: 'step1',
        component: FirstStep
      },
      {
        path: 'etape-2',
        name: 'step2',
        component: SecondStep
      },
      {
        path: 'etape-3',
        name: 'step3',
        component: ThirdStep
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
