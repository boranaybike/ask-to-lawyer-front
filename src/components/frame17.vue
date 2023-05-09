<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        persistent
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            frame 17
          </v-btn>
        </template>
        <v-card style="position: relative; width: 760px; height: 231px; background: #E7ECEF!important; border-radius: 20px;">

          <v-card-title style="position: relative; text-align: center; font-size: 32px; line-height: 39px; font-family: 'Inter';">
            Teklifi onaylıyor musunuz?
          </v-card-title>
          
          <v-card-actions style="align-items: center!important">
            <v-spacer></v-spacer>
            <v-btn
              class="text-none ms-4 text-white"
              color="#07B464"
              rounded="%20"
              variant="flat"
              width="177px"
              height="40px"
              left="396px"
              top="144px"


              @click="dialog = false"
            >
              Onayla
            </v-btn>
            <v-btn
              class="text-none ms-4 text-white"
              color="#EC4C0F"
              rounded="%20"
              variant="flat"
              width="177px"
              height="40px"
              left="396px"
              top="144px"
              

              @click="dialog = false"
            >
              Tekliflere Dön
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

  <script>
  export default {
    data () {
      return {
        dialog: false,
      }
    }
  }
</script>
<style lang="scss" scoped>


.v-card-title{
  text-align: center;
}

.v-dialog > .v-overlay__content > .v-card{
  align-items: center;
  padding: 8%;
}

</style>