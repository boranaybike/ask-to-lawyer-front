<template>          
  <v-card>
    <v-layout>
      
      <v-main style="height:%100">
      <div v-if="lawyer">  
            <LawyerNavigationDrawer/>
          </div>
          <div v-else>  
            <CustomerNavigationDrawer/>
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

<script lang="ts">
import { defineComponent } from "vue";
import CustomerNavigationDrawer from "@/components/shared/CustomerNavigationDrawer.vue"
import LawyerNavigationDrawer from "@/components/shared/LawyerNavigationDrawer.vue"

export default defineComponent({
  setup() {
    const lawyer = false;

    return {lawyer};
  },
  components: { 
    CustomerNavigationDrawer,
    LawyerNavigationDrawer, },
});
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