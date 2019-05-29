import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    let firebaseConfig = {
      apiKey: 'AIzaSyBzrVc2n9wc-_Zi6U8y2niokB4QUrekiM0',
      authDomain: 'javacourse-1.firebaseapp.com',
      databaseURL: 'https://javacourse-1.firebaseio.com',
      projectId: 'javacourse-1',
      storageBucket: 'javacourse-1.appspot.com',
      messagingSenderId: '632294768061',
      appId: '1:632294768061:web:f6af01201e089f32'
    }
    firebase.initializeApp(firebaseConfig)
  }
}).$mount('#app')
