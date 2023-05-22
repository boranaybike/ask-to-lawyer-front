<template>          
  <v-card>
    <v-layout>
      
      <v-main style="height:%100">
      <div v-if="showSidebar">
        <div v-if="lawyer">
            <LawyerNavigationDrawer/>
          </div>
          <div v-else>  
            <CustomerNavigationDrawer/>
          </div>
        </div>
        <v-container
          style="min-height: 100%;"
        >
        <slot />
        </v-container>
      </v-main>
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
.v-main{
  display: flex;
}
.v-layout{
  background-color: #000000cd;

}
.v-container{
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>