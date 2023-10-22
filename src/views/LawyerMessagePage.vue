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
                    v-for="(item, i) in questionMap"
                    :key="i"
                    :value="item"
                    color="black"
                    @click="selectItem(item)"
                  >
                    <v-list-item-title v-text="item[0].clientName"></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </div>
          </div>
          <div class="v-col v-col-9">
            <v-card class="message-card" v-if="selectedQuestion">
              <div style="margin-bottom: 15px; margin-top: 15px; text-align:left; margin-left: 10px; color: white;">
                {{ selectedQuestion[0].clientName }}</div>
  
              <v-divider></v-divider>
              <v-card-text class="message-container">
                <div v-for="(message, index) in filteredMessages" :key="index">
                  <v-row class="message-row">
                    <v-col cols="12" :class="{'text-right': (message.fromClient = true), 'text-left': (message.fromClient ==false)}">
                        <div class="message-bubble" :class="{'message-bubble-right': (message.fromClient = true)}">
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
  import { defineComponent, onMounted, ref, computed } from 'vue';
  import axiosInstance from '@/services/Service.service';
  import { Buffer } from "buffer/";
  import tokenService from "@/services/token";
  
  export default defineComponent({
    name: 'LawyerMessagePage',
    components: {},
    setup() {
  
      const offers = ref();
      const offerList = ref([]);
      const questions = ref();
      const questionList = ref([]);
      const questionMap = ref([]);
      const messages = ref([]);
      const newMessage = ref("");
      const selectedOffer = ref(null);
      const selectedQuestion = ref(null);
      const activationToken = TokenService.getToken();
      const userCredentials = JSON.parse(Buffer.from(activationToken.split(".")[1], "base64").toString());
      const filteredMessages = ref();
      const filteredQuestions = ref();
      const selectItem = (item) => {
  selectedQuestion.value = item;
  const filteredOffers = offerList.value.filter((offer) => offer.questionId == item[0].id);
  console.log(filteredOffers);
  if (filteredOffers.length > 0) {
    selectedOffer.value = filteredOffers[0]; // İlk öğeyi seçiyoruz
    console.log(filteredOffers);
    filteredMessages.value = messages.value.filter((message) => message.offerId == selectedOffer.value.id);
    selectedOffer.value.messages = filteredMessages.value.map((message) => message.messageBody);
  }
};

        const submitMessage = async () => {

        if (newMessage.value && selectedQuestion.value) {            

            const message = {
            lawyerId: userCredentials.uid,
            offerId: selectedOffer.value.id,
            messageBody: newMessage.value,
            clientId: selectedQuestion.value.clientId,
            fromClient: false,
            fromLawyer: true
            };
            const response = await axiosInstance.post('/Answers/Add', message);
            console.log('mesaj gönderiliyor...');
            newMessage.value = "";
  }
};

  
  
      onMounted(async () => {
        selectedQuestion.value = offerList[0];
        try {
          if (activationToken) {
            const allMessages = await axiosInstance.post("/Answers/GetAll", {});
            messages.value = allMessages.data;
  
            const customerOffers = await axiosInstance.post("/Offers/GetAll", {});
            offers.value = customerOffers.data;
  
            const customerQuestions = await axiosInstance.post("/Questions/GetAll", {});
            questions.value = customerQuestions.data;

 
            offers.value.forEach((offer) => {
            if (offer.lawyerId == userCredentials.uid && offer.isAccepted) {
                offerList.value.push(offer);
            }
            });
            
            questionMap.value = offerList.value.map((offer) =>
            questions.value.filter((question) => offer.questionId == question.id )
          );

          console.log(questionMap.value);
  
          }
        } catch (error) {
          console.log(error);
        }
      });
  
      return {
        filteredQuestions,
        messages,
        newMessage,
        selectItem,
        selectedQuestion,
        selectedOffer,
        submitMessage,
        questionMap,
        questions,
        offers,
        questionList,
        offerList, 
        filteredMessages
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
  