import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/lib/components';

Vue.use(Vuetify);

const opts = {
  icons: {
    iconfont: 'mdi',
  },
};

export default new Vuetify(opts);
