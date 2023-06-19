<template>
  <div class="questions">
    <v-row>
      <v-col cols="6" v-for="question in questions" :key="question.id">
        <QuestionPoolCards v-if="question" :clientName="question.clientName" :questionId="question.id" 
        :description="question.description" :maxPrice="question.maxPrice" :minPrice="question.minPrice" 
        :clientId="question.clientId"/>
      </v-col>
    </v-row>
  </div>
</template>
    
    
  <script>
  import { defineComponent, onMounted, ref } from 'vue';
  import QuestionPoolCards from '@/components/shared/QuestionPoolCards.vue';
  import axiosInstance from '@/services/Service.service';

  
  export default defineComponent({
    name: 'QuestionsView',
    components: { QuestionPoolCards },
    
    setup() {
      const questions= ref(null);
  
      onMounted(async () => {
        try {
          const response = await axiosInstance.post("/Questions/GetAll",{});
          questions.value= response.data;
          console.log(questions.value);
        } catch (error) {
          console.log(error);
        }
      });
  
      return {questions};

    },
  });
  </script>