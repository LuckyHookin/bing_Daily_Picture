<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(item,index) in pictList" :key="index">
        <pictCard :pict="item"></pictCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Bus from './../plugins/bus'
import pictCard from './../components/pictCard'
export default {
  components: {
    pictCard,
  },
  data: () => ({
    date:'',
    pictList:null,
    showEye:[]
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