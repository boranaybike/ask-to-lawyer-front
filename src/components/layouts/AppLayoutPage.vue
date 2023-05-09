<template>          
  <v-card>
    <v-layout>
      <v-app-bar color="E7ECEF" title="AVUKATA MI SORDUM " :elevation="5">Sana Söz Yine Baharlar Gelecek</v-app-bar>
      <v-main style="height:%100">
      <div v-if="lawyer">  
            <LawyerNavigationDrawer/>
          </div>
          <div v-else>  
            <CustomerNavigationDrawer/>
          </div>
        <v-container
          style="min-height: 100%;"
        >
        <slot />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>    
  <v-layout>
  <div claas="footer">
    <v-footer
    class="bg-black text-center d-flex flex-column"
  >
    

    <div class="pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
       Mauris cursus commodo interdum. Praesent ut risus eget metus luctus 
       accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
       ursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
       ursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
       ursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Copyright</strong>
    </div>
  </v-footer>
  </div></v-layout>


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

<style scoped>
.v-main{
  display: flex;
}
.v-layout{
  background-color: #33363F;

}

.footer {
  background-color: black;
  display: flex;
}
</style>