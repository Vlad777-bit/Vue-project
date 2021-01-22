import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import toolTipDirective from '@/directives/tooltip.directive'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.directive('tooltip', toolTipDirective)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyCQZpbM0u8q0Hm4brWhMMN4krT87UgU8_o",
  authDomain: "vue-project-crm-997b1.firebaseapp.com",
  projectId: "vue-project-crm-997b1",
  storageBucket: "vue-project-crm-997b1.appspot.com",
  messagingSenderId: "983058767144",
  appId: "1:983058767144:web:f5100ae37ac022e2bc441d",
  measurementId: "G-7ENF5WP4CY"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app') 
  }
})


