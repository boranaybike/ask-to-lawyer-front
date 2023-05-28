<template>

<div class="title">
    Profili Düzenle
  </div>

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
