<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="customerModal">

  
    <div v-if="show" class="modalmask">
      <div class="modalcontainer">
        <button style="float: right; color: white;"
              @click="$emit('close')"
            ><v-icon icon="mdi-close"></v-icon></button>


        <div class="modalheader">   
          <h3>Danışan Olarak Kayıt Ol</h3>
        </div>

        <div class="nameSurname">
            <label for="nameSurname" >İsim Soyisim</label>
            <input type="nameSurname" id="nameSurname" v-model="nameSurname" required>
        </div>

        <div class="email">
            <label for="email" >E-mail</label>
            <input type="email" id="email" v-model="email" required>
        </div>

        <div class="telphone">
            <label for="telphone" >Telefon</label>
            <input type="telphone" id="telphone" v-model="telphone" required>
        </div>        

        <div class="password">
            <label for="password" >Şifre</label>
            <input type="password" id="password" v-model="password" required>
        </div>

        <div class="passwordagain">
            <label for="password" >Şifre Tekrar</label>
            <input type="password" id="password" v-model="password" required>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >Kayıt Ol</button>
          </slot>
        </div>
      </div>
    </div>



  </Transition>
</template>

<style lang="scss" scoped>

#password{
position: absolute;
width: 409px;
height: 37px;
left: 3px;
top: 40px;

background: #FFFFFF;
border-radius: 10px;
}

#nameSurname{
position: absolute;
width: 409px;
height: 37px;
left: 3px;
top: 40px;

background: #FFFFFF;
border-radius: 10px;
}

#telphone{
position: absolute;
width: 409px;
height: 37px;
left: 3px;
top: 40px;

background: #FFFFFF;
border-radius: 10px;
}

#email{
position: absolute;
width: 409px;
height: 37px;
left: 3px;
top: 40px;

background: #FFFFFF;
border-radius: 10px;

}

.modalmask {
  position: fixed;
  justify-content: center;
  align-items: center;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.3s ease;
}

.modalcontainer {
position: relative;
width: 513px;
height: 709px;
padding: 20px 30px;
border-radius: 20px;
background-image: linear-gradient(rgba(0, 0, 0, 0.477),rgba(0, 0, 0, 0.477)),url(../assets/images/customer_signup.jpg);
background-position: center;
opacity: 0.99;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
transition: all 0.3s ease;
background-size: cover;

}

.modalheader h3 {
position: absolute;
width: 358px;
height: 34px;
left: 109px;
top: 48px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 36px;
display: flex;
align-items: center;
letter-spacing: -0.02em;

color: #FFFFFF;

}

.modal-footer{
  margin-top: 490px;
  margin-left: 115px;
  color: white;
}
.nameSurname{
  position: absolute;
  width: 163px;
  height: 36px;
  left: 48px;
  top: 133px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}
.email {
  position: absolute;
  width: 84px;
  height: 36px;
  left: 48px;
  top: 218px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}
.telphone{
  position: absolute;
  width: 99px;
  height: 36px;
  left: 48px;
  top: 306px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;
}
.password {
  position: absolute;
  width: 61px;
  height: 36px;
  left: 48px;
  top: 396px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;

}
.passwordagain{
  position: absolute;
  width: 151px;
  height: 36px;
  left: 48px;
  top: 484px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  font-size: 22px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;

}
.modal-default-button {
  position: absolute;
  width: 300px;
  height: 55px;
  left: 100px;
  top: 611px;

  background: #EC4C0F;
  border-radius: 20px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>