<template>
    <div class="customer-register">
      
      <v-card style="width: 500px; background-color: transparent; backdrop-filter: blur(15px); border-radius: 3%; height: 95vh;">
        <div class="signupCtitle">
            <h2 style="color: white;">Danışan Olarak Kayıt Ol</h2>
        </div>
              <v-card-item>

        <v-text-field
          variant="solo"
          rounded      
          v-model="firstName"
          :rules="nameRules"
          :counter="20"
          label="İsim"
          required
          bg-color="white"
        ></v-text-field>

        <v-text-field
        variant="solo"
          rounded  
          v-model="lastName"
          :rules="lastNameRules"
          :counter="20"
          label="Soyisim"
          required
          bg-color="white"
        ></v-text-field>

        <v-text-field
        variant="solo"
          rounded  
          v-model="email"
          :rules="emailRules"
          label="E-Posta"
          required
          bg-color="white"
          ></v-text-field>


        <v-text-field
        variant="solo"
          rounded  
            v-model="phone"
            :rules="phoneRules"
            label="Telefon numarası"
            required
            bg-color="white"
         ></v-text-field>

        <v-text-field
        variant="solo"
          rounded  
          v-model="password1"
          :rules="password1Rules"
          label="Şifre"
          :type="show1 ? 'text' : 'password'"
          required
          bg-color="white"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          counter
          @click:append-inner = "show1 = !show1"  
          ></v-text-field>

          <v-text-field
          variant="solo"
          rounded  
            v-model="password2"
            :rules="password2Rules"
            label="Şifre (tekrar)"
            required
            bg-color="white"            
          :type="show2 ? 'text' : 'password'"
          @click:append-inner="show2 = !show2"
            counter
          :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"

            ></v-text-field>
            <v-btn @click="submitForm" style="background-color: #EC4C0F ; color: white; height: 50px; font-size: 15px;" block class="mt-2">
              Kayıt Ol            
            </v-btn>
        </v-card-item>
      </v-card>
  </div>

</template>

<script>
import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue';
import axiosInstance from '@/services/Service.service';
import tokenService from "@/services/token";


export default defineComponent({
  name: 'SignupCustomer',
  components: {},
  setup() {
    const show = ref(true);
    const show1 = ref(false);
    const show2 = ref(true);
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password1 = ref('');
    const password2 = ref('');
    const phone = ref('');

    const submitForm = async () => {
      try {
        const customer = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phone: phone.value,
          password: password1.value,
        }

        const response = await axiosInstance.post('/Clients/Add', customer)
        if (response.status === 200) {
        const token = response.data.accessToken;
        tokenService.saveToken(token);
        }        
      } 
      catch (error) {
        console.log(error)
      }
    }

    return {
      show,show2,firstName,lastName, email,password1,show1,password2,phone,submitForm,
      nameRules: ref([
        value => {
          if (value?.length > 20) return "İsim 20 karakterden fazla olamaz"
          if (value?.length <= 3) return "İsim en az 3 karakterli olmalıdır."
          return true;
        }
      ]),
      lastNameRules: ref([
        value => {
          if (value?.length > 20) return "Soyisim 20 karakterden fazla olamaz"
          if (value?.length <= 2) return "İsim en az 2 karakterli olmalıdır."
          return true;
        }
      ]),
      password1Rules: ref([
        value => {
          if (value?.length < 6) return "Şifreniz en az 6 karakterden oluşmalıdır"
          return true;
        }
      ]),
      password2Rules: ref([
        value => {
          if (password1.value != password2.value) return "Girilen şifreler eşleşmiyor."
          if (value?.length < 6) return "Şifreniz en az 6 karakterden oluşmalıdır"
          return true;
        }
      ]),
      emailRules: ref([
        value => {
          if (/.+@.+\..+/.test(value)) return true;
          return 'Lütfen geçerli bir e-posta adresi giriniz.'
        },
      ]),
      phoneRules: ref([
        value => {
          if (value?.length == 10) return true;
          return 'Lütfen geçerli bir telefon numarası giriniz.'
        },
      ])
    }
  }
});
</script>


<style lang="scss" scoped>
  
  .signupCtitle h2 {
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding-bottom: 5%;
  padding-top: 5%;
}

</style>