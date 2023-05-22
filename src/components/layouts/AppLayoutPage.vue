<template>          
  <v-card>
    <v-layout>
      
<<<<<<< HEAD
      <!-- <v-main style="height:%100; width:%100;"> -->
      <div v-if="login">
=======
      <v-main style="height:%100">
      <div v-if="showSidebar">
>>>>>>> 28abf3f550055f7882ed3079e454bb9aef2318ce
        <div v-if="lawyer">
            <LawyerNavigationDrawer/>
          </div>
          <div v-else>  
            <CustomerNavigationDrawer/>
          </div>
        </div>
        <!-- <v-container
          style="min-height: 100%;"
        > -->
        <slot />
        <!-- </v-container> -->
      <!-- </v-main> -->
    </v-layout>
  </v-card>    
  
</template>

<script setup lang="ts">
import CustomerNavigationDrawer from "@/components/shared/CustomerNavigationDrawer.vue"
import LawyerNavigationDrawer from "@/components/shared/LawyerNavigationDrawer.vue"
import { useRoute } from "vue-router";
import { ref, computed} from 'vue';
    const lawyer = ref(false);
    const route = useRoute();
    const showSidebar = computed(() => {
    return route.path == '/' ? false : true;
})

</script>

<style scoped>

.v-layout{
  background-color: #000000;
  display: flex;
  
  align-items: center;
  justify-content: center;

}



</style>