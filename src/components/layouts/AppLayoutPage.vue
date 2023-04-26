<template>
  <div>
      <n-layout>
        <!-- <LayoutHeader /> -->
        <n-layout-content>
          <div v-if="lawyer">  
            <LawyerNavigationDrawer/>
          </div>
          <div v-else>  
            <CustomerNavigationDrawer/>
          </div>
          <slot />
        </n-layout-content>
        <!-- <LayoutFooter /> -->
      </n-layout>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import CustomerNavigationDrawer from "@/components/shared/CustomerNavigationDrawer.vue"
import LawyerNavigationDrawer from "@/components/shared/LawyerNavigationDrawer.vue"

export default defineComponent({
  setup() {
    const lawyer = false;

    return {lawyer};
  },
  components: { 
    CustomerNavigationDrawer,
    LawyerNavigationDrawer, },
});
</script>

<style scoped></style>