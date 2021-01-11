<template>
  <v-app-bar app>
    <v-container class="pa-0 fill-height">
      <v-app-bar-nav-icon
        ><v-icon>mdi-microsoft-bing</v-icon></v-app-bar-nav-icon
      >
      <v-toolbar-title class="pl-2">必应壁纸集</v-toolbar-title>
      <v-spacer></v-spacer>

      
      <v-menu v-model="showMenu" offset-y :close-on-content-click="false">
      <template v-slot:activator="{ attrs,on }">
        <v-btn small color="primary" v-on="on" v-bind="attrs"><v-icon left>mdi-calendar-search</v-icon>{{date.toString()}}</v-btn>
      </template>
    <v-date-picker
      v-model="date"
      type="month"
      min="2020-12"
      :max="new Date().getUTCFullYear()+'-'+(new Date().getUTCMonth()+1)"
      @input="showMenu=false"
    ></v-date-picker>
    </v-menu>
      <showMode></showMode>
    </v-container>
    
  </v-app-bar>
  
</template>

<script>
import showMode from "./showMode";
import Bus from './../plugins/bus'
export default {
  components: {
    showMode,
  },
  data() {
      return {
          date: "",
          showMenu:false,
      }
  },
  created () {
      let thisDate=new Date();
      this.date=thisDate.getUTCFullYear()+"-"+(thisDate.getUTCMonth()+1);
  },
  watch: {
      date(newValue) {
          Bus.$emit("date",newValue);
      }
  },
};
</script>
