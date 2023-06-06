import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitch from './components/RouteSwitch/RouteSwitch.jsx'
import './index.css'
import { initializeApp } from 'firebase/app'
import { getFirebaseConfig } from '../src/firebase/firebase-config.jsx'
import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'


function initFirebaseAuth() {
  // Subscribe to the user's signed-in status
  onAuthStateChanged(getAuth(), authStateObserver);
}

function authStateObserver(user) {
  if (user) {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouteSwitch />
      </React.StrictMode>
    )
  }
  else {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouteSwitch />
      </React.StrictMode>
    )
  }
}

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
initFirebaseAuth();