<template>
    <div>
       <v-card class="mx-auto">
            <v-form v-model="valid">
                <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="10"
                        label="İsim"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="10"
                        label="Soyisim"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="phone"
                        :rules="emailRules"
                        label="Telefon numarası"
                        required
                    ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-Posta"
                        required
                    ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="baro"
                        :rules="emailRules"
                        label="Baro"
                        required
                    ></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="area"
                        :rules="emailRules"
                        label="Uzmanlık Alanı"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12">
                    <v-text-field
                        v-model="about"
                        :rules="emailRules"
                        label="Hakkımda"
                        required
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                    <v-text-field
                        v-model="password"
                        :rules="emailRules"
                        label="Şifre"
                        required
                    ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                            <v-text-field
                                v-model="password"
                                :rules="emailRules"
                                label="Şifre (tekrar)"
                                required
                            ></v-text-field>
                        </v-col>
                        <v-btn type="submit" block class="mt-2">Submit</v-btn>

                    </v-row>
                </v-container>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

  export default defineComponent({
    data: () => ({
      valid: false,
      firstname: 'Zeynep',
      lastname: 'Altınkaymak',
      phone: '050505050505',
      password: 'zeynep.1998',
      baro: 'Antalya',
      area:'Ceza hukuku',
      about:'Süper bir ceza hukuku avukatıyım tam bir fiyat performans ürünüyüm.',

      
      nameRules: [
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: 'zeyna_05@gmail.com',
      emailRules: [
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  });
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