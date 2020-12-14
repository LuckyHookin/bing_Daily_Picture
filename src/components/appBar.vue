<template>
  <v-app-bar app>
    <v-container class="pa-0 fill-height">
      <v-app-bar-nav-icon
        ><v-icon>mdi-microsoft-bing</v-icon></v-app-bar-nav-icon
      >
      <v-toolbar-title class="pl-2">必应壁纸集</v-toolbar-title>
      <v-spacer></v-spacer>

      
      <v-menu open-on-hover offset-y :close-on-content-click="false" close-delay="200">
      <template v-slot:activator="{ on, attrs }">
        <v-btn small color="primary" outlined v-bind="attrs" v-on="on"><v-icon left>mdi-calendar-search</v-icon>{{date.toString()}}</v-btn>
      </template>
    <v-date-picker
      v-model="date"
      type="month"
      min="2020-12"
    ></v-date-picker>
    </v-menu>
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
  data() {
      return {
          date: "",
      }
  },
  created () {
      let thisDate=new Date();
      this.date=thisDate.getUTCFullYear()+"-"+(thisDate.getUTCMonth()+1);
  },
  watch: {
      date(newValue) {
          newValue;
          
      }
  },
};
</script>
