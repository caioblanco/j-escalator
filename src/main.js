import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/custom.scss'

Vue.config.productionTip = false

import {
  CardPlugin,
  LayoutPlugin,
  ButtonPlugin,
  FormCheckboxPlugin
} from 'bootstrap-vue'
Vue.use(CardPlugin)
Vue.use(LayoutPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormCheckboxPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')