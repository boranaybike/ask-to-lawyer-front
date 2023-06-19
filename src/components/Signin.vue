<template>
  
  <v-card style="background-color: transparent; backdrop-filter: blur(10px); width: 450px; border-radius: 5%; height: 90vh;">
    <v-card-item>
    
    
        <v-form v-model="valid">
        
            
        <div class="modalHeader">   
          <h3>Giriş Yap</h3>
        </div>
        

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
          v-model="password"
          :rules="password1Rules"
          label="Şifre"
          :type="show1 ? 'text' : 'password'"
          required
          bg-color="white"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          counter
          @click:append-inner = "show1 = !show1"  
          ></v-text-field>


      </v-form>
      <v-btn style="height: 50px;" @click="submitForm" block class="mt-2">Giriş Yap</v-btn> 

      <div class="modal-footer">
          <slot name="footer">
            Şifreni mi unuttun?
          </slot>
        </div>
       
      
    
  </v-card-item>
  </v-card>

  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axiosInstance from '@/services/Service.service';
import tokenService from "@/services/Token.service";
import { useRouter } from 'vue-router';
import {Buffer} from "buffer/";

  const show = ref(true);
  const show1 = ref(false);
  const show2 = ref(true);
  const email = ref('');
  const password = ref('');   
  const emit = defineEmits(["close"])
  const router = useRouter();    
  const submitForm = async () => {
      try {
        const user = {
          email: email.value,
          password: password.value,
        }

        const response = await axiosInstance.post('/Authentication/Login', user)
        if (response.status === 200) {
        const token = response.data.accessToken;
        await tokenService.saveToken(token);
        const userCredentials = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
        console.log(userCredentials);
        emit("close", false);
        if(userCredentials.role == "client"){
          router.push('/anasayfa');
        }
        else if(userCredentials.role == "lawyer"){
          router.push('/questions');
        }
    }

      } 
      catch (error) {
        console.log(error)
      }
    }
  const emailRules= ref([
        value => {
          if (/.+@.+\..+/.test(value)) return true;

          return 'Lütfen geçerli bir e-posta adresi giriniz.'
        },
      ]);

      const password1Rules= ref([
        value => {
          if (value?.length < 6) return "Şifreniz en az 6 karakterden oluşmalıdır"
          return true;}
      ]);
      
  
</script>




<style lang="scss" scoped>
.modal-footer{
  padding: 80px;
  display: flex;
  justify-content: center;
  color: white;
}
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
    display: flex;
    justify-content: center;
   top: 50px;
   
}
.modalContainer {
  position: relative;
  width: 513px;
  height: 90vh;
  padding: 20px 30px;
  border-radius: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.477),rgba(0, 0, 0, 0.477)),url(../assets/images/signin.jpg);
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
  padding-bottom: 20%;
  padding-top: 20%;
}

.cls_btn{
  margin-left: 435px;
  color: white;
}

</style>