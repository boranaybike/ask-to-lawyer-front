<template>
    <div class="earnings">
      <LawyerProfits/>
    </div>
  </template>
    
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import LawyerProfits from '@/components/lawyer/LawyerProfits.vue';
  
  
  export default defineComponent({
    name: 'EarningsPage',
    components: { LawyerProfits },
  });
  </script>
  