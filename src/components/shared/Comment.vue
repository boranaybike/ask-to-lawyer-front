<template>
    <v-dialog
      v-model="dialog"
      persistent
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          Yorum yap
        </v-btn>
      </template>
      <v-card class="card" style="width: 600px;">
        <v-btn @click="dialog = false" icon class="cls-btn" >
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
        <v-card-title class="title" style="text-align: left;
    ">
         Aldığınız Hizmeti Değerlendirmek İster misiniz ?
        </v-card-title>
       
          <v-row>
            <v-col cols="3">
              <v-rating style="padding-top: ;text-align: left; color: #EC4C0F;" icon-size="70" model="rating" background-color="#EC4C0F" empty-icon="mdi-star-outline" full-icon="mdi-star"></v-rating>
            </v-col>
            <v-col cols="12">
              <v-textarea model="comment" placeholder="Yorumunuzu buraya yazın" outlined></v-textarea>
            </v-col>
          </v-row>

        <v-card-actions class="justify-center">
          <v-btn rounded style="background-color: #EC4C0F;color:white;"  dark>Gönder</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   
    </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  
  export default defineComponent({
      data() {
      return {
        dialog: false,
        
      };
    },
    
     
  })
  </script>
  
  
  <style scoped>
  
  .card {
    background-color: white;
    position: relative;
  
  }
  .cls-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    color: black;
    padding: 0;
  }
  
  .title {
    
    font-size: 20px;
    margin-top: 10px;

    
  }
  .rating {
    position: absolute;  
    margin-left: 100px;
    margin-bottom: px;
  }
  
  </style>