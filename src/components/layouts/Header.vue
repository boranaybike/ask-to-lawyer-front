<template>
      <v-app-bar>
        <template v-slot:prepend>
          <router-link style="text-decoration: none;" to="/anasayfa"> <img width="170" style="margin-bottom: 15px; margin-left: 30px;" src="@/assets/images/libraa.png" />  </router-link>
        </template>

        <v-spacer></v-spacer>

      <signupModal/>


      <div>
      <v-btn @click="signinModalShow = true">Giriş Yap</v-btn>
      <v-btn @click="exitFunction">çıkış</v-btn>
      <Teleport to="body">
      <signinModal v-if="signinModalShow" @close="signinModalShow = false"/>
      </Teleport>
    </div>
</v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import signinModal from '../Signin.vue'
import signupModal from '../Signup.vue'
import tokenService from "@/services/Token.service";



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
