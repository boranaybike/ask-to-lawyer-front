<template>
  <div class="home">
    <v-btn>
      Button
    </v-btn>
    <v-icon icon="mdi-home" />
    <v-icon icon="mdi:mdi-minus" /> // This renders a MDI icon
    <div class="navigation">
      <NavigationDrawer/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationDrawer from "@/components/shared/NavigationDrawer.vue"

export default defineComponent({
  name: 'HomeView',
  components: {
    NavigationDrawer  },
});
</script>
