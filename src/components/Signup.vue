<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props">
          Kayıt Ol
        </v-btn>
      </template>
      <v-card class="mx-auto" max-width="500">
        <v-container fluid>
          <p class="text-h4 text--primary">KAYIT OL</p>
          <v-row dense>
            <v-col :cols="6"> 
              <router-link style="text-decoration: none;" to="/lawyer-register"> 
              <v-card @click="dialog = false">            
                <v-img
                  :src="require('@/assets/images/lawyer_signup.jpg')"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover>            
                  <div>
                  <v-btn style="background-color: gray;" @click="signupLawyerShow = true">Avukat Olarak Kayıt Ol
                  </v-btn>
                </div>
                </v-img>
              </v-card></router-link>
                  </v-col>
                  <v-col :cols="6">
                    <router-link style="text-decoration: none;" to="/customer-register"> 
                  <v-card @click="dialog = false">
                      <v-img
                          :src="require('@/assets/images/customer_signup.jpg')"
                          class="align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="200px"
                          cover>
                        <div>
                          <v-btn style="background-color: gray;" @click="signupCustomerShow = true">Danışan Olarak Kayıt Ol
                          </v-btn>
                        
                        </div>
                      </v-img>
              </v-card></router-link>
            </v-col>
          </v-row>
          <p>Üyeliğiniz var mı? <button href="" style="color:#EC4C0F;" @click="signinModalShow = true">giriş yapın.</button></p>
          <Teleport to="body">
      <signinModal v-if="signinModalShow" @close="signinModalShow = false"/>
      </Teleport>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import signupCustomer from '../components/SignupCustomer.vue';
import signupLawyer from '../components/SignupLawyer.vue';
import signinModal from '../components/Signin.vue';

export default {
    name: "Signup",
  components: {
    signupCustomer,
    signupLawyer,
    signinModal,
  },
  setup() {
    const signupCustomerShow = ref(false);
    const signupLawyerShow = ref(false);
    const signinModalShow = ref(false);

    return{signupCustomerShow , signupLawyerShow , signinModalShow};
  },
  data () {
    return {
      dialog:false,
    }
  },
}
</script>

<style lang="scss" scoped>
.v-dialog > .v-overlay__content{
  border-radius:5%!important;
}
.text-h4{
  text-align: center;
}

.v-container--fluid{
  width: 600px;
}
.v-responsive{
  height: 250px!important;
}
.text-white{
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
}
p{
  text-align: center;
  padding-top:2%;
}
.text-h4{
  padding-top:0!important;
  padding-bottom:2%;
}
</style>