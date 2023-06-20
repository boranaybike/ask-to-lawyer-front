<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          permanent
          location="left">
            <img
          style="border-radius: 100%;  margin-top: 20px"
          width="120"
          src="@/assets/images/jdeep.png"/>          
          <h1>{{name}}</h1>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <router-link style="text-decoration: none;" to="/customer-edit-account">
              <v-list-item class="menu" prepend-icon="mdi-account" title="Profili düzenle"></v-list-item>
            </router-link>

            <router-link style="text-decoration: none;" to="/customer-pending-questions">
              <v-list-item  class="menu" prepend-icon="mdi-clock" title="Bekleyen Sorular"></v-list-item>
            </router-link>
            
            <router-link style="text-decoration: none;" to="/old-questions">
              <v-list-item  class="menu" prepend-icon="mdi-check-all" title="Geçmiş Sorularım"></v-list-item>
            </router-link>
            
            <router-link style="text-decoration: none;" to="/customer-offers">
              <v-list-item  class="menu" prepend-icon="mdi-heart" title="Tekliflerim"></v-list-item>
            </router-link>
          
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 500px"></v-main>
      </v-layout>
    </v-card>
  </template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "CustomerNavigationDrawer",
  
  setup() {
    const name = ref("Johnny Deep");
    return {
      name
    }
  },

  components: {
  },

});
</script>

<style>
.v-theme--light{
  padding:0 ;
}

.v-list-item__content{
  text-align: left;
}
.v-navigation-drawer{
background-color:#EC4C0F!important;
height: 100vh;
}
.menu{
  background-color: white !important;
  margin: 5%;
  width:100%;
}
h1{
  color: white;
}
</style>