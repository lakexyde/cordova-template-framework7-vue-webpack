
// Import Vue
import Vue from 'vue'

// Import OnsenUI
import 'onsenui'

import VueOnsen from 'vue-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'


import App from './main.vue'

Vue.use(VueOnsen);

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  components: {
    app: App
  }
})
