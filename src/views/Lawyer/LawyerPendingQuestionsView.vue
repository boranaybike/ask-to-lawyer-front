<template>
    <div class="lawyer-pending-questions">
      <LawyerPendingQuestionCard/>
    </div>
</template>
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import LawyerPendingQuestionCard from '@/components/lawyer/LawyerPendingQuestionCard.vue';
  export default defineComponent({
    name: 'LawyerPendingQuestionsView',
    components: { LawyerPendingQuestionCard },
  });
  </script>
  