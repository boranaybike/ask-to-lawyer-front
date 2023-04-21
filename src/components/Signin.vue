<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">   <!-- arka plan için css yaz email ve benzeri bileşenleri ekle ve tasarıma uygun hale getir. -->
          <slot name="header">default header</slot>
        </div>
        <div class="email">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="email" required>
        </div>

        <div class="password">
            <label for="password">Şifre</label>
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  position: relative;
  width: 444px;
  height: 594px;
  margin: auto;
  padding: 20px 30px;
  background-color: #161515;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
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

border: 1px solid #000000;
}

.email {
position: absolute;
width: 69px;
height: 29px;
left: 17px;
top: 166px;

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

.password {
position: absolute;
width: 51px;
height: 29px;
left: 17px;
top: 264px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 29px;

display: flex;
align-items: center;
letter-spacing: -0.02em;

color: #FFFFFF;
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