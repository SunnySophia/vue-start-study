
import VueRouter from 'vue-router';
import Vue from 'vue'
// import Home from '../components/home.vue';
// import About from '../components/about.vue';
// import User from '../components/user.vue'
//路由看加载的使用
const Home=()=>import('../components/home.vue')
const About =()=>import('../components/about.vue')
const User=()=>import('../components/user.vue')
const homeNews=()=>import('../components/homeNews.vue')
const homeMessage=()=>import('../components/homeMessage.vue')
const profile=()=>import('../components/profile.vue')
Vue.use(VueRouter)
const routes=[{
    path:'',
    redirect:'/home'},
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'',
        component:homeMessage
      },
      {path:'news',
    component:homeNews},
    {
      path:'messages',
      component:homeMessage
    }
    ],
    meta: { title:'home' }
  },
  {
    path:'/about',
    component:About,
    meta: { title:'about' }
  },
  {
    path:'/user/:userId',
    component:User,
    meta: { title:'user' }
  },
{
    path:'/profile',
    component:profile,
    meta: { title:'profile' }
}]
  const router=new VueRouter({
   routes,
   mode:'history',
   linkActiveClass:'active' 
  })
  router.beforeEach((to, from, next) => {
    document.title=to.matched[0].meta.title
    next()//必须要使用的函数，内部封装好了
  })
  export default router
  
    