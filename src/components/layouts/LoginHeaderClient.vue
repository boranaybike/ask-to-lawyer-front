<template>
      

    <v-app-bar
      color="rgba(255, 255, 255, 0.586)"
    >
      <template v-slot:prepend>
        <router-link style="text-decoration: none;" to="/anasayfa"> <img width="170" style="margin-bottom: 15px; margin-left: 30px;" src="@/assets/images/libraa.png" />  </router-link>
      </template>
      <v-spacer></v-spacer>
      <router-link style="text-decoration: none;" to="/lawyers"><v-btn style="background-color:rgba(0, 0, 0, 0.715)" color="white"  >Sİze Hİzmet Verecek Avukatlarımız</v-btn> </router-link>
      <v-spacer></v-spacer>

    
      <router-link style="text-decoration: none;" to="/customer-messages"><v-btn icon color="black"><v-icon>mdi-message</v-icon> </v-btn> </router-link>


    

    <v-menu transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <v-btn icon color="black" v-bind="props"><v-icon>mdi-account</v-icon> </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <router-link to="/customer-edit-account"><v-btn>Profİl</v-btn> </router-link>
        
      </v-list-item>
      <v-list-item>
        <v-btn @click="exitFunction(); navigateToHomePage(); ">Çıkış Yap</v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import signinModal from '../Signin.vue'
import signupModal from '../Signup.vue'
import tokenService from "@/services/Token.service";
import { useRouter } from 'vue-router';



export default defineComponent({
  name: 'HomeView',
  components: {
    signinModal,
    signupModal,
},
      setup() {
    const signinModalShow = ref(false);
    const signupModalShow = ref(false);    
    const router = useRouter();


    const navigateToHomePage = () => {
  router.push('/anasayfa');
};  
    const exitFunction = () => {
      try {
        tokenService.removeToken(); 
        
      } 
      catch (error) {
        console.log(error)
      }
    }
   
    return { signinModalShow , signupModalShow, exitFunction, navigateToHomePage};
  },
    
});
</script>