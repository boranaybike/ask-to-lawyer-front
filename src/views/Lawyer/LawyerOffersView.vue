<template>
  <div class="lawyer-offers">
    <LawyerOffersCard/>
  </div>
</template>
  
  
<script lang="ts">
import LawyerOffersCard from '@/components/lawyer/LawyerOffersCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LawyerOffersView',
  components: { LawyerOffersCard },
});
</script>
