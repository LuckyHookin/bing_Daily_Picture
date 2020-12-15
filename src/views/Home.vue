<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(item,index) in 7" :key="index">
        <v-card hover><v-img src="https://cn.bing.com/th?id=OHR.PineGrosbeak_ZH-CN9629000282_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"></v-img></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Bus from './../plugins/bus'
export default {
  data: () => ({
    date:'',
    pictList:["2","3"]
  }),
  methods: {

  },
  mounted () {
    Bus.$on("date",(value)=>{
      this.date=value
    })
  },
  watch: {
    date(newValue) {
      this.axios.post("api/dailyPict/getBingPictByMonth",{month:newValue})
    }
  },
};
</script>