<template>

    <v-card class="mx-auto" max-width="250">
        <div class="state">cevap bekleniyor</div>
      <v-card-item>
        <template v-slot:subtitle>{{ date }}</template>
      </v-card-item>
  
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
            <v-col cols="12">
                <h5>"{{description}}"</h5>
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
        const lawyerName=ref("Aybike Boran");
      
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = ref(new Date().toLocaleDateString('tr-TR', options));

  setInterval(() => {
    date.value = new Date().toLocaleDateString('tr-TR', options);
  }, 1000);

  
      return { date, description, lawyerName };
    },
  });
  </script>
  
  <style scoped lang="scss">

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
  </style>
  