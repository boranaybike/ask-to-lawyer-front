<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          permanent
          location="left"
        >
            <img
          style="border-radius: 50%; box-shadow: 0.1px 0.1px 10px grey; margin-top: 20px"
          width="100"
          src="@/assets/images/ike.jpg"
        />          <h1>Aybike Boran</h1>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <router-link style="text-decoration: none;" to="/customer-edit-account">
              <v-list-item class="menu" prepend-icon="mdi-home-city" title="Profili düzenle"></v-list-item>
            </router-link>

            <router-link style="text-decoration: none;" to="/customer-pending-questions">
              <v-list-item  class="menu" prepend-icon="mdi-account-group-outline" title="Bekleyen Sorular"></v-list-item>
            </router-link>
            
            <router-link style="text-decoration: none;" to="/old-questions">
              <v-list-item  class="menu" prepend-icon="mdi-account-group-outline" title="Geçmiş Sorularım"></v-list-item>
            </router-link>
            
            <router-link style="text-decoration: none;" to="/customer-offers">
              <v-list-item  class="menu" prepend-icon="mdi-account-group-outline" title="Tekliflerim"></v-list-item>
            </router-link>
          
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 500px"></v-main>
      </v-layout>
    </v-card>
  </template>

<script lang="ts">
export default {
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
}
</script>

<style>
.v-theme--light{
  padding:0 ;
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