<template>
  <div class="home">
    <div>
      <signupModal/>
    </div>

    <div>
      <v-btn @click="signinModalShow = true">Giriş Yap
      </v-btn>
      <Teleport to="body">
      <signinModal :show="signinModalShow" @close="signinModalShow = false"/>
      </Teleport>
    </div>

    <div>
      <v-btn @click="signupLawyerShow = true">Avukat Olarak Kayıt Ol
      </v-btn>
      <Teleport to="body">
      <signupLawyer :show="signupLawyerShow" @close="signupLawyerShow= false">

      </signupLawyer>
    </Teleport>
    </div>

  <div>
    <v-btn @click="signupCustomerShow = true">Danışan Olarak Kayıt Ol
    </v-btn>
    <Teleport to="body">
    <signupCustomer :show="signupCustomerShow" @close="signupCustomerShow = false">

    </signupCustomer>
  </Teleport>
  </div>

  </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import signinModal from '../components/Signin.vue'
import signupModal from '../components/Signup.vue'
import signupLawyer from '../components/SignupLawyer.vue'
import signupCustomer from '../components/SignupCustomer.vue'
import profile from '../components/shared/LawyerProfileEdit.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    signinModal,
    signupModal,
    signupLawyer,
    signupCustomer,
    profile
  
      },
      setup() {
    const signinModalShow = ref(false);
    const signupModalShow = ref(false);
    const signupLawyerShow = ref(false);
    const signupCustomerShow = ref(false);
    return { signinModalShow , signupModalShow , signupLawyerShow , signupCustomerShow};
  },
    
});
</script>

