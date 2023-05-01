<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="customerModal">

  
    <div v-if="show" class="modalmask">
      <div class="modalcontainer">
        <div class="modalheader">   
          <h3>Danışan Olarak Kayıt Ol</h3>
        </div>

        <div class="nameSurname">
            <label for="nameSurname" style="margin-right: 335px; margin-bottom: 10px;">İsim Soyisim</label>
            <input type="nameSurname" id="nameSurname" v-model="nameSurname" required>
        </div>

        <div class="email">
            <label for="email" style="margin-right: 335px; margin-bottom: 10px;">Email</label>
            <input type="email" id="email" v-model="email" required>
        </div>

        <div class="telphone">
            <label for="telphone" style="margin-right: 335px; margin-bottom: 10px;">Telefon</label>
            <input type="telphone" id="telphone" v-model="telphone" required>
        </div>        

        <div class="password">
            <label for="password" style="margin-right: 335px; margin-bottom: 10px;">Şifre</label>
            <input type="password" id="password" v-model="password" required>
        </div>

        <div class="password">
            <label for="password" style="margin-right: 335px; margin-bottom: 10px;">Şifre Tekrar</label>
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
left: 48px;
top: 169px;

background: #FFFFFF;
border-radius: 10px;
}

#nameSurname{
position: absolute;
width: 409px;
height: 37px;
left: 48px;
top: 169px;

background: #FFFFFF;
border-radius: 10px;
}

#telphone{
position: absolute;
width: 409px;
height: 37px;
left: 48px;
top: 169px;

background: #FFFFFF;
border-radius: 10px;
}

#email{
position: absolute;
width: 409px;
height: 37px;
left: 48px;
top: 169px;

background: #FFFFFF;
border-radius: 10px;

}

.modalmask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.3s ease;
}

.modalcontainer {
position: static;
width: 513px;
height: 849px;
padding: 20px 30px;
border-radius: 20px;
background-image: linear-gradient(rgba(0, 0, 0, 0.477),rgba(0, 0, 0, 0.477)),url(../assets/images/customer_signup.jpg);
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

.email {
  position: absolute;
  width: 51px;
  height: 29px;
  left: 195px;
  top: 140px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */


  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;
  flex-direction: column;
}

.password {
  position: absolute;
  width: 51px;
  height: 29px;
  left: 195px;
  top: 270px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #FFFFFF;

  flex-direction: column;
  
}

.modal-default-button {
  position: absolute;
  width: 229px;
  height: 45px;
  left: 97px;
  top: 424px;

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