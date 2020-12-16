<template>
  <v-card
    hover
    @mouseleave="showEye = false"
    @mouseenter="showEye = true"
    v-ripple
  >
    <v-img
      :gradient="showEye ? 'to top, #FFFFFF00, rgba(25,32,72,.8)' : ''"
      :src="pict.url"
      lazy-src="http://placehold.it/300x200/09f/fff.png?text=loading..."
    >
    <div v-show="showEye" style="height: 100%">
        <div
        
          class="d-flex flex-column justify-space-between align-center pa-4"
          style="height: 100%"
        >
          <div class="white--text">
            {{ pict.copyright }}
            <v-btn icon color="white" @click="link(pict.copyrightlink)"
              ><v-icon>mdi-link</v-icon></v-btn
            >
          </div>
          <div>
              
              <v-btn color="primary" rounded><v-icon>mdi-eye</v-icon></v-btn>
            </div>
          
        </div>
        </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showEye: false,
    };
  },
  methods: {
    link(link) {
      window.open(link);
    },
  },
  props: {
    // JSON 配置
    pict: Object,
  },
};
</script>
