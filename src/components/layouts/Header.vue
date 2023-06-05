<template>
      

      <v-app-bar
        color="transparent"
      >
        <template v-slot:prepend>
          <router-link style="text-decoration: none;" to="/anasayfa"> <img width="170" style="margin-bottom: 15px; margin-left: 30px;" src="@/assets/images/libraa.png" />  </router-link>
        </template>

        <v-spacer></v-spacer>

      <signupModal/>


      <div>
      <v-btn @click="signinModalShow = true">Giriş Yap</v-btn>
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

export default defineComponent({
  name: 'HomeView',
  components: {
    signinModal,
    signupModal,
},
      setup() {
    const signinModalShow = ref(false);
    const signupModalShow = ref(false);
   
    return { signinModalShow , signupModalShow };
  },
    
});
</script>
