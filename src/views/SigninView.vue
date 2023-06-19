<template>
    <div class="signin">
      <Signin/>  
    </div>
</template>
    
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Signin from '@/components/Signin.vue'
  
  export default defineComponent({
    name: 'signin',
    components: { Signin},
    
    setup() { 
      return { Signin};
    }
  });
  </script>
  <style lang="scss" scoped>
  </style>
  