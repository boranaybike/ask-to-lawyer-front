<template>
    <div class="lawyers-view">
      <lawyersCard/>
    </div>
  </template>
    
    
    
  <script lang="ts">
  import { defineComponent } from 'vue';
  import lawyersCard from '@/components/lawyersCard.vue'
  
  export default defineComponent({
    name: 'LawyersView',
    components: { lawyersCard},
  });
  </script>