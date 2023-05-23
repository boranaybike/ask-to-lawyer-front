<template>
    <div class="home">
      <div v-for="client in clients" :key="client.id">
        <v-card max-width="250">
          <v-divider class="mx-4"></v-divider>
          <v-card-title style="justify-content: center">{{ client.firstName }}</v-card-title>
        </v-card>
    </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axiosInstance from '@/services/Service.service';

  export default {
    name: 'ServiceView',
    components: {
    },
    setup() {
      const id = ref(1);
      const clients = ref([]);
  
      onMounted(async () => {
        try {
          const response = await axiosInstance.post("/Clients/GetAll",{});
          clients.value= response.data;
        } catch (error) {
          console.log(error);
        }
      });
  
      return {
        clients
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  