<template>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            
            v-bind="props"
          >
            Teklif Ver
          </v-btn>
        </template>
  
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

            Cem Karaca
          </div>
          <div style="display: flex; justify-content: left; font-size: 8px;">
            5 gün önce soruldu
          </div></v-sheet>
            </v-col>
          </v-row>
        
          <div style="display: flex; padding-left: 12px; font-size: 10px;">
            Ceza Hukuku
          </div>
          <div style="padding-left: 6px; font-size: 18px;" class="text-caption">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam? ”</div>
        </div>
      </v-card-item>
      <v-text-field
          label="Fiyat"
          model-value=""
          suffix="TL"
        ></v-text-field>
  
      <v-card-actions>
        <v-btn style="  color:white; font-size:10px; display: flex; justify-content: center;" rounded >
        Teklifi Gönder
      </v-btn>

      </v-card-actions>
    </v-card>
      </v-dialog>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.v-card-text{
    position: absolute;
    width: 376px;
    height: 24px;
    left: 45px;
    top: 81px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 24px;

    color: #000000;
}
.v-card-actions{
    text-align: right;
    height: 30px;
    top: 0px;
    position: relative;
    display: block;
}
.v-card {
  
  width: 400px;
  height: 220px;
  border-radius: 22px;
}

.v-avatar.v-avatar--size-default {
    justify-content: left;
    display: flex;
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