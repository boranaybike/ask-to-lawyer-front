<template>

<div class="title">
    Tekliflerim
  </div>

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