<template>
    <div>
       <v-card class="mx-auto">
            <v-form v-model="valid">
                <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="firstname"
                        :rules="firstnameRules"
                        :counter="10"
                        label="İsim"
                        required
                        bg-color="white"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="lastname"
                        :rules="lastnameRules"
                        :counter="10"
                        label="Soyisim"
                        required
                        bg-color="white"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="phone"
                        :rules="phoneRules"
                        label="Telefon numarası"
                        required
                        bg-color="white"
                    ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-Posta"
                        required
                        bg-color="white"
                    ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="baro"
                        label="Baro"
                        required
                        bg-color="white"
                    ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="area"
                        label="Uzmanlık Alanı"
                        required
                        bg-color="white"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12">
                    <v-text-field
                        v-model="about"
                        label="Hakkımda"
                        required
                        bg-color="white"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="password1"
                        :rules="password1Rules"
                        label="Şifre"
                        required
                        bg-color="white"
                    ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                            <v-text-field
                                v-model="password2"
                                :rules="password2Rules"
                                label="Şifre (tekrar)"
                                required
                                bg-color="white"
                            ></v-text-field>
                        </v-col>
                        <v-btn rounded type="submit" block class="mt-2">Submit</v-btn>

                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
  
    const valid = ref(false);
    const baro = ref('Antalya');
    const area = ref('Ceza hukuku');
    const about = ref('Süper bir ceza hukuku avukatıyım tam bir fiyat performans ürünüyüm.');      
      const firstname = ref('Zeynep');
      const firstnameRules= ref([
        value => {
          if (value?.length > 30) return "İsim 30 karakterden fazla olamaz"
          if (value?.length < 3) return "İsim en az 3 karakterli olmalıdır."
          return true;}
      ]);

      const lastname= ref('Altınkaymak');
      const lastnameRules= ref([
        value => {
          if (value?.length > 20) return "Soyisim 20 karakterden fazla olamaz"
          if (value?.length < 3) return "Soyisim en az 2 karakterli olmalıdır."
          return true;}
      ]);
      
      const password1= ref('zeynep.1998');
      const password1Rules= ref([
        value => {
          if (value?.length < 6) return "Şifreniz en az 6 karakterden oluşmalıdır"
          return true;}
      ]);

      const password2= ref('zeynep.1998');
      const password2Rules= ref([
        value => {
          if (password1.value != password2.value) return "Girilen şifreler eşleşmiyor."
          return true;
        }
      ]);

      const phone= ref('050505050505');
      const phoneRules= ref([
      value => {
        if (value?.length == 10) return true;

        return 'Lütfen geçerli bir telefon numarası giriniz.'
        },
      ])

      const email= ref('zeyna_05@gmail.com');
      const emailRules= ref([
        value => {
          if (/.+@.+\..+/.test(value)) return true;

          return 'Lütfen geçerli bir e-posta adresi giriniz.'
        },
      ]);
</script>

<style lang="scss" scoped>
.mx-auto{
    max-width: 50vw;
    padding : 3vw;    
    border-radius: 3%;
}
.mt-2{
    background-color:#EC4C0F;
    color: white;
    font-size:15px;
}
</style>