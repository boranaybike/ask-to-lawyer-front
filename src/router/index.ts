import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/customer-offers',
    name: 'customerOffers',
    component: () => import('../views/Customer/CustomerOffersView.vue')
  },
  
  {
    path: '/old-questions',
    name: 'oldQuestions',
    component: () => import('../views/Customer/OldQuestionsView.vue')
  },
  
  {
    path: '/customer-pending-questions',
    name: 'customerPendingQuestions',
    component: () => import('../views/Customer/CustomerPendingQuestionsView.vue')
  },
  
  {
    path: '/customer-edit-account',
    name: 'customerEditAcount',
    component: () => import('../views/Customer/CustomerEditAccountView.vue')
  },
    
  {
    path: '/lawyer-pending-questions',
    name: 'lawyerPendingQuestions',
    component: () => import('../views/Lawyer/LawyerPendingQuestionsView.vue')
  },

  {
    path: '/lawyer-edit-account',
    name: 'lawyerEditAcount',
    component: () => import('../views/Lawyer/LawyerEditAccountView.vue')
  },

  {
    path: '/lawyer-offers',
    name: 'lawyerOffers',
    component: () => import("../views/Lawyer/LawyerOffersView.vue")
  },

  {
    path: '/lawyer-earnings',
    name: 'lawyerEarnings',
    component: () => import("../views/Lawyer/EarningsView.vue")
  },
  {
    path: '/homepage',
    name: 'homePage',
    component: () => import("../views/HomePage.vue")
  },
  {
    path: '/anasayfa',
    name: 'anasayfa',
    component: () => import("../views/AnasayfaView.vue")
  },
  {
    path: '/lawyers',
    name: 'lawyers',
    component: () => import("../views/LawyersView.vue")
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import("../views/Lawyer/QuestionsView.vue")
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
