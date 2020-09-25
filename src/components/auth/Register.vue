<template>
  <div class="container m-5">
    <form @submit.prevent="userRegistration">
      <h3>註冊</h3>

      <div class="form-group">
        <label>名子</label>
        <input
          type="text"
          class="form-control form-control-lg"
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label>信箱</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="user.email"
        />
      </div>

      <div class="form-group">
        <label>密碼</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="user.password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        註冊
      </button>

      <p class="forgot-password text-right">
        已經註冊過了?
        <router-link to="/login">登入</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    userRegistration() {
      firebaseAuth
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          res.user
            .updateProfile({
              displayName: this.user.name,
            })
            .then(() => {
              this.$router.push("/login");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
