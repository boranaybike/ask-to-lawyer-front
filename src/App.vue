<template>
    <div class="application">  
      <v-app>
        <v-toolbar>
          <Header/>
        </v-toolbar>

        
        
        
        
        <AppLayout>
        <router-view>
          
        </router-view>
    </AppLayout>    
  
      <v-footer>
        <Footer/>
      </v-footer>
    </v-app>

    </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AppLayout from "@/components/layouts/AppLayoutPage.vue"
import Footer from "@/components/layouts/Footer.vue"
import Header from "@/components/layouts/Header.vue"

export default defineComponent({
  components: {
    AppLayout,
    Footer,
    Header,
    
  },

    setup(){
      return{
      };
    },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.application{
  background-color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
