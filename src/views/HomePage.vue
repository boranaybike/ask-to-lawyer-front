<template>
  <div class="twitter-chatbox">
    <div class="chatbox-messages">
      <!-- Mesajları göstermek için bir döngü kullanabilirsiniz -->
      <div v-for="message in messages" :key="message.id" :class="['message', { 'sent': message.sent }]">
        <div class="message-content">
          {{ message.text }}
        </div>
      </div>
    </div>
    <div class="chatbox-input">
      <v-text-field v-model="newMessage" placeholder="Mesajınızı girin" style="background-color: aliceblue;"></v-text-field>
      <v-btn color="#ec4e0f81">Gönder</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      messages: [
        { id: 1, text: "Merhaba!", sent: false },
        { id: 2, text: "Selam!", sent: true },
        { id: 3, text: "Nasılsın?", sent: false },
        { id: 4, text: "İyiyim, teşekkürler!", sent: true },
        { id: 4, text: "İyiyim, teşekkürler!", sent: false },
      ],
      newMessage: ''
    };
  },
  // methods: {
  //   sendMessage() {
  //     if (this.newMessage) {
  //       this.messages.push({ id: Date.now(), text: this.newMessage, sent: true });
  //       this.newMessage = '';
  //     }
  //   }
  // }
};
</script>

<style scoped>
.twitter-chatbox {
  background-color: #cde7f7;
  width: 600px;
  height: 500px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chatbox-messages {
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
}

.message {
  background-color: #9BA9B9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: left;
}

.message-content {
  font-size: 14px;
}

.sent {
  text-align: right;
  background-color: #ec4e0f81;
  align-self: flex-end;
}

.chatbox-input {
  display: flex;
  padding: 10px;
  align-items: center;
}

.v-text-field {
  flex: 1;
  margin-right: 10px;
}
.v-input__details {

  display: none;
}
</style>
