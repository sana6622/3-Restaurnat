import { createRouter, createWebHashHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import SignIn from'../views/SignIn.vue'
import RestaurantsHome from'../views/RestaurantsHome.vue'

const routes = [
 // {
 //   path: '/',
 //   name: 'home',
 //   component: HomeView
 // },
 // {
 //   path: '/about',
 //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
 //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
 // },

 { //根目錄轉址
  path: '/',
  name: 'root',
  redirect:'/restaurants'

}, 
 {
  path: '/signin',
  name: 'signin',
  component: SignIn

}, 
 {
  path: '/signup',
  name: 'signup',
  component: () => import( '../views/SignUp.vue')
},
{
  path: '/restaurants',
  name: 'restaurants',
  component: RestaurantsHome
},
{
  path: '/restaurants/feeds',
  name: 'restaurants-feeds',
  component: () => import('../views/RestaurantsFeeds.vue')
},
{
  path: '/restaurants/top',
  name: 'restaurants-top',
  component: () => import('../views/RestaurantsTop.vue')
},
{
  path:'/restaurants/:id',
  name:'restaurantMaterial',
  component: ()=>import('../views/RestaurantMaterial.vue')
},
{
  path:'/restaurants/:id/dashboard',
  name:'restaurantDashboard',
  component: ()=>import('../views/RestaurantDashboard.vue')
},
{
  path: '/users/top',
  name: 'user-top',
  component: () => import('../views/UsersTop.vue')
},
{
  path: '/users/:id',
  name: 'user-view',
  component: () => import('../views/UserView.vue')
},
 {
    path: '/:pathMatch(.*)*',
    name: 'notFoune',
    component: NotFound

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  //linkExactActiveClass: 'active',
  

  routes
})

export default router
