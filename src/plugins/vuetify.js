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

        menu_btn_1: "#3EA0D6",
        menu_btn_2: "#49CA89",
        menu_btn_3: "#BC5162",
        menu_btn_4: "#DB6352",
        menu_btn_5: "#7D2880",
        
        create_entry_btn: "#3EA0D6",
      },
    },
  },
});
