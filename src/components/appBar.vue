<template>
  <v-app-bar app>
    <v-container class="py-0 fill-height">
      <v-app-bar-nav-icon
        ><v-icon>mdi-microsoft-bing</v-icon></v-app-bar-nav-icon
      >
      <v-toolbar-title>必应每日一图</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text><v-icon>mdi-calendar-search</v-icon></v-btn>
      <showMode></showMode>
    </v-container>
  </v-app-bar>
</template>

<script>
import showMode from "./showMode";
export default {
  components: {
    showMode,
  },
};
</script>
