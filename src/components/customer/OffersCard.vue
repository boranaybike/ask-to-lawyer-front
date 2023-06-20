<template>
    <v-card class="mx-auto my-12">   
    <v-card-item>
           <v-row>
            <v-col cols="6" style="text-align:left; position: absolute;
            top: -40px; left: 16px; overflow: visible;" > <v-avatar size="75"
            color="black"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-avatar></v-col> 
              <v-col cols="12" style="text-align:right;"> {{ date }}</v-col> </v-row>
        </v-card-item>

      <v-card-item>
        <v-card-title  align="left">{{ offerLawyerFirstName }} {{ offerLawyerLastName }}</v-card-title>
      </v-card-item>
  
      <v-card-text>
        <v-row
          align="left"
          class="mx-0"
        >
          <v-rating
            :model-value="rate"
            color="#EC4C0F"
            density="compact"
            half-increments
            readonly
            size="small"
            
          ></v-rating>
          
  
          <div class="text-grey">
            {{ rate }} (413)
          </div>
        </v-row>
        
  
        <div class="my-4 text-subtitle-" >
           {{ baro  }}
        </div><div>
        
        <v-row>
        <v-card-subtitle style="padding-right: 0px; padding-left: 12px;">
          <span class="my-4" >{{ category }}</span>
       
          
        </v-card-subtitle> </v-row></div>
  
        <div style="margin-top: 25px;">{{ question }}</div>
      </v-card-text>

      <v-card-title style="text-align:right">{{ offerPrice }} ₺</v-card-title>

      <v-row justify="center">
        <v-dialog
          v-model="dialog"
          persistent
          width="auto"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
            teklifi kabul et        
          </v-btn>
          </template>
          <v-card>
            <v-card-text> Teklifi onaylıyor musunuz?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green-darken-1"
                variant="text"
                @click="acceptOffer(); dialog=false; dialog2=true"
              >
              Onayla
              </v-btn>
              <v-btn
                color="green-darken-1"
                variant="text"
                @click="dialog = false; "
              >
              Tekliflere Dön
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        
      <v-dialog
        v-model="dialog2"
        width="auto"
      >
        <v-card>
          <v-card-title>
            <span>teklif kabul edilmiştir</span>
          </v-card-title>
          <v-card-actions>
            <v-btn
              color="primary"
              variant="text"
              @click="dialog2 = false;"
            >
              Tekliflere dön
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      </v-row>






    </v-card>
  </template>

  <script>
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  import axiosInstance from '@/services/Service.service'

  
  export default defineComponent({

        name: 'CustomerOffersView',
        components: { },
        setup(props) {
        const category = ref("Ceza Hukuku")
        const rate = ref(3.5)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = ref(new Date().toLocaleDateString('tr-TR', options));
        const dialog = ref(false);
        const dialog2 = ref(false);
        
        const offerState = ref(props.offerState);

        const acceptOffer = () => {
          offerState.value = true;
            
          const updatedOffer={
            id: props.offerId,
            isAccepted: offerState.value
          }

          const response =  axiosInstance.post("/Offers/Update", updatedOffer);
        };

        setInterval(() => {
          date.value = new Date().toLocaleDateString('tr-TR', options);
        }, 1000);

  
      return { date , category, rate, acceptOffer, dialog, dialog2};
    },

    props: {
          offerPrice: {
            required: false
          },
          offerLawyerFirstName: {
            required: true
          },
          offerLawyerLastName: {
            required: false
          },
          question: {
            required: false
          },
          offerId: {
            required: true
          },
          offerState: {
            required: true
          },
        },
    })
  </script>
  
  <style scoped="scss">
  .v-btn {
   
    color:white;
    font-size:10px;
   
  }
  .mx-auto{
    border-radius: 5%;
    position: relative;
    overflow: visible;
  }
  </style>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      