<template>
  <v-container>
    <v-card dark hover @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
      <v-img
        :src="pict.url"
        lazy-src="https://placehold.it/300x200/09f/fff.png?text=loading..."
      >
        <v-fade-transition>
          <div
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
                <v-btn color="primary" rounded small
                  ><v-icon>mdi-eye</v-icon></v-btn
                >
                <v-menu left offset-y v-model="showMenu" :close-on-content-click="false" :close-delay="200">
                  <template v-slot:activator="{ on, arrs }">
                    <v-btn icon  small v-on="on" v-bind="arrs"
                      ><v-icon color="white">mdi-copyright</v-icon></v-btn
                    >
                  </template>
                  <v-sheet class="px-2">
                    {{ getCopyright(pict.copyright) }}<v-icon small right @click="showMenu=false;link(pict.copyrightlink)">mdi-link</v-icon>
                  </v-sheet>
                </v-menu>
              </div>
            </div>
          </div>
        </v-fade-transition>
      </v-img>
    </v-card>
    <v-overlay :value="showOverlay">
      <v-container
        fluid
        style="width: 100vw; height: 100vh"
        @click="showOverlay = false"
      >
        <v-row>
          <v-card height="80" max-height="80vh">
            <v-img :src="pict.url"></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">headline</h3>
                <div>description</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="primary">text</v-btn>
              <v-btn flat color="primary">text</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-overlay>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      hasMouseInCard:false,
      showEye: false,
      showOverlay: false,
      showMenu: false,
    };
  },
  methods: {
    link(link) {
      window.open(link);
    },
    onMouseLeave() {
      console.log("out");
      this.hasMouseInCard=false;
        this.showEye = this.showMenu;
    },
    onMouseEnter(){
      console.log("in");
      this.hasMouseInCard=true;
      this.showEye = true;
    },
    getTitle(value = "") {
      let lastIndex = value.indexOf("(©");
      return value.slice(0, lastIndex);
    },
    getCopyright(value = "") {
      let firstIndex = value.indexOf("(©");
      return value.slice(firstIndex+1,-1);
    },
  },
  watch: {
    showMenu(newValue) {
      if (newValue==false&&this.hasMouseInCard==false) {
        this.showEye = false;
      }
    },
  },
  props: {
    pict: Object,
  },
};
</script>
