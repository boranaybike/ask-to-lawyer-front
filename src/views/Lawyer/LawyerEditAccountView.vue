<template>

<div class="title">
    Profilim
  </div>

      <LawyerEditProfile/>
</template>
    
    
    
    
<script lang="ts">
  import { defineComponent } from 'vue';
  import LawyerEditProfile from '@/components/shared/LawyerProfileEdit.vue'

  export default defineComponent({
    name: 'LawyerEditAccountView',
    components: { LawyerEditProfile },
    setup() {    
      return {LawyerEditProfile};
},

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