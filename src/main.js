import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDYzTdU2RQik0ulDZ0akGp9yI888u47EOw",
  authDomain: "healthly-2600f.firebaseapp.com",
  databaseURL: "https://healthly-2600f.firebaseio.com",
  projectId: "healthly-2600f",
  storageBucket: "healthly-2600f.appspot.com",
  messagingSenderId: "43984894597",
  appId: "1:43984894597:web:407ceebf64c17a8d1e47ec"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
