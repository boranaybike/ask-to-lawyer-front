<template>
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
  