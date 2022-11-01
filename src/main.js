import Vue from 'vue'
 import Vuelidate from 'vuelidate'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
import router from './routers';

Vue.use(Vuelidate)





Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
