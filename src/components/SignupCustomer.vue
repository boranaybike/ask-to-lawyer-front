<template>
  
  <Transition name="customerModal">

    <div class="modal-mask">
      <div class="modalContainer">
        <v-form v-model="valid">
        <button class = "cls_btn"
              @click="$emit('close')"
              ><v-icon icon="mdi-close"></v-icon>
              
        </button>
            
        <div class="modalHeader">   
          <h3>Danışan Olarak Kayıt Ol</h3>
        </div>
        
        <v-text-field
          v-model="firstName"
          :rules="nameRules"
          :counter="20"
          label="İsim"
          required
          bg-color="white"
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          :rules="lastNameRules"
          :counter="20"
          label="Soyisim"
          required
          bg-color="white"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-Posta"
          required
          bg-color="white"
          ></v-text-field>


        <v-text-field
            v-model="phone"
            :rules="phoneRules"
            label="Telefon numarası"
            required
            bg-color="white"
         ></v-text-field>

        <v-text-field
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
            <v-btn rounded type="submit" block class="mt-2">Kayıt ol</v-btn> 
      </v-form>

      </div>
    </div>

  </Transition>
</template>
<script>
import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue';
import axiosInstance from '@/services/Service.service';

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
        console.log(response.data) 
        
      } 
      catch (error) {
        console.log(error)
      }
    }

    return {
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
.modal-mask {
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.3s ease;
}
.mt-2{
    background-color:#EC4C0F;
    color: white;
    font-size:15px;
    top: 50px;
}
.modalContainer {
  position: relative;
  width: 513px;
  height: 90vh;
  padding: 20px 30px;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.477),rgba(0, 0, 0, 0.477)),url(../assets/images/customer_signup.jpg);
  background-position: center;
  opacity: 0.99;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  background-size: cover;

}
.modalHeader h3 {
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding-bottom: 5%;
}

.cls_btn{
  margin-left: 435px;
  color: white;
}

</style>