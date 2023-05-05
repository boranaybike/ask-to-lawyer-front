<template>
  <div class="customer-edit-account">
    <CustomerEditProfile/>  
  </div>
</template>
  
  
  
<script lang="ts">
import { defineComponent } from 'vue';
import CustomerEditProfile from '@/components/shared/CustomerProfileEdit.vue'

export default defineComponent({
  name: 'CustomerEditAccountView',
  components: { CustomerEditProfile },
  
  setup() { 


    return { CustomerEditProfile};
  }
});
</script>
<style lang="scss" scoped>
</style>
