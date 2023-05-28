<template>

<div class="title">
    Kazançlarım
  </div>

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