<template>
  <div id="app">
    <h4>管理員頁面</h4>
    <div class="justify-content-centermy-1 row">
      <b-form-fieldset horizontal label="單頁顯示行數" class="col-6">
        <b-form-select
          :options="[
            { text: 5, value: 5 },
            { text: 10, value: 10 },
            { text: 15, value: 15 },
          ]"
          v-model="perPage"
        >
        </b-form-select>
      </b-form-fieldset>

      <b-form-fieldset horizontal label="搜尋電話或時間" class="col-6">
        <b-form-input
          v-model="filter"
          placeholder="Type to Search"
        ></b-form-input>
      </b-form-fieldset>
    </div>

    <!-- Main table element -->
    <b-table
      striped
      hover
      :items="items"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
    >
    </b-table>

    <div class="justify-content-center row my-1">
      <b-pagination
        size="md"
        :total-rows="this.items.length"
        :per-page="perPage"
        v-model="currentPage"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "@/config/firebaseConfig.js";

export default {
  data() {
    return {
      user: null,
      currentPage: 1,
      perPage: 5,
      filter: null,
      items: [],
      fields: {
        推薦人電話: {
          label: "推薦人電話",
          sortable: true,
        },
        登錄時間: {
          label: "登錄時間",
          sortable: true,
        },
      },
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.getRefTel();
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    async getRefTel() {
      let snapshot = await db.collection("rsv-cal").get();
      snapshot.forEach((doc) => {
        let appData = doc.data();
        appData.id = doc.id;
        this.items.push({
          推薦人電話: appData.refferer,
          登錄時間: appData.start,
        });
      });
    },
    details(item) {
      alert(JSON.stringify(item));
    },
  },
};
</script>

<style scoped>
#app {
  padding: 20px;
  height: 500px;
  margin-top: 1em;
}
#app h4 {
  padding: 0.5em;
  display: block;
  background-color: #ff9900;
  color: white;
  width: 100%;
  max-height: 2.2em;
  border-radius: 1em;
  margin-bottom: 1.5em;
}
</style>
