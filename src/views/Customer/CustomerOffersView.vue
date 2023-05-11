<template>
  <div class="customer-offers">
    <OffersCard/>
  </div>
</template>
  
  
  
<script lang="ts">
import { defineComponent } from 'vue';
import OffersCard from '@/components/customer/OffersCard.vue'

export default defineComponent({
  name: 'CustomerOffersView',
  components: { OffersCard},
});
</script>
