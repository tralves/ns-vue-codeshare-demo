import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools)

import HelloWorld from './components/HelloWorld'

import './styles'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production'

new Vue({
  render: h => h('frame', [h(HelloWorld)]),
}).$start()
