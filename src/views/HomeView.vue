<template>
  <div class="home">
    <paymentSuccesful/>

    <div>
      <signupModal/>
      <frame18/>
      <frame21/>
      

    </div>

    <div>
      <v-btn @click="signinModalShow = true"> 
        <button >Giriş Yap</button>
      </v-btn>
      <Teleport to="body">
      <signinModal v-if="signinModalShow" @close="signinModalShow = false"/>
      </Teleport>
    </div>


    <div>
      
     <Comment/>
    </div>



  </div>

</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import signinModal from '../components/Signin.vue'
import signupModal from '../components/Signup.vue'


import profile from '../components/shared/LawyerProfileEdit.vue'
import frame18 from '../components/frame18.vue'
import frame21 from '../components/frame21.vue'
import paymentSuccesful from '@/components/paymentSuccessful.vue'
import Comment from '@/components/shared/Comment.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    signinModal,
    signupModal,
    
    
    profile,
    frame18,
    frame21,
    paymentSuccesful,
    Comment,
    
},
      setup() {
    const signinModalShow = ref(false);
    const signupModalShow = ref(false);
    
    const frame18Show = ref(false);
    const paymentSuccesfulShow = ref(false);
   
    return { signinModalShow , signupModalShow ,  frame18Show, paymentSuccesfulShow,  };
  },
    
});
</script>

