import Vue from 'vue'
import App from './App.vue'
import VueResizeText from 'vue-resize-text';
import VueHtmlToPaper from 'vue-html-to-paper';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueResizeText)

Vue.config.productionTip = false


const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://quote-builder.mirimad.com/style.css'
  ]
}

Vue.use(VueHtmlToPaper, options);

new Vue({
  render: h => h(App),
}).$mount('#app')
