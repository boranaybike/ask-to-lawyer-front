<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="customerModal">

  
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">   
          <slot name="header">default header</slot>
        </div>
        <div class="email">
            <label for="email" style="margin-right: 335px; margin-bottom: 10px;">Email</label>
            <input type="email" id="email" v-model="email" required>
        </div>

        <div class="password">
            <label for="password" style="margin-right: 335px; margin-bottom: 10px;">Şifre</label>
            <input type="password" id="password" v-model="password" required>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            Şifreni mi unuttun?
            <button
              class="modal-default-button"
              @click="$emit('close')"
            >Giriş Yap</button>
          </slot>
        </div>
      </div>
    </div>



  </Transition>
</template>

<style>

#password{
  border: 1px solid #d5d5d5;
  width: 380px;
  border-radius: 10px;
  background-color: white;
  padding: 8px;
}

#email{
  border: 1px solid #d5d5d5;
  width: 380px;
  border-radius: 10px;
  background-color: white;
  padding: 8px;

}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  position: relative;
  width: 444px;
  height: 594px;
  margin: auto;
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  background-image: linear-gradient(rgba(0, 0, 0, 0.477),rgba(0, 0, 0, 0.477)),url(../assets/images/signin.jpg);
  background-size: cover;

}

.modal-header h3 {
  position: absolute;
  width: 206px;
  height: 51px;
  left: 108px;
  top: 64px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;

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