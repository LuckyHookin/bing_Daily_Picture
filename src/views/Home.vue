<template>
  <v-container>
    <v-row v-if="!pictList">
      <v-col cols="12" sm="6" md="4" v-for="(item,index) in 9" :key="index">
        <v-skeleton-loader type="image"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" sm="6" md="4" v-for="(item,index) in pictList" :key="index">
        <pictCard :pict="item"></pictCard>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div class="float-right">仅提供检索服务. <v-btn color="info" text @click="link('//hookin.fun')"><v-icon left>mdi-home</v-icon>我的小破招</v-btn></div>
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