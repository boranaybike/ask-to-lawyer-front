<template>
  <div class="anasayfa">
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-card style="width: 500px; background-color: transparent;">
              <v-card-item>
                <div>
                  <div class="text-h6 mb-1" style="text-align: left; color: white;">
                    Probleminizin Başlığı nedir ?
                  </div>
              <div class="input">
                <v-text-field
                  v-model="name"
                  variant="solo"
                  required
                ></v-text-field>
              </div>

              <div class="text-h6 mb-1" style="text-align: left; color: white;">
                Sorunuzu tüm detaylarıyla birlikte açıklayın.
              </div>
              <div>
                <v-textarea v-model="description" variant="solo"></v-textarea>
              </div>
              
              <div class="text-h6 mb-1" style="text-align: left; color: white;">
                Sorunuz hangi hukuk alanına giriyor?
              </div>
              <div>
                    
          <v-select
            model="select"  variant="solo"
            
            :rules="[v => !!v || 'Item is required']"
          
            required
          ></v-select>
                  </div>
                  <v-row>
          <v-col cols="6">
            <div>
              <div class="text" style="color: white;">Fiyat aralığı belileyin <br> (İsteğe Bağlı)</div>
            </div>
          </v-col>
          <v-col cols="6">
            <div>
              <v-select
              model="select"  variant="solo"
              :rules="[v => !!v || 'Item is required']"   
              required
            ></v-select>
            </div>
          </v-col>
        </v-row>
                  
              </div>
            </v-card-item>

          <v-card-actions>
            <v-btn @click="submitForm" style="margin-left: 160px; background-color: #ff6006 ; color: white;">
              Soruyu Gönder
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4">
       
        <p style="color: white; text-align: left; backdrop-filter: blur(2px);"><br><br>Sorunuzu detaylı bir şekilde açıklayın <br><br><br>
          İsteklerinize en uygun avukatlardan gelen fiyat tekliflerini karşılaştırın <br><br><br>
          Kendiniz için en uygun avukatı seçin ve ödeme yapın<br><br>
          Avukatlarımızdan yanıt geldiği zaman telefon ve mail yoluyla bilgilendirileceksiniz.<br><br><br>
          Sorununuzun çözümü en kısa sürede tarafınızla paylaşılacaktır.
          Gelen kutunuzu kontrol etmeyi unutmayın!</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import axiosInstance from '@/services/Service.service'
import TokenService from "@/services/Token.service";
import { useRouter } from 'vue-router';
import {Buffer} from "buffer/";

export default defineComponent({
  setup() {
    const router = useRouter();
    const name = ref('')
    const description = ref('')
    const activationToken = TokenService.getToken();
    console.log(activationToken);
    const submitForm = () => {
        try {

          if(activationToken){

          const userCredentials = JSON.parse(Buffer.from(activationToken.split(".")[1], "base64").toString());

          const data = {
            clientId:userCredentials.uid,
            title: name.value,
            description: description.value,
            maxPrice: 0,
            minPrice: 0,
          }
          const response = axiosInstance.post('/Questions/Add', data)
          console.log('Form gönderiliyor...');
          name.value = ''
          description.value = '' 
        } 
      }

        catch (error) {
          router.push('/customer-register');
          console.log(error)
        }
    };
    return {
      name,
      description,
      submitForm,
    }
   }
  },)
</script>
<style scoped>
</style>