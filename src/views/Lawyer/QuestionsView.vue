<template>
    <div class="questions">
      <QuestionPoolCards/>
    </div>
  </template>
    
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import QuestionPoolCards from '@/components/shared/QuestionPoolCards.vue';
  
  
  export default defineComponent({
    name: 'QuestionsView',
    components: { QuestionPoolCards },
  });
  </script>