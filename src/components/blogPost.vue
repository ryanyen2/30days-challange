<template>
  <div>
    <b-container>
      <b-col class="m-5 text-center">
        <h2>These are my blogs</h2>
      </b-col>
      <b-row align-h="center" class="m-5">
        <b-form-input
          v-model="search"
          placeholder="Search Blogs"
        ></b-form-input>
      </b-row>
      <b-row align-h="center" class="m-3">
        <b-card
          v-for="blog in filteredBlogs"
          :key="blog.id"
          :title="blog.title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="m-3"
        >
          <b-card-text>
            Content: {{ blog.content }}
          </b-card-text>
           <b-card-text>
            Author: {{blog.author}}
          </b-card-text>
           <b-card-text>
             HashTags:
            <ul>
              <li v-for="hashtag in blog.hashTags" :key="hashtag.id"> # {{ hashtag }}</li>
            </ul>
          </b-card-text>

          <b-button href="#" variant="primary">See More</b-button>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
import { db } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  mounted() {
    this.getBlogs();
  },
  methods: {
    async getBlogs() {
      let dbBlogs = await db.collection("blogs").get();
      const blogs = [];
      dbBlogs.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        blogs.push({
          id: appData.id,
          title: appData.title,
          content: appData.content,
          author: appData.author,
          hashTags: appData.hashTags,
        });
      });
      this.blogs = blogs;
      // console.log(this.blogs);
    },
  },
  mixins: [searchMixin],
};
</script>
