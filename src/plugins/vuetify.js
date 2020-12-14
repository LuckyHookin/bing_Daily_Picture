import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
import zhHans from 'vuetify/es5/locale/zh-Hans'
import colors from 'vuetify/lib/util/colors'

export default new Vuetify({
  theme: {
    themes: {
      light: {
        mainbg:colors.blueGrey.lighten5,
      },
      dark:{
        mainbg:colors.blueGrey.darken4,
      }
    },
  },
  lang: {
    locales: { zhHans },
    current: 'zhHans',
  },
});
