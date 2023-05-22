<template>
    <div class="anasayfa" >
        
        <v-container>
    <v-row>
      <v-col cols="8">
        <v-card style="width: 500px; background-color: transparent;">
            
    <v-card-item>
      <div>
        <div class="text-h6 mb-1" style="text-align: left; color: white;">
          Probleminizin Başılığı nedir ?
        </div>

        <div class="input">

            <v-text-field variant="solo"
        model="name" 
        required
      ></v-text-field></div>

        <div class="text-h6 mb-1" style="text-align: left; color: white;">
         Sorunuzu tüm detaylarıyla birlikte açıklayın.
        </div>
        <div>
            <v-textarea  variant="solo"></v-textarea>
        </div>
        <div class="text-h6 mb-1" style="text-align: left; color: white;">
            Sorunuz hangi hukuk alanına giriyor?
        </div>
        <div>
            <v-select variant="solo"
        model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>
        </div>

        <div class="text-caption" style="color: white;">Fiyat aralığı belileyin (isteğe Bağlı)</div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn  style="margin-left: 160px; background-color: #ff6006 ; color: white;">
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

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

  


  export default {
    setup () {
      
            return 'Must be checked.'
          },
        };
      
  
</script>

<style scoped>
.anasayfa{
    background-image: url("@/assets/images/anabg.jpg");
  background-size: cover;
 
  
} 

</style>