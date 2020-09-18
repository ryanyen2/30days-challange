<template>
  <div>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>
<script>
// import Home from './components/Home.vue';
import AppHeader from './components/AppHeader';
// import BlogPost from './components/blogPost';

export default {
  components: {
    // Home,
    // BlogPost,
    AppHeader,
  },
}
</script>

<style>
</style>
