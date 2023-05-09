<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            
            v-bind="props"
          >
            frame 21
          </v-btn>
        </template>
  
        <v-card style="position: relative; width: 596px; height: 186px; background: #E7ECEF; border-radius: 20px;">
          <v-card-text>
            Ödemeniz Hesabınıza Yatırılmıştır.
          </v-card-text>
          <v-card-actions>
            <v-btn @click="dialog = false">
              <v-icon icon="mdi-close"></v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
}
</script>
<style>
.v-card-text{
    position: absolute;
    width: 376px;
    height: 24px;
    left: 118px;
    top: 81px;
    text-align: center;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
}
.v-card-actions{
    text-align: right;
    height: 30px;
    top: 9px;
    position: relative;

}
</style>