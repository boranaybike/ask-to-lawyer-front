<template>
  <div class="home">
    <QuestionPoolCards/>
    <div>
      <signupModal/>
      <frame18/>
      <frame17/>
      <frame21/>
      
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
import frame18 from '../components/frame18.vue'
import frame17 from '../components/frame17.vue'
import frame21 from '../components/frame21.vue'
import QuestionPoolCards from '@/components/shared/QuestionPoolCards.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    signinModal,
    signupModal,
    signupLawyer,
    signupCustomer,
    profile,
    frame18,
    frame17,
    frame21,
    QuestionPoolCards
},
      setup() {
    const signinModalShow = ref(false);
    const signupModalShow = ref(false);
    const signupLawyerShow = ref(false);
    const signupCustomerShow = ref(false);
    const frame18Show = ref(false);
    const frame17Show = ref(false);
    const frame21Show = ref(false);
    return { signinModalShow , signupModalShow , signupLawyerShow , signupCustomerShow, frame18Show, frame17Show, frame21Show};
  },
    
});
</script>

