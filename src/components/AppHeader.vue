<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand class="mr-5">
        <img
          src="https://cdn.iconscout.com/icon/free/png-512/vue-282497.png"
          width="30rem"
          class="d-inline-block align-top"
          alt="vue_icon"
        />
        30 Days Challenge
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item> <router-link to="/" exact>Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/blogs" exact>Blog Post</router-link></b-nav-item>
        <b-nav-item><router-link to="/addBlog" exact>Add Blog Post</router-link></b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">CH</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item><router-link to="/login">Login</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/register">Register</router-link></b-dropdown-item>
          <b-dropdown-item><router-link to="/logout">Logout</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  color: #ff9900;
}

li a {
  text-decoration: none;
  color: #ff9900;
}
</style>
