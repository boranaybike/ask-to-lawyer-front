<template>

<div class="title">
    Bekleyen Sorular
  </div>

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
  
  <style lang="scss" scoped>
.title{
  position: absolute;
  top: 50px;
  left: 250px;
  padding: 8px;
  width: 300px;
  border: 2px solid #EC4C0F;
  background-color: #EC4C0F;
  font-size: 25px;
  color: white;
}


</style>