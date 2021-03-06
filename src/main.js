import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import './assets/css/index.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false
Vue.use(ViewUI);

new Vue({
  router,
  store,
  vuetify,
  el: '#app',
  render: h => h(App)
}).$mount('#app')




