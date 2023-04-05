<template>
  <div class="home">
    <v-btn>
      Button
    </v-btn>
    <v-icon icon="mdi-home" />
    <v-icon icon="mdi:mdi-minus" /> // This renders a MDI icon
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
      },
});
</script>
