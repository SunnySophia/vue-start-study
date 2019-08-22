<template>
    <div>
      <h2>我是home路由aaaaaaaa</h2>
      <router-link to='/home/news'>新闻</router-link>
      <router-link to='/home/messages'>消息</router-link>
      <router-view></router-view>
    </div>  
</template>
<script>
export default {
    name:'Home',
    data(){
      return{
        path:'/home/news'
      }
    },
    activated () {
      this.$router.push(this.path)
      console.log("activated");
      
    },
    beforeRouteLeave(to, from, next){
      this.path=this.$route.path;
      next()
    }
}
</script>

