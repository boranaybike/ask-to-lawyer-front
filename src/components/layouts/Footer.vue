<template>
    
      
        <v-footer class="bg-black " style="margin: -16px;">
    <v-row  ><v-col class="text-left mt-4" cols="3">
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-10"
        rounded="xl"
      >
        {{ link }}
      </v-btn></v-col><v-col class="text-left mt-4" >
      <v-btn
        v-for="link in links1"
        :key="link"
        color="white"
        variant="text"
        class="mx-10"
        
      >
        {{ link }}
      </v-btn></v-col>
      <v-col class="text-left mt-4" cols="3">
      <v-btn
        v-for="link in links2"
        :key="link"
        color="white"
        variant="text"
        class="mx-10"
        rounded="xl"
      >
        {{ link }}
      </v-btn></v-col>
      <v-col class="text-left mt-4" cols="3">
        <v-card max-width="344" style="background-color: transparent;">
    <v-card-item>
      <div>
        <div class="text-h6 text-center mr-16" style="color:orangered">
          avukata
        </div>
        <div class="text-h6 text-right mr-16 " style="color: aliceblue;">
          sordum
        </div>
        
      </div>
    </v-card-item>

    <v-card-actions>
     <div  style="padding-left: 100px;     color: aliceblue;" >
       <v-btn icon="mdi-facebook" size="x-small"></v-btn>
      <v-btn icon="mdi-instagram" size="x-small"></v-btn>
      <v-btn icon="mdi-twitter" size="x-small"></v-btn>
      <v-btn icon="mdi-linkedin" size="x-small"></v-btn>
      </div> 
    </v-card-actions>
  </v-card>
      </v-col>
      <v-col class="text-center mt-4" cols="12">

    <v-divider color="white"></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>AvukataSordum</strong>
    </div>  
  </v-col>
    </v-row>
  </v-footer>
      

  
</template>

<script lang="ts">
    export default{
      name: "Footer",
      data: () => ({
      links: [
        'Şirketimiz',
        'Hakkımızda',
        'Katıl',
        
        
      ],
      links1: [
        'Kaynaklar',
        'Gizlilik Politikası',
        'Şartlar ve Koşullar',
        
        
      ],
      links2: [
        'Katıl',
        'Avukat Olarak Katıl',
        'Danışan Olarak Katıl',
        
        
      ],
    }),
      
    };

    
</script>

<style scoped>
.v-footer {
  position: sticky;
  
  

  
}
</style>