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
        <v-card>
          <v-card-title class="text-h5">
            Teklifi Onaylıyor musunuz?
          </v-card-title>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Disagree
            </v-btn>
            <v-btn
              color="green-darken-1"
              variant="text"
              @click="dialog = false"
            >
              Agree
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
    },
  }
</script>