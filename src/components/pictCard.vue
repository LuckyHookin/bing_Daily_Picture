<template>
  <v-container>
    <v-card dark hover @mouseleave="onMouseLeave" @mouseenter="showEye = true">
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
                {{ pict.copyright }}
                {{ new Date(pict.date).toLocaleDateString() }}
              </div>
              <div class="d-flex justify-space-between">
                <v-btn color="primary" rounded small
                  ><v-icon>mdi-eye</v-icon></v-btn
                >
                <v-menu v-model="showMenu" top offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" small
                      ><v-icon color="white">mdi-link</v-icon></v-btn
                    >
                  </template>

                  <v-list>
                    <v-list-item v-for="(item, index) in 3" :key="index">
                      <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
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
      setTimeout(() => {
        this.showEye = this.showMenu;
      }, 200);
    },
  },
  watch: {
    showMenu(newValue) {
      if (newValue==false) {
        this.showEye=false
      }
    }
  },
  props: {
    // JSON 配置
    pict: Object,
  },
};
</script>
