<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          permanent
          location="left"
        >
          <template v-slot:prepend>
            <img
          style="border-radius: 50%; box-shadow: 0.1px 0.1px 10px grey; margin-top: 20px"
          width="100"
          src="@/assets/images/ike.jpg"
        />
        <h1>Aybisko Boran</h1>
          </template>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <router-link style="text-decoration: none;" to="/lawyer-edit-account">
              <v-list-item class="menu" prepend-icon="mdi-home-city" title="Profili düzenle" value="home"></v-list-item>
            </router-link>

            <router-link style="text-decoration: none;" to="/lawyer-pending-questions">
              <v-list-item  class="menu" onclick="" prepend-icon="mdi-account-group-outline" title="Bekleyen Sorular" value="users"></v-list-item>
            </router-link>
            
                        <router-link style="text-decoration: none;" to="/earnings">
              <v-list-item  class="menu" onclick="" prepend-icon="mdi-account-group-outline" title="Kazançlar" value="users"></v-list-item>
            </router-link>
            
            <router-link style="text-decoration: none;" to="/lawyer-offers">
              <v-list-item  class="menu" onclick="" prepend-icon="mdi-account-group-outline" title="Tekliflerim" value="users"></v-list-item>
            </router-link>
          
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},

    name: "NavigationDrawer",
  components: {
  },
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'Offer', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
       ],
    }
  },
});
</script>

<style>
.v-navigation-drawer{

background-color:#EC4C0F!important;
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