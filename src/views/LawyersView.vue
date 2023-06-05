<template>
    <div class="lawyers-view">
      <v-row>
          <v-col cols="4" v-for="lawyer in lawyers" :key="lawyer.id">
      <lawyersCard v-if="lawyer" :firstName="lawyer.firstName" :lastName="lawyer.lastName" :baro="lawyer.barNo" :bio="lawyer.bio" :rate="rate" :phone="lawyer.phone" :education="lawyer.education" :averageRate="lawyer.averageRate"/>     </v-col> 
      </v-row>

    </div>
  </template>
    
    
    
  <script>
  import { defineComponent, onMounted, ref } from 'vue';
  import lawyersCard from '@/components/lawyersCard.vue'
  import axiosInstance from '@/services/Service.service';
  
  export default defineComponent({
    name: 'LawyersView',
    components: { lawyersCard },
    
    setup() {
      const lawyers= ref(null);
  
      onMounted(async () => {
        try {
          const response = await axiosInstance.post("/Lawyers/GetAll",{});
          lawyers.value= response.data;
          console.log(lawyers.value);
        } catch (error) {
          console.log(error);
        }
      });
  
      return {lawyers};

    },
  });
  </script>