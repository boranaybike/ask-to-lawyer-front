<template>
  <div class="text-center">
    <button @click="signup = true">
      Kayıt Ol
  </button>

    <v-dialog v-model="signup">
      <v-card>
        <v-card-text>
         <div class="box">
          <h3>KAYIT OL</h3>
          <div class="lawyer">
            <button> Avukat Olarak Kayıt Ol</button>
            <div class="client">
              <button> Müşteri Olarak Kayıt Ol</button>
            </div>
          </div>
         </div>
        </v-card-text>
        <div class="signup-footer">
          <slot name="footer">
            Üyeliğiniz var mı?
            <button class="signin-button" @click="signup = false" >Giriş Yapın</button>
          </slot>
        </div>
       <!-- <v-card-actions>
          Üyeliğiniz var mı?
          <button @click="signup = false">Giriş Yapın</button>
        </v-card-actions> -->
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

.box{
position: relative;
width: 914px;
height: 615px;
left: 407px;
top: 313px;

background: #E7ECEF;
opacity: 0.99;
border-radius: 30px;
}
.signup-footer{
  margin-top: 490px;
  margin-left: 115px;
  color: black;
}
</style>