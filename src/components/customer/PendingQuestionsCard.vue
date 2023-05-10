<template>

    <v-card class="mx-auto" max-width="250">
        <div class="state">cevap bekleniyor</div>
      <v-card-item>
        <template v-slot:subtitle> <v-row><v-col cols="6">{{ date }}</v-col> 
            <v-col cols="6">{{ price }} ₺</v-col> </v-row></template>
      </v-card-item>
  
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
            <v-col cols="12">
                <p style="color:black; font-size:12px!important;">"{{description}}"</p>
            </v-col>  
        </v-row>
      </v-card-text>
  
      <div class="d-flex py-3 justify-space-between">
        <v-list-item density="compact">
          <v-list-item-title>avukat: {{lawyerName}}</v-list-item-title>
        </v-list-item>
      </div>
  
      <v-divider></v-divider>
  
      <v-card-actions class="question-state">
        <p>
          <v-icon icon="mdi-check-all" size="18" color="green" class="me-1 pb-1"></v-icon>
          ödeme yapıldı
        </p>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  
  export default defineComponent({
    name: 'HomeView',
    components: {},
    setup() {
        const description = ref("Süper bir ceza hukuku avukatıyım tam bir fiyat performans ürünüyüm.");
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
  
  .d-flex{
    display:unset!important;
  }
  .mx-auto{
    border-radius: 10%;
  }

  .question-state {
    justify-content: center;
  }
  
  p {
    color: green;
  }
.v-btn {
  margin: 0 4px;
}

.state{
    padding: 3%;
    background-color: #EC4C0F;
    color:white;
    size:22px;
}
.v-card-subtitle{
  padding: 0!important;
}
.v-list-item-title{
  font-size:14px;
  font-style: italic;
  text-align: right;
}
.v-card-item{
  text-align: right;
}
  </style>
  