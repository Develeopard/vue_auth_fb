import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAdum4VIQ-mmetDG9JxeZ5m6zB3dGXI8WQ",
    authDomain: "vue-ath-fb.firebaseapp.com",
    projectId: "vue-ath-fb",
    storageBucket: "vue-ath-fb.appspot.com",
    messagingSenderId: "695520185172",
    appId: "1:695520185172:web:5f7a438c87d51aaec596c1"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
