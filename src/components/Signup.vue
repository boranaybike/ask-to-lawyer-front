<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto">
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props">
          Kayıt Ol
        </v-btn>
      </template>
      <v-card class="mx-auto" max-width="500">
        <v-container fluid>
          <p class="text-h4 text--primary">KAYIT OL</p>
          <v-row dense>
            <v-col :cols="6"> 
              <v-card>            
                <v-img
                  :src="require('@/assets/images/lawyer_signup.jpg')"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="200px"
                  cover>            
                <v-card-title class="text-white">Avukat olarak<br> kayıt ol</v-card-title>
                </v-img>
              </v-card>
                  </v-col>
                  <v-col :cols="6">
                  <v-card>
                      <v-img
                          :src="require('@/assets/images/customer_signup.jpg')"
                          class="align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="200px"
                          cover>
                      <v-card-title class="text-white">Danışan olarak <br/>kayıt ol</v-card-title>
                      </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
export default {
    name: "Signup",
  components: {
  },
  data () {
    return {
      dialog:false,
    }
  },
}
</script>

<style lang="scss" scoped>
.v-dialog > .v-overlay__content{
  border-radius:5%!important;
}
.text-h4{
  text-align: center;
}

.v-container--fluid{
  width: 600px;
}
.v-responsive{
  height: 250px!important;
}
.text-white{
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
}
</style>