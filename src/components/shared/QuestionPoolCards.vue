<template>
    <v-card
      class="mx-auto"
      max-width="444"
      background-color= "#E7ECEF"
    >
      <v-card-item>
        <div>
          <v-row>      
            <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
            <v-avatar
            display="flex"
            justify-content="left"
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar></v-sheet>
        </v-col>
        <v-col>
        <v-sheet class="pa-2 ma-2">
          <div style="display: flex; justify-content: left; font-size: 13px; width: 90px; height: 18px; left: 167px; top: 282px;">
            {{clientName}}
          </div></v-sheet>
            </v-col>
          </v-row>
        
          <div style="display: flex; padding-left: 12px; font-size: 10px;">
            Ceza Hukuku
          </div>
          <div style="padding-left: 6px; font-size: 18px;" class="text-caption">
            " {{ description }} "
          </div>
        </div>
      </v-card-item>
  
      <v-card-actions>
      
    <div class="text-center">
          <v-btn @click="dialog=true">
            Teklif Ver
          </v-btn>
      <v-dialog
        v-model="dialog"
        width="auto"
      >
    <v-card
      class="mx-auto"
      style="width: 444px; height: 300px;"
    >
      <v-card-item>
        <div>
          <v-row>      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
            <v-avatar
            display="flex"
            justify-content="left"
            color="grey-darken-3"
            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-avatar></v-sheet>
        </v-col>
        <v-col>
        <v-sheet class="pa-2 ma-2">
          <div style="display: flex; justify-content: left; font-size: 13px; width: 90px; height: 18px; left: 167px; top: 282px;">
            {{clientName}}
          </div></v-sheet>
            </v-col>
          </v-row>
        
          <div style="display: flex; padding-left: 12px; font-size: 10px;">
            Ceza Hukuku
          </div>
          <div style="padding-left: 6px; font-size: 18px;" class="text-caption">
            " {{ description }} " </div>
        </div>
      </v-card-item>
      <v-text-field
          label="Fiyat"
          model-value=""
          suffix="TL"
          v-model="offerPrice"
        ></v-text-field>
  
      <v-card-actions>
        <v-btn @click="submitOffer(); dialog=false" style="color:white; font-size:10px; display: flex; justify-content: center;" rounded >
        Teklifi Gönder
      </v-btn>

      </v-card-actions>
    </v-card>
      </v-dialog>          

    </div>
 </v-card-actions>
    </v-card>
  </template>


<script>
import { defineComponent, ref } from 'vue';
import axiosInstance from '@/services/Service.service';
import TokenService from "@/services/Token.service";
import {Buffer} from "buffer/";


export default defineComponent({
    name: 'QuestionPoolCards',
    setup(props) {

    const dialog= ref(false);
    const offerPrice = ref('');      
    const activationToken = TokenService.getToken();
    const submitOffer = () => {
      if(activationToken){
        const userCredentials = JSON.parse(Buffer.from(activationToken.split(".")[1], "base64").toString());
          const offer = {
          lawyerId: userCredentials.uid,
          questionId: props.questionId,
          price: +offerPrice.value,
          isAccepted: false,
      }
      const response = axiosInstance.post('/Offers/Add', offer);
      console.log('Offer gönderiliyor...');
      }
    }


    return{dialog, submitOffer, offerPrice};
    },

    props: {
          clientName: {
            type: String,
            required: false
          },
          description: {
            required: true
          },
          maxPrice: {
            required: false
          },
          minPrice: {
            required: false
          },
          questionId:{
            required: false
          },
          clientId:{
            required: false
          }
        },
    components: { },
  });
</script>

<style lang="scss" scoped>

.v-card {
  
  width: 400px;
  height: 220px;
  border-radius: 22px;
}

.v-avatar.v-avatar--size-default {
    justify-content: left;
    display: flex;
}
.v-btn {
  color:white;
  font-size:10px;
  display: flex;
  justify-content: center;
  
}
.v-card-actions {
    align-items: center;
    display: flex;
    justify-content: center;
}
.v-card-actions .v-btn {
    width: 200px;
    background: #EC4C0F;
}
</style>