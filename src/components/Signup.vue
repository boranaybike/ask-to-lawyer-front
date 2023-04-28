<template>
  <div class="text-center">
    <button @click="signup = true">
      Kayıt Ol
  </button>

    <v-dialog
      v-model="signup"
    >
      <v-card>
        <v-card-text>
         <div class="box">
          <div class="lawyer">
            <div class="client">

            </div>
          </div>
         </div>
        </v-card-text>
        <v-card-actions>
          Üyeliğiniz var mı?
          <button @click="signup = false">Giriş Yapın</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        signup: false,
      }
    },
  }
</script>

<style>


</style>