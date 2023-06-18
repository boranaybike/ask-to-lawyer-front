<template>
    <div class="lawyer-register">
      <LawyerSignup/>  
    </div>
</template>
    
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import LawyerSignup from '@/components/SignupLawyer.vue'
  
  export default defineComponent({
    name: 'lawyerRegister',
    components: { LawyerSignup },
    
    setup() { 
      return { LawyerSignup};
    }
  });
  </script>
  <style lang="scss" scoped>
  </style>
  