<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="lawyerModal">

  
    <div v-if="show" class="modal-mask">
      <div class="modalContainer">
        <div class="modalHeader">   
          <h3>Avukat Olarak Kayıt Ol</h3>
        </div>
        <div class="nameSurname">
            <label for="nameSurname" style="margin-right: 335px; margin-bottom: 10px;">İsim Soyisim</label>
            <input type="nameSurname" id="nameSurname" v-model="nameSurname" required>
        </div>

        <div class="email">
            <label for="email" style="margin-right: 335px; margin-bottom: 10px;">Email</label>
            <input type="email" id="email" v-model="email" required>
        </div>

        <div class="barono">
            <label for="barono" style="margin-right: 335px; margin-bottom: 10px;">Baro Sicil No.</label>
            <input type="barono" id="barono" v-model="barono" required>
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

<style>
#nameSurname{
  border: 1px solid #d5d5d5;
  width: 409px;
  height: 37px;
  border-radius: 10px;
  background-color: white;
  padding: 8px;
}

#barono{
  border: 1px solid #d5d5d5;
  width: 409px;
  border-radius: 10px;
  background-color: white;
  padding: 8px;    
}

#telphone{
  border: 1px solid #d5d5d5;
  width: 409px;
  border-radius: 10px;
  background-color: white;
  padding: 8px;   
}

#password{
  border: 1px solid #d5d5d5;
  width: 409px;
  border-radius: 10px;
  background-color: white;
  padding: 8px;
}

#email{
  border: 1px solid #d5d5d5;
  width: 409px;
  border-radius: 10px;
  background-color: white;
  padding: 8px;

}

.modal-mask {

  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.3s ease;
}

.modalContainer {
position: relative;
width: 513px;
height: 849px;
padding: 20px 30px;
border-radius: 20px;
background-image: linear-gradient(rgba(0, 0, 0, 0.477),rgba(0, 0, 0, 0.477)),url(../assets/images/lawyer_signup.jpg);
opacity: 0.99;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
transition: all 0.3s ease;
background-size: cover;

}

.modalHeader h3 {
position: absolute;
width: 358px;
height: 34px;
left: 77px;
top: 48px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 41px;
display: flex;
align-items: center;
letter-spacing: -0.02em;

color: #FFFFFF;
}

.barono{
position: absolute;
width: 145px;
height: 29px;
left: 48px;
top: 311px;

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
}

.nameSurname{
position: absolute;
justify-content: center;
width: 135px;
height: 29px;

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
}

.telphone{
position: absolute;
width: 81px;
height: 29px;
left: 48px;
top: 390px;

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
}
.email {
position: absolute;
width: 69px;
height: 29px;
left: 48px;
top: 222px;

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
left: 48px;
top: 480px;

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

.modal-default-button {
position: absolute;
width: 409px;
height: 66px;
left: 48px;
top: 688px;

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