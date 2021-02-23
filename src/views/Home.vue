<template>
  <v-container>
    <v-row v-if="!pictList">
      <v-col cols="12" sm="6" md="4" v-for="(item, index) in 9" :key="index">
        <v-skeleton-loader type="image"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="(item, index) in pictList"
        :key="index"
      >
        <pictCard :pict="item"></pictCard>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-tooltip color="success" top v-model="showStarTip">
          <template v-slot:activator="{}">
            <v-btn @click="onStar" rounded color="primary">
              <v-icon left>mdi-heart-circle</v-icon>
              赞 {{ star }}
            </v-btn>
          </template>
          <span>👌 感谢鼓励~</span>
        </v-tooltip>
      </v-col>
      <v-col>
        <div class="text-right">
          仅提供检索服务.
          <v-btn color="info" text @click="link('//hookin.fun')"
            ><v-icon left>mdi-home</v-icon>我的小破站</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Bus from "./../plugins/bus";
import pictCard from "./../components/pictCard";
export default {
  components: {
    pictCard,
  },
  data: () => ({
    date: "",
    pictList: null,
    showEye: [],
    star: 0,
    showStarTip: false,
  }),
  methods: {
    link(e) {
      window.open(e);
    },
    onStar() {
      this.axios.get("index/setStar").then(() => {
        // console.log(response);
      });
      this.star += 1;
      if (this.showStarTip == true) return true;
      this.showStarTip = true;
      setTimeout(() => {
        this.showStarTip = false;
      }, 2000);
    },
  },
  mounted() {
    Bus.$on("date", (value) => {
      this.date = value;
    });
  },
  watch: {
    date(newValue) {
      this.axios
        .get("dailyPict/getBingPictByMounth", { params: { date: newValue } })
        .then((e) => {
          this.pictList = e.data.list;
        });
    },
  },
  created() {
    this.axios.get("index/getStar").then((response) => {
      // console.log(response);
      this.star = response.data.star;
    });
  },
};
</script>