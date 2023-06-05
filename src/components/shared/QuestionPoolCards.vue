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
          </div>
          <div style="display: flex; justify-content: left; font-size: 8px;">
            5 gün önce soruldu
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
      
      <teklifVer/>
      </v-card-actions>
    </v-card>
  </template>


<script>
import { defineComponent } from 'vue';
import teklifVer from '@/components/lawyer/teklifVer.vue'
  
  
  export default defineComponent({
    name: 'QuestionPoolCards',
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
        },
    components: { teklifVer },
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