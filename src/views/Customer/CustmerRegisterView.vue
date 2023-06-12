<template>

      <div class="customer-register">
        <customerSignup/>  
      </div>
</template>
      
      
    <script lang="ts">
    import { defineComponent } from 'vue';
    import customerSignup from '@/components/SignupCustomer.vue'
    
    export default defineComponent({
      name: 'CustomerRegister',
      components: { customerSignup },
      
      setup() { 
        return { customerSignup};
      }
    });
    </script>
    <style lang="scss" scoped>
    </style>
    