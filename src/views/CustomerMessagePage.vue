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
                  margin-bottom: 15px;"
                ></v-list-item>
              </v-list>
              
              <v-divider></v-divider>

              <v-list style="background-color: #ff6006; margin-top: 20px;">
                <v-list-item
                  style="color:white"
                  v-for="(item, i) in offerList"
                  :key="i"
                  :value="item"
                  color="black"
                  @click="selectItem(item)"
                >
                  <v-list-item-title v-text="item.lawyerFirstName"></v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </div>
        <div class="v-col v-col-9">
          <v-card class="message-card" v-if="selectedOffer">
            <div style="margin-bottom: 15px; margin-top: 15px; text-align:left; margin-left: 10px; color: white;">
              {{ selectedOffer.lawyerFirstName }}</div>

            <v-divider></v-divider>
            <v-card-text class="message-container">
              <div v-for="(message, index) in filteredMessages" :key="index">
                <v-row class="message-row">
                  <v-col cols="12" :class="{'text-right': (message.fromClient), 'text-left': (message.fromClient =false)}">
                      <div class="message-bubble" :class="{'message-bubble-right': (message.fromClient=true
                      )}">
                      {{ message.messageBody }}
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
                @click:append="submitMessage"
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
import { defineComponent, onMounted, ref } from 'vue';
import axiosInstance from '@/services/Service.service';
import { Buffer } from "buffer/";
import TokenService from "@/services/Token.service";

export default defineComponent({
  name: 'CustomerMessagePage',
  components: {},
  setup() {

    const offers = ref();
    const offerList = ref([]);
    const questions = ref();
    const questionList = ref([]);
    const offerMap = ref([]);
    const messages = ref([]);
    const newMessage = ref("");
    const selectedOffer = ref(null);
    const activationToken = TokenService.getToken();
    const userCredentials = JSON.parse(Buffer.from(activationToken.split(".")[1], "base64").toString());
    const filteredMessages = ref();
    const selectItem = (item) => {
      selectedOffer.value = item;
      filteredMessages.value = messages.value.filter((message) => message.offerId === item.id);
      selectedOffer.value.messages = filteredMessages.value.map((message) => message.messageBody);
    };

    const submitMessage = async () => {
      if (newMessage.value && selectedOffer.value) {
        const message = {
          clientId: userCredentials.uid,
          offerId: selectedOffer.value.id,
          messageBody: newMessage.value,
          lawyerId: selectedOffer.value.lawyerId,
          fromClient: true,
          fromLawyer: false
        };
        const response = await axiosInstance.post('/Answers/Add', message);
        console.log('mesaj gönderiliyor...');
        newMessage.value = "";
      }
    };


    onMounted(async () => {
      selectedOffer.value = offerList[0];
      try {
        if (activationToken) {
          const allMessages = await axiosInstance.post("/Answers/GetAll", {});
          messages.value = allMessages.data;

          const customerOffers = await axiosInstance.post("/Offers/GetAll", {});
          offers.value = customerOffers.data;

          const customerQuestions = await axiosInstance.post("/Questions/GetAll", {});
          questions.value = customerQuestions.data;

          // userın tüm questionlarını alır
          questions.value.forEach((question) => {
            if (question.clientId == userCredentials.uid) {
              questionList.value.push(question);
            }
          });

          // userın tüm offerlarını alır
          offerMap.value = questionList.value.map((question) =>
            offers.value.filter((offer) => offer.questionId === question.id)
          );

          offerMap.value.forEach((offerArray) => {
            offerArray.forEach((offer) => {
              if (offer.isAccepted) {
                offerList.value.push(offer);
              }
            });
          });
        }
      } catch (error) {
        console.log(error);
      }
    });

    return {
      messages,
      newMessage,
      selectItem,
      selectedOffer,
      submitMessage,
      offerMap,
      questions,
      offers,
      questionList,
      offerList, filteredMessages
    };
  }
});
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
