<template>

  <div class="title">
    Tekliflerim
  </div>

  <div class="customer-offers">
    <v-row>
        <v-col cols="6" v-for="offerGroup in offerMap" :key="offerGroup[0].id">
          <template v-for="offer in offerGroup">
        <OffersCard v-if="offer && offer.isAccepted ==false" 
        :offerPrice="offer.price" 
        :offerLawyerFirstName="offer.lawyerFirstName" 
        :offerLawyerLastName="offer.lawyerLastName" 
        :offerLawyerBar="offer.lawyerBar"
        :offerId="offer.id"
        :offerState="offer.isAccepted"
        :question="getQuestionDescription(offer.questionId)"/>        
      </template>
      </v-col>
    </v-row>
  </div>
</template>
  
<script>
import { defineComponent, onMounted, ref } from 'vue';
import OffersCard from '@/components/customer/OffersCard.vue'
import axiosInstance from '@/services/Service.service';
import {Buffer} from "buffer/";
import tokenService from "@/services/token";

export default defineComponent({
  name: 'CustomerOffersView',
  components: { OffersCard},
      
  setup() {
    const offers= ref();
    const questions = ref();
    const questionList = ref([]);
    const offerMap = ref([]);

    const activationToken = TokenService.getToken();

      onMounted(async () => {
        try {

          if(activationToken){

          const userCredentials = JSON.parse(Buffer.from(activationToken.split(".")[1], "base64").toString());

          const customerOffers = await axiosInstance.post("/Offers/GetAll",{});
          offers.value = customerOffers.data;
          
          const customerQuestions = await axiosInstance.post("/Questions/GetAll", {});
          questions.value = customerQuestions.data;

          //userın tüm questionlarını alır
          questions.value.forEach((question) => {
            if (question.clientId == userCredentials.uid) {
              questionList.value.push(question);
            }
          });

          // userın tüm offerlarını alır
          offerMap.value = questionList.value.map((question)=>
            offers.value.filter((offer)=>offer.questionId === question.id)
          );
        } 
      }
      catch (error) {
          console.log(error);
        }
      });
      const getQuestionDescription = (questionId) => {
      const question = questions.value.find((question) => question.id === questionId);
      return question ? question.description : "";
    };

      return {questionList, offerMap, getQuestionDescription};

    },
});
</script>


<style scoped>

.title{
  position: absolute;
  top: 50px;
  left: 250px;
  padding: 8px;
  width: 300px;
  border: 2px solid #EC4C0F;
  background-color: #EC4C0F;
  font-size: 25px;
  color: white;
}

</style>