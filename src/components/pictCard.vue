<template>
  <v-container>
    <v-card
      dark
      hover
      @mouseleave="onMouseLeave"
      @mouseenter="$vuetify.breakpoint.mdAndUp ? onMouseEnter() : false"
      @click="showEye = true"
    >
      <v-img class="blue-grey lighten-4" :aspect-ratio="16 / 9" :src="pict.url">
        <template v-slot:placeholder>
          <v-row justify="center" align="center" style="height: 100%">
            <v-icon size="60">mdi-white-balance-sunny mdi-spin</v-icon>
          </v-row>
        </template>

        <v-fade-transition>
          <div
            @click.stop="showOverlay = !showMenu"
            v-if="showEye"
            style="background-color: #00000055; height: 100%"
            class="pa-4 white--text"
          >
            <div
              class="d-flex flex-column justify-space-between"
              style="height: 100%"
            >
              <div>
                {{ getTitle(pict.copyright) }}
                <div>
                  {{ new Date(pict.date).toLocaleDateString() }}
                </div>
              </div>
              <div class="d-flex justify-space-between">
                <div>
                  <v-btn
                    color="primary"
                    rounded
                    small
                    @click.stop="showOverlay = true"
                    ><v-icon>mdi-eye</v-icon></v-btn
                  >
                </div>
                <v-menu
                  left
                  offset-y
                  v-model="showMenu"
                  :close-on-content-click="false"
                  :close-delay="200"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon small v-on="on" v-bind="attrs"
                      ><v-icon color="white">mdi-copyright</v-icon></v-btn
                    >
                  </template>
                  <v-sheet class="px-2">
                    {{ getCopyright(pict.copyright)
                    }}<v-icon
                      small
                      right
                      @click="
                        showMenu = false;
                        link(pict.copyrightlink);
                      "
                      >mdi-link</v-icon
                    >
                  </v-sheet>
                </v-menu>
              </div>
            </div>
          </div>
        </v-fade-transition>
      </v-img>
    </v-card>
    <v-overlay :value="showOverlay">
      <v-container fluid @click="showOverlay = false">
        <v-row style="width: 100vw; height: 100vh">
          <v-col align-self="center">
            <v-card>
              <v-img
                class="blue-grey lighten-4"
                :aspect-ratio="16 / 9"
                :src="pict.url"
                max-height="90vh"
              >
                <template v-slot:placeholder>
                  <v-row justify="center" align="center" style="height: 100%">
                    <v-icon size="60">mdi-white-balance-sunny mdi-spin</v-icon>
                  </v-row>
                </template>
              </v-img>
              <v-card-actions>
                <v-btn
                  dark
                  color="primary"
                  small
                  class="mr-2"
                  @click="download(pict.url, pict.date)"
                  ><v-icon color="white" left>mdi-file-download</v-icon
                  >全高清下载</v-btn
                >
                <v-btn
                  dark
                  color="primary"
                  small
                  class="ml-2"
                  @click="download(pict.uhdurl, pict.date)"
                  ><v-icon color="white" left>mdi-file-download</v-icon
                  >超高清下载</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-overlay>
    <v-snackbar app v-model="showSnackbar" color="primary">请稍等……</v-snackbar>
  </v-container>
</template>

<script>
// import JsFileDownloader from "js-file-downloader";
import FileSaver from 'file-saver';
export default {
  data() {
    return {
      hasMouseInCard: false,
      showEye: false,
      showOverlay: false,
      showMenu: false,
      showSnackbar:false,
    };
  },
  methods: {
    link(link) {
      window.open(link);
    },
    onMouseLeave() {
      // console.log("out");
      this.hasMouseInCard = false;
      this.showEye = this.showMenu;
    },
    onMouseEnter() {
      // console.log("in");
      this.hasMouseInCard = true;
      this.showEye = true;
    },
    getTitle(value = "") {
      let lastIndex = value.indexOf("(©");
      return value.slice(0, lastIndex);
    },
    getCopyright(value = "") {
      let firstIndex = value.indexOf("(©");
      return value.slice(firstIndex + 1, -1);
    },
    download(url, date) {
      this.showSnackbar=true;
      // new JsFileDownloader({
      //   url,
      //   filename: new Date(date).toLocaleDateString() + "_Bing.jpg",
      // }).then(()=>{
      //   this.showSnackbar=false;
      // });
      FileSaver.saveAs(url, new Date(date).toLocaleDateString() + "_Bing.jpg");
      setTimeout(() => {
        this.showSnackbar=false;
      }, 2000);
    },
  },
  watch: {
    showMenu(newValue) {
      if (newValue == false && this.hasMouseInCard == false) {
        this.showEye = false;
      }
    },
  },
  props: {
    pict: Object,
  },
};
</script>
