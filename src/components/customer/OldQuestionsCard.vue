<template>

    <v-card class="mx-auto" max-width="250" max-height="150">
      <v-card-item>
        <template v-slot:subtitle> <v-row><v-col cols="6"> {{date}}</v-col> 
            <v-col cols="6">{{ price }} ₺</v-col> </v-row></template>
      </v-card-item>
  
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
            <v-col cols="12">
                <p>"{{description}}"</p>
            </v-col>  
        </v-row>
      </v-card-text>

      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact">
          <v-list-item-title>avukat: {{lawyerName}}</v-list-item-title>
        </v-list-item>
      </div>

      <v-btn color="#EC4C0F" rounded class="button">
        cevabı gör
      </v-btn>
    </v-card>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  
  export default defineComponent({
    name: 'HomeView',
    components: {},
    setup() {
        const description = ref("Süper bir ceza hukuku avukatıyım tam bir fiyat performans ürünü müyüm?");
        const lawyerName=ref("Haluk Levent");
        const price = ref(100);
      
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = ref(new Date().toLocaleDateString('tr-TR', options));

  setInterval(() => {
    date.value = new Date().toLocaleDateString('tr-TR', options);
  }, 1000);

  
      return { date, description, lawyerName,price };
    },
  });
  </script>
  
  <style scoped lang="scss">
.py-3{
    padding-bottom: 0x!important;
    padding-top: 0px!important;
    justify-content: flex-end;
}
  .mx-auto{
    border-radius: 20px;
    position: relative;
    overflow: visible;
  }
  .justify-space-between{
    justify-content: flex-end!important;
  }
.v-btn {
  margin: 0 4px;
  color:white;
  font-size:10px;
}
.v-card-subtitle{
  padding: 0!important;
}
.v-list-item-title{
  font-size:14px;
  font-style: italic;
  text-align: right;
}
.date{
    text-align: right;
    font-style:italic;
}
p{
    font-size:12px;
}
  </style>
  