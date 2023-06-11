<template>
  <div class="full-page">
    <div class="page">
      <div class="v-row">
        <div class="v-col v-col-3">
          <div id="title">
            <v-card style="background-color: #ff6006; height: 85vh;">
              <v-list style="background-color: #ff6006;">
                <v-list-item
                  align="center"
                  prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
                  title="Kader Mahkumu"
                  style="color: white;
                  margin-bottom: 15px;
                  "
                ></v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list style="background-color: #ff6006; margin-top: 20px;">
                <v-list-item
                  style="color:white"
                  v-for="(item, i) in items"
                  :key="i"
                  :value="item"
                  color="black"
                  @click="selectItem(item)"
                >
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </div>
        <div class="v-col v-col-9">
          <v-card class="message-card" v-if="selectedItem">
            <div style="margin-bottom: 15px; margin-top: 15px; text-align:left; margin-left: 10px; color: white;">{{ selectedItem.text }}</div>

            <v-divider></v-divider>
            <v-card-text class="message-container">
              <div v-for="(message, index) in selectedItem.messages" :key="index">
                <v-row class="message-row">
                  <v-col cols="12" :class="{'text-right': message.isMine, 'text-left': !message.isMine}">
                    <div class="message-bubble" :class="{'message-bubble-right': message.isMine}">
                      {{ message.text }}
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>

            <v-card-actions>
              <v-text-field
                v-model="newMessage"
                variant="solo"
                label="Mesajınızı girin..."
                append-icon="mdi-send"
                @click:append="sendMessage"
                :icon-color="'white'"
                class="message-input"
              ></v-text-field>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { text: "Merhaba", isMine: false },
        { text: "Merhaba, nasılsınız?", isMine: true },
        { text: "Ben iyiyim, teşekkürler!", isMine: false },
      ],
      newMessage: "",
      items: [
        { text: 'Av. Adalet Hanım', messages: [] },
        { text: 'Av. Hakim Bey', messages: [] },
        { text: 'Av. Falan Filan', messages: [] },
        { text: 'Av. Adalet Maker', messages: [] },
        { text: 'Av. Dua Lipa', messages: [] },
        { text: 'Av. Bella Hadid', messages: [] },
        { text: 'Av. 7', messages: [] },
      ],
      selectedItem: null,
    };
  },
  mounted() {
    this.selectedItem = this.items[0];
  },
  computed: {},
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
    sendMessage() {
      if (this.newMessage) {
        this.selectedItem.messages.push({
          text: this.newMessage,
          isMine: true,
        });
        this.newMessage = "";
      }
    },
  },
};
</script>

<style scoped>
.full-page {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0 !important;
}

div.v-container {
  padding: 0 !important;
}

.title {
  color: white;
}

.message-card {
  width: 100%;
  height: 85vh;
  background-color: #9ba9b9a7;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.message-container {
  flex: 1;
  overflow-x: hidden;
  padding: 10px;
  margin-right: -10px;
  background-color: #E7ECEF;
}

.message-row {
  margin-bottom: 10px;
}

.avatrMine {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  text-align: left;
}

.avatarOther {
  margin-top: auto;
  margin-bottom: auto;
}

.message-bubble {
  padding: 10px;
  border-radius: 16px;
  background-color: #9BA9B9;
  display: inline-block;
  position: relative;
  margin-left: 20px;
  max-width: 500px;
}

.message-bubble-right {
  background-color: #E99C7F;
  color: white;
  text-align: right;
  margin-right: 20px;
  max-width: 500px;
}

.message-input {
  width: 100%;
}
</style>

