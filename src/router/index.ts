import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tokenService from "@/services/Token.service";

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
    component: () => import('../views/Customer/CustomerPendingQuestionsView.vue'),
    meta: {
      requiresActivation: true,
    },
  },
  
  {
    path: '/customer-edit-account',
    name: 'customerEditAcount',
    component: () => import('../views/Customer/CustomerEditAccountView.vue'),
    meta: {
      requiresActivation: true,
    },
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
    path: '/messages',
    name: 'MessagePage',
    component: () => import("../views/MessagePage.vue")
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
  {
    path: '/customer-register',
    name: 'customerRegister',
    component: () => import("../views/Customer/CustmerRegisterView.vue")
  },
  {
    path: '/lawyer-register',
    name: 'lawyerRegister',
    component: () => import("../views/Lawyer/LawyerRegisterView.vue")
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import("../views/SigninView.vue")
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresActivation = to.meta.requiresActivation;

  if (requiresActivation) {
    const activationToken = tokenService.getToken();
    
    if (!activationToken) {
      next('/customer-register');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
