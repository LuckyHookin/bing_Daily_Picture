<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(item,index) in pictList" :key="index">
        <v-card hover><v-img :src="item.url">
        </v-img>
        <v-card-subtitle @click="link(item.copyrightlink)">{{item.copyright}} <v-icon>mdi-link</v-icon></v-card-subtitle>
        </v-card>
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
    link(e) {
      window.open(e)
    }
  },
  mounted () {
    Bus.$on("date",(value)=>{
      this.date=value
    })
  },
  watch: {
    date(newValue) {
      this.axios.get("dailyPict/getBingPictByMounth",{params:{date:newValue}}).then((e)=>{
        this.pictList=e.data.list
      })
    }
  },
};
</script>