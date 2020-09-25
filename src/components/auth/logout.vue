<template>
    <div class="container m-5">
        <h3>您好，請問要登出嗎?</h3>
           <p>{{user.displayName}}</p>
           <p>{{user.email}}</p>
        
        <button 
        type="submit" 
        class="btn btn-dark btn-lg btn-block"
        @click="logOut()">
            登出
        </button>
    </div>
</template>

<script>
import { firebaseAuth } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebaseAuth.signOut().then(() => {
        firebaseAuth.onAuthStateChanged(() => {
          this.$router.push('/login')
        })
      })
    }
  }
};
</script>