<template>
    <v-card
      class="mx-auto"
      max-width="444"
      background-color= "#E7ECEF"
    >
    <div class="state">Ödeme Yapıldı Cevap Bekleniyor</div>
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
          <div style="display: flex; justify-content: left; font-size: 10px;">
            5 gün önce soruldu   150 ₺
          </div></v-sheet>
            </v-col>
          </v-row>
        
          <div style="padding-left: 6px; font-size: 18px;" class="text-caption">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam? ”</div>
        </div>
      </v-card-item>
  
      <v-card-actions>
        <v-btn color="white" rounded >
          Cevap ver
      </v-btn>

      </v-card-actions>
    </v-card>
  </template>


<script>
  export default {}
</script>

<style lang="scss" scoped>

.v-card {
  position: relative;
  overflow: visible;
  width: 350px;
  height: 235px;
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
    background: #9BA9B9;;
}
.state{
    padding: 1%;
    background-color: #EC4C0F;
    color:white;
    border-radius: 20px;
    width: 300px;
    display: flex;
    justify-content: center;
    margin: auto;
    top:-10px;
    position: inherit;
}
</style>