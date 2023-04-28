<template>
  <div class="home">
    <p>HOMEPAGE</p>
<!-- 
    <v-btn>
      Button
    </v-btn>
    <v-icon icon="mdi-home" />
    <v-icon icon="mdi:mdi-minus" /> // This renders a MDI icon -->
  </div>
  <div>
  <signupModal/>
  </div>



  <div>
    <v-btn>
    <button @click="signinModalShow = true">Giriş Yap</button>
    </v-btn>
    <Teleport to="body">
    <signinModal :show="signinModalShow" @close="signinModalShow = false">
      <template #header>
        <h3>Giriş Yap</h3>
      </template>
    </signinModal>
  </Teleport>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import signinModal from '../components/Signin.vue'
import signupModal from '../components/Signup.vue'


export default defineComponent({
  name: 'HomeView',
  components: {
    signinModal,
    signupModal 
  
      },
      setup() {
    const signinModalShow = ref(false);
    const signupModalShow = ref(false);
  


    return { signinModalShow , signupModalShow};
  },
    
});
</script>

