<template>

<div class="title">
    Geçmiş Sorularım
  </div>

  <div class="customer-old-questions">
    <OldQuestionsCard/>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import OldQuestionsCard from '@/components/customer/OldQuestionsCard.vue'

export default defineComponent({
  name: 'CustomerOldQuestionsView',
  components: { OldQuestionsCard },
});
</script>

<style scoped>

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