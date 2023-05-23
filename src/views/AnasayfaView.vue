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

              <div class="text-caption" style="color: white;">Fiyat aralığı belileyin (isteğe Bağlı)</div>
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
        <p style="color: white; text-align: left;"><br><br>Sorunuzu detaylı bir şekilde açıklayın <br><br><br>
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
<script lang="ts">
import { defineComponent, ref } from 'vue'
import axiosInstance from '@/services/Service.service'

export default defineComponent({
  setup() {
    const name = ref('')
    const description = ref('')
    const submitForm = async () => {
      try {
        const data = {
          clientId:2,
          title: name.value,
          description: description.value,
          maxPrice: 0,
          minPrice: 0,
        }

        const response = await axiosInstance.post('/Questions/Add', data)
        console.log(response.data) 
        
        name.value = ''
        description.value = ''
      } catch (error) {
        console.log(error)
      }
    }

    return {
      name,
      description,
      submitForm,
    }
  },
})
</script>
<style scoped>
</style>