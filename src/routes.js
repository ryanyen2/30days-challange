import homePage from './components/Home.vue';
import blogPost from './components/blogPost.vue';

export default [
  { path: "/", component: homePage },
  {path: "/blogs", component: blogPost},
];
