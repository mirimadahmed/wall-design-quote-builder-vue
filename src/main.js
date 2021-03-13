import Vue from 'vue'
import App from './App.vue'
import VueResizeText from 'vue-resize-text';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResizeText)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
