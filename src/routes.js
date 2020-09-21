import homePage from "./components/Home.vue";
import blogPost from "./components/blogPost.vue";
import addBlog from "./components/addBlog.vue";

export default [
  { path: "/", component: homePage },
  { path: "/blogs", component: blogPost },
  { path: "/addBlog", component: addBlog },
];
