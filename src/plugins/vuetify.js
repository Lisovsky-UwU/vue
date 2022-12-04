import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
    themes: {
      light: {
        primary: colors.green,
        background: "#8595BE",
        element_background: "#EDEff5",
        second: "#1D2E41",
        accent: colors.green.lighten5,
      },
    },
  },
});
