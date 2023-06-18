<template>

  <div class="title">
    Tekliflerim
  </div>

  <div class="customer-offers">
    <v-row>
      <v-col cols="6" v-for="offer in questionList" :key="offer.id">
        <OffersCard v-if="offer" :offerPrice="offer.price"/>        
      </v-col>
    </v-row>
  </div>
</template>
  
  
  
<script>
import { defineComponent, onMounted, ref } from 'vue';
import OffersCard from '@/components/customer/OffersCard.vue'
import axiosInstance from '@/services/Service.service';
import {Buffer} from "buffer/";
import TokenService from "@/services/Token.service";


export default defineComponent({
  name: 'CustomerOffersView',
  components: { OffersCard},

      
  setup() {
    const offers= ref();
    const offerList = ref([]);
    const questions = ref();
    const questionList = ref([]);
    const lawyers = ref();
    const lawyerList= ref([]);

    const activationToken = TokenService.getToken();
    console.log(activationToken);

      onMounted(async () => {
        try {

          if(activationToken){

          const userCredentials = JSON.parse(Buffer.from(activationToken.split(".")[1], "base64").toString());

          const customerOffers = await axiosInstance.post("/Offers/GetAll",{});
          offers.value = customerOffers.data;

          const customerQuestions = await axiosInstance.post("/Questions/GetAll", {});
          questions.value = customerQuestions.data;

          const offerLawyers = await axiosInstance.post("/Lawyers/GetAll", {});
          lawyers.value = offerLawyers.data;
         
          questions.value.forEach((question) => {
            if (question.clientId == userCredentials.uid) {
              questionList.value.push(question);
            }
          });

          const offerMap = questionList.value.map((question)=>
            offers.value.filter((offer)=>offer.questionId === question.id)
          );
          
          console.log("offer", offerMap);
          const lawyerMap = offerMap.map((offer)=> offer.map((o)=> lawyers.value.filter((lawyer) => lawyer.id === o.lawyerId ))
          );
          console.log("lawyermap", lawyerMap);
        } 
      }
      catch (error) {
          console.log(error);
        }
      });
  
      return {questionList};

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