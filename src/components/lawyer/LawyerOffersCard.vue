<template>
    <v-card
      class="mx-auto"
      max-width="444"
      background-color= "#E7ECEF">
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
          <div style="color:black; display: flex; justify-content: left; font-size: 13px; width: 90px; height: 18px; left: 167px; top: 282px;">
            {{offerClientFirstName}}
            </div>
          <div style="display: flex; justify-content: left; font-size: 8px;">
            5 gün önce soruldu
          </div></v-sheet>
            </v-col>
          </v-row>
        
          <div style="padding-right: 10px; font-size: 18px;" class="text-caption">
            “ {{question}} ”</div>
        </div>

        <div style="color:black; font-weight: 700; display: flex; padding-top: 10px; padding-left: 12px; font-size: 10px;">
            {{ offerPrice }} ₺ Teklif Verildi
          </div>
      </v-card-item>
  
      <v-card-actions>
        <div v-if="offerState==false">
        <v-btn color="white" rounded >
            Onay Bekleniyor
      </v-btn></div>
      <div v-else>
      <v-btn color="white" rounded >
            Cevabınız Bekleniyor
      </v-btn></div>


      </v-card-actions>
    </v-card>
  </template>



<script>
import { defineComponent } from 'vue';
import { ref } from 'vue';

export default defineComponent({
      components: {  },
      setup(props) {
      const category = ref("Ceza Hukuku")
      const rate = ref(3.5)
      console.log(props.offerState)


    return { category, rate};
  },

  props: {
    
        offerPrice: {
          required: false
        },
        offerClientFirstName: {
          required: true
        },
        offerLawyerBar: {
          required: false
        },
        question: {
          required: false
        },
        offerState:{
          required:false
        }
      },
  })
</script>


<style lang="scss" scoped>

.v-card {
  
  width: 360px;
  height: 240px;
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
.text-caption{
    justify-content: left;
    display: flex;
}
</style>