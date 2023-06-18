<template>              
<Header/>
      
  <v-card>
    <v-layout :class="{'layout1': !showSidebar , 'layout2': showSidebar}">
      
      <v-main style="height:%100; padding-top: 75px;"
          >
        
      <div v-if="showSidebar">
        <div v-if="role == 'lawyer'">
            <LawyerNavigationDrawer/>
          </div>
          <div v-else>  
            <CustomerNavigationDrawer/>
          </div>
        </div>
        <v-container
          style="min-height: 100%;
          "
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
import Header from "./Header.vue"
import { useRoute } from "vue-router";
import { ref, computed} from 'vue';
import {Buffer} from "buffer/";
import TokenService from "@/services/Token.service";

    const role = ref("");
    const route = useRoute();
    const activationToken = TokenService.getToken();
    console.log(activationToken);
    if(activationToken && activationToken!="undefined"){
      console.log("deneme");
      const userCredentials = JSON.parse(Buffer.from(activationToken!.split(".")[1], "base64").toString());
      console.log(userCredentials.fullName);
        if(userCredentials.role == "client"){
          role.value = "client";
        }
        else if(userCredentials.role == "lawyer"){
          role.value = "lawyer";
        }
    }
    const showSidebar = computed(() => {
      return route.path === '/anasayfa' || route.path === '/questions' || route.path === '/lawyers' ? false : true;
})
</script>

<style scoped>
.v-main{
  display: flex;
}
.layout1{
  background-color: #000000cd;
  background-image: url("@/assets/images/anabg.jpg");
  background-size: cover;
}

.layout2{
  background-color: #000000cd;
}
.v-container{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>