<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="auto"
      >

        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            ödeme tamamlandı popup
          </v-btn>
        </template>
        <v-card style="position: relative; width: 400px; height: 270px; background: white!important; border-radius: 20px;">
          <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="100"
          ></v-icon>

          <div style="font-size: 28x;" >Ödemeniz Başarıyla Tamamlandı</div>
        </div>

          <v-card-title style=" text-align: center; font-size: 14px; line-height: 21px; font-family: 'Popins';">
            E-faturanız mailinize iletilmiştir
          </v-card-title>
          
          <v-card-actions style="align-items: center!important">
            <v-spacer></v-spacer>
            <v-btn
              class="text-none ms-4 text-white"
              color="#D9D9D9"
              rounded="%20"
              variant="flat"
              width="160px"
              height="35px"
              left="396px"
              top="144px"
  
  
              @click="dialog = false"
            >
              Anasayfa
            </v-btn>
            <v-btn
              class="text-none ms-4 text-white"
              color="#EC4C0F"
              rounded="%20"
              variant="flat"
              width="160px"
              height="35px"
              left="396px"
              top="144px"
              
  
              @click="dialog = false"
            >
              Profil
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  
  <script>
  export default {
    data () {
      return {
        dialog: false,
      }
    }
  }
  </script>
  <style lang="scss" scoped>
  
  .py-12{
    padding-top: 0% !important;
    padding-bottom: 0% !important;
  }
  
  .v-card-title{
  text-align: center;
  }
  
  .v-dialog > .v-overlay__content > .v-card{
  align-items: center;
  padding: 4%;
  }
  
  </style>