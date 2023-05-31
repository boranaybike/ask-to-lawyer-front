<template>
    <v-card class="mx-auto my-12"
    width="260px" height="230px">
     
    <v-card-item style=" left: 70px; align:center; position: absolute; top: -40px; overflow: visible;" > <v-avatar size="75" color="black"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-avatar>
     </v-card-item>
    
    <v-card-item>
        <v-card-title  padding-top="550px" text-align="center">{{ "Av. " + firstName + " " + lastName}}</v-card-title>  
      </v-card-item>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0">

          <v-rating
            :model-value="rate"
            color="#EC4C0F"
            density="compact"
            half-increments
            readonly
            size="small"
            align="center"   
          ></v-rating>
            
        <div class="text-grey">
            {{ averageRate }} 
          </div>
        </v-row>
        
        <div>
        <v-row>
        <v-card-subtitle align="center" >
          <span class="my-4" style="margin-left: 20px;"  >{{ bio }}</span>
        </v-card-subtitle> </v-row></div>
   
        <div class="my-4 text-subtitle" align="center">
          <v-icon icon="mdi-scale-balance"></v-icon>
           bano no: {{ baro }}
        </div>
      </v-card-text>    
    </v-card>
  </template>


  <script>
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  
    export default defineComponent({

        name: 'LawyersCard',
        props: {
          firstName: {
            type: String,
            required: true
          },
          lastName: {
            type: String,
            required: true
          },
          baro: {
            type: String,
            required: true
          },
          bio: {
            type: String,
            required: true
          },
          rate: {
            type: Number,
            required: true
          },
          phone: {
            type: String,
            required: true
          },
          education: {
            type: String,
            required: true
          },
          averageRate: {
            type: Number,
            required: true
          }
  },
    components: {},
         setup() {
  
      return { };
    },
     
    })
  </script>
  
  <style scoped lang="scss">

  .mx-auto{
    border-radius: 5%;
    position: relative;
    overflow: visible;
  }
  
  .mx-0 {
    margin-bottom: 20px !important;
    margin-left: 50px !important;
}
.my-4 {
    margin-top: 36px !important;
}
.v-card .v-card-title {
    line-height: 2rem;
    margin-top: 35px;
}

  </style>