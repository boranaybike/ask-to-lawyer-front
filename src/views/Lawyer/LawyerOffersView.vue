<template>

<div class="title">
    Tekliflerim
  </div>

  <div class="lawyer-offers"><v-row>
      <v-col cols="6" v-for="offer in offerList" :key="offer.id">
          <LawyerOffersCard
            v-if="offer"
            :offerPrice="offer.price"
            :offerClientFirstName="getClientName(offer.questionId)"
            :offerLawyerBar="offer.lawyerBar"
            :question="getQuestionDescription(offer.questionId)"
            :offerState="offer.isAccepted"/>        
      </v-col>
    </v-row>
  </div>
</template>
  
  
<script>
import LawyerOffersCard from '@/components/lawyer/LawyerOffersCard.vue';
import { defineComponent, onMounted, ref } from 'vue';
import axiosInstance from '@/services/Service.service';
import {Buffer} from "buffer/";
import tokenService from "@/services/token";

export default defineComponent({
  name: 'LawyerOffersView',
  components: { LawyerOffersCard },
  setup() {
    const offers= ref();
    const offerList = ref([]);
    const questions = ref();
    const questionList = ref([]);
    const questionMap = ref ([]);

    const activationToken = TokenService.getToken();
    console.log(activationToken);

      onMounted(async () => {
        try {

          if(activationToken){

          const userCredentials = JSON.parse(Buffer.from(activationToken.split(".")[1], "base64").toString());

          const lawyerOffers = await axiosInstance.post("/Offers/GetAll",{});
          offers.value = lawyerOffers.data;
          
          const lawyerQuestions = await axiosInstance.post("/Questions/GetAll", {});
          questions.value = lawyerQuestions.data;

          //userın tüm offerlarını alır
          offers.value.forEach((o) => {
            if (o.lawyerId == userCredentials.uid) {
              offerList.value.push(o);
            }
          });
          
          questionMap.value = offerList.value.map((offer)=>
            questions.value.filter((question)=>question.id === offer.questionId)
          );
          console.log(offerList);

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

    const getClientName = (questionId) => {
      const question = questions.value.find((question) => question.id === questionId);
      return question ? question.clientName : "";
    };
      return {offers, offerList, questionMap, getQuestionDescription, getClientName};

    },
});
</script>

<style lang="scss" scoped>
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