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
          src="@/assets/images/jdeep.png"
        />
        <h1>Av. {{name}}</h1>
          </template>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <router-link style="text-decoration: none;" to="/lawyer-edit-account">
              <v-list-item class="menu" prepend-icon="mdi-account" title="Profili düzenle" value="home"></v-list-item>
            </router-link>

            <router-link style="text-decoration: none;" to="/lawyer-pending-questions">
              <v-list-item  class="menu" onclick="" prepend-icon="mdi-clock" title="Bekleyen Sorular" value="users"></v-list-item>
            </router-link>
            
                        <router-link style="text-decoration: none;" to="/earnings">
              <v-list-item  class="menu" onclick="" prepend-icon="mdi-cash-multiple" title="Kazançlar" value="users"></v-list-item>
            </router-link>
            
            <router-link style="text-decoration: none;" to="/lawyer-offers">
              <v-list-item  class="menu" onclick="" prepend-icon="mdi-heart" title="Tekliflerim" value="users"></v-list-item>
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
  name: "LawyerNavigationDrawer",

  setup() {
    const name = ref("Haluk Levent");

    return { name
    };},

  components: {
  },
});
</script>

<style scoped>
.menu{
  background-color: white !important;
  margin: 5%;
  width:100%;
}
h1{
  color: white;
}
.v-list-item__content{
  text-align: left;
}
</style>