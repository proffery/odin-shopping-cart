const config = {
    apiKey: "AIzaSyBWNfFXqZN_MB9T5Y0VJrwN3JdR3qscizo",
    authDomain: "shopping-cart-c1357.firebaseapp.com",
    projectId: "shopping-cart-c1357",
    storageBucket: "shopping-cart-c1357.appspot.com",
    messagingSenderId: "1015872791678",
    appId: "1:1015872791678:web:47b4063f84610ff29ee42f",
    measurementId: "G-H2B3M70GGQ"
  };
  
  export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return config;
    }
  }