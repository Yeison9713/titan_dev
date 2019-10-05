import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import Vuefirebase from "firebase";
Vue.use(Vuefirebase);

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import {messages} from 'vue-bootstrap4-calendar';

window.i18n = new VueI18n({
  locale: 'es',
  messages
});

Vue.config.productionTip = false
new Vue({
  router,
  store,
  VueI18n,
  render: h => h(App)
}).$mount('#app')
