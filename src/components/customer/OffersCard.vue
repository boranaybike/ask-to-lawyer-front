<template>
    <v-card class="mx-auto my-12"
      max-width="374">
     
    <v-card-item>
           <v-row><v-col cols="6" style="text-align:left; position: absolute;
  top: -40px;
  left: 16px; overflow: visible;" > <v-avatar size="75"
            
            
            
            color="black"
              image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-avatar></v-col> 
              <v-col cols="12" style="text-align:right;"> {{ date }}</v-col> </v-row>
        </v-card-item>
    
  
     
  
      <v-card-item>
        <v-card-title  align="left">{{ lawyerName }}</v-card-title>
  
        
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
        
  
        <div class="my-4 text-subtitle-" align="left" >
           {{ baro  }}
        </div><div>
        
        <v-row>
        <v-card-subtitle style="padding-right: 0px; padding-left: 12px;">
          <span class="my-4 " align="left" >{{ category }}</span>
       
          
        </v-card-subtitle> </v-row></div>
  
        <div style="margin-top: 25px;">{{ question }}</div>
      </v-card-text>
  
      
  
      <v-card-title style="text-align:right">{{ price }} ₺</v-card-title>
  
      
  
      
        <v-btn color="#EC4C0F" rounded type="submit" block class="mt-2"  style=" color:white; font-size:10px;"> Teklifi Kabul et </v-btn>
    
    </v-card>
  </template>
  <script>
  import { defineComponent } from 'vue';
  import { ref } from 'vue';
  
    export default defineComponent({

        name: 'HomeView',
         components: {},
         setup() {
        const question = ref("Yolda Giderken adam bana yan baktı ve ben de çekip vurdum kaç yıl yatarım");
        const lawyerName=ref("Rick Grimes");
        const price = ref(100);
        const baro = ref("Antalya Barosu")
        const category = ref("Ceza Hukuku")
        const rate = ref(3.5)
      
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = ref(new Date().toLocaleDateString('tr-TR', options));

  setInterval(() => {
    date.value = new Date().toLocaleDateString('tr-TR', options);
  }, 1000);

  
      return { date, question, lawyerName,price, baro , category, rate };
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
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      