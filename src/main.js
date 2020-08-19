// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import firebase from 'firebase/app'
import vueResource from 'vue-resource'

Vue.use(vueResource)
Vue.prototype.$axios= axios
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCfRrfg3GGaRrvBu3RHidK-X099zAcmDK0",
  authDomain: "mydiary-83817.firebaseapp.com",
  databaseURL: "https://mydiary-83817.firebaseio.com",
  projectId: "mydiary-83817",
  storageBucket: "mydiary-83817.appspot.com",
  messagingSenderId: "888987802407",
  appId: "1:888987802407:web:6a2d2f96e4a97776466702",
  measurementId: "G-790GJPC0SC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



/* eslint-disable */ 
// eslint-disable-next-line
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
