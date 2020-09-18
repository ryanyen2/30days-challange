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
            {{ blog.body }}
          </b-card-text>

          <b-button href="#" variant="primary">See More</b-button>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  mixins: [searchMixin],
};
</script>
