<template>
      

    <v-app-bar
      color="transparent"
    >
      <template v-slot:prepend>
        <router-link style="text-decoration: none;" to="/anasayfa"> <img width="170" style="margin-bottom: 15px; margin-left: 30px;" src="@/assets/images/libraa.png" />  </router-link>
      </template>

      <v-spacer></v-spacer>

    <v-btn icon color="white">
      <v-icon>mdi-message</v-icon>
    </v-btn>

    <v-btn icon color="white">
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-btn icon color="white">
      <v-icon >mdi-account</v-icon>
    </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
  export default{}
</script>