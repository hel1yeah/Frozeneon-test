import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import AppError from './components/UI/AppError.vue';
import AppLoader from './components/UI/AppLoader.vue';
import '@mdi/font/css/materialdesignicons.css';
import './assets/scss/main.scss';

Vue.config.productionTip = false;
Vue.component('AppError', AppError);
Vue.component('AppLoader', AppLoader);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
