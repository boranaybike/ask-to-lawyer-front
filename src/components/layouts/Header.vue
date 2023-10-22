<template>
      <v-app-bar>
        <template v-slot:prepend>
          <router-link style="text-decoration: none;" to="/anasayfa"> <img width="170" style="margin-bottom: 15px; margin-left: 30px;" src="@/assets/images/libraa.png" />  </router-link>
        </template>

        <v-spacer></v-spacer>
        <router-link style="text-decoration: none;" to="/lawyers"><v-btn style="background-color:rgba(0, 0, 0, 0.715)" color="white"  >Sİze Hİzmet Verecek Avukatlarımız</v-btn> </router-link>
        <v-spacer></v-spacer>


      <signupModal/>


      <div>
        <router-link style="text-decoration: none;" to="/signin"> <v-btn style="color: black;">Gİrİş Yap</v-btn> </router-link>
      

    </div>
</v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import signinModal from '../Signin.vue'
import signupModal from '../Signup.vue'
import tokenService from "@/services/token";



export default defineComponent({
  name: 'HomeView',
  components: {
    signinModal,
    signupModal,
},
      setup() {
    const signinModalShow = ref(false);
    const signupModalShow = ref(false);    
    const exitFunction = () => {
      try {
        tokenService.removeToken(); 
        
      } 
      catch (error) {
        console.log(error)
      }
    }
   
    return { signinModalShow , signupModalShow, exitFunction };
  },
    
});
</script>

<style scoped>
.v-app-bar.v-toolbar{
  background-color:rgba(255, 255, 255, 0.586)!important;
}
</style>
