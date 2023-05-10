<template>
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
