<template>
  <div class="home">
    <p>HOMEPAGE</p>
<!-- 
    <v-btn>
      Button
    </v-btn>
    <v-icon icon="mdi-home" />
    <v-icon icon="mdi:mdi-minus" /> // This renders a MDI icon -->
  </div>
  <div>
    <v-btn>
    <button @click="showModal = true">Giriş Yap</button>
    </v-btn>
    <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Giriş Yap</h3>
      </template>
    </modal>
  </Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
import modal from '../components/Signin.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    modal
      },
      setup() {
    const showModal = ref(false);

    return { showModal };
  },
    
});
</script>
