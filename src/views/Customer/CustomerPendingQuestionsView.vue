<template>

<div class="title">
    Bekleyen Sorularım
  </div>

  <div class="customer-pending-questions">
    <PendingQuestionsCard/>
    <PendingOffersCard/>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import PendingQuestionsCard from '@/components/customer/PendingQuestionsCard.vue'
import PendingOffersCard from '@/components/customer/PendingOffersCard.vue'

export default defineComponent({
  name: 'CustomerPendingQuestionsView',
  components: { PendingQuestionsCard, PendingOffersCard},
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
.customer-pending-questions{
  display: contents;

}
</style>
