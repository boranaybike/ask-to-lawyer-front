<template>
  <div v-if="lawyer">  
    <LawyerNavigationDrawer/>
  </div>
  <div v-else>  
    <CustomerNavigationDrawer/>
  </div>

  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomerNavigationDrawer from "@/components/shared/CustomerNavigationDrawer.vue"
import LawyerNavigationDrawer from "@/components/shared/LawyerNavigationDrawer.vue"

export default defineComponent({
  components: {
    CustomerNavigationDrawer,
    LawyerNavigationDrawer  },

    setup(){
      const lawyer = false;
      return{
        lawyer
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
  color: #2c3e50;
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
