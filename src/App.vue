<template>
  <div id="app">
    <h2>nihao</h2>
     <router-link to="/home" tag='span'>home</router-link>
    <router-link to="/about" tag='span'>about</router-link>
    <router-link :to="'/user/'+userId" tag='span'>user</router-link>
    <router-link :to="{path:'/profile',query:{name:'why',age:18}}">profile</router-link>
    <!-- <button @click='homeM'>home</button>
    <button @click='aboutM'>about</button> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){
    return{
userId:"zhangsan"
    }
  },
  methods:{
    // homeM(){
    //   this.$router.push('/home')
    // },
    // aboutM(){
    //   this.$router.push('./about')//$router为大的路由  $route代表活跃的路由
    // }
    // profileClick(){
    //   this.$router.push({
    //     path:'/profile',
    //     query:{
    //       name:'kaobo',
    //       age:18
    //     }
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color: red
}
</style>
