import Vue from 'vue'
import VueComponent from './VueComponent';

import './styles'

// Vue.prototype.$http = http

new Vue({
  el: '#app',
  components: {
    VueComponent
  },

  template: `
    <div ref="page">
      <div>
        <vue-component></vue-component>
      </div>
    </div>
  `,
  methods: {
  }
})