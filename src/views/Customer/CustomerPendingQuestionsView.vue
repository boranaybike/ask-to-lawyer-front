<template>
  <div class="customer-pending-questions">
    <PendingQuestionsCard/>
  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import PendingQuestionsCard from '@/components/customer/PendingQuestionsCard.vue'

export default defineComponent({
  name: 'CustomerPendingQuestionsView',
  components: { PendingQuestionsCard },
});
</script>
