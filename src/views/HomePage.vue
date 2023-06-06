<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>
      </template>

      <v-card style="width: 750px;"><v-row>  <v-card-actions>
          <v-btn  block @click="dialog = false"><v-icon icon="mdi-close"></v-icon></v-btn>
        </v-card-actions></v-row>
     <v-layout>
      <v-navigation-drawer
       
        permanent
        theme="dark"
      >
        <v-list nav>
          <v-list-item style="background-color: rgb(255, 131, 43);" title="Kişi1" value="1"></v-list-item>
          <v-list-item  title="Kişi2" value="2"></v-list-item>
          <v-list-item  title="Kişi3" value="3"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 400px"><div class="chat">
    <div class="chat-container">
      <div class="chat-messages">
        <div v-for="message in messages" :key="message.id" class="chat-message">
          <div class="chat-sender">{{ message.sender }}</div>
          <div class="chat-text">{{ message.text }}</div>
        </div>
      </div>
      <div class="chat-input">
        <v-text-field v-model="newMessage"  variant="solo" label="Message" @keyup.enter="sendMessage" ></v-text-field>
        <v-btn color="primary" @click="sendMessage">Send</v-btn>
      </div>
    </div>
  </div></v-main>
    </v-layout>
    
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        messages: [],
        newMessage: ''
      }
    },
    methods: {
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({
          id: this.messages.length + 1,
          sender: 'User',
          text: this.newMessage
        });
        this.newMessage = '';
      }
    }
  }
  }
</script>

<style scoped>
.chat {
  max-width: 600px;
  margin: 0 auto;
}

.chat-container {
  background-color: #E7ECEF;
  min-height: 400px;
  border: 1px solid #ccc;
  padding: 10px;
}

.chat-messages {
  
  max-height: 300px;
  overflow-y: auto;
  
}

.chat-message {
  background-color: #9BA9B9;
  border-radius: 10px;
  margin-bottom: 10px;
  width: min-content;
  min-width: 75px;
}

.chat-sender {
  font-weight: bold;
}

.chat-text {
  margin-top: 5px;
}

.chat-input {
  display: flex;

  margin-top: 10px;
  
}
</style>