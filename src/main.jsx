import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitch from './components/RouteSwitch/RouteSwitch.jsx'
import './index.css'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, setDoc, doc, updateDoc, getDocs } from 'firebase/firestore/lite';
import { getFirebaseConfig } from '../src/firebase/firebase-config.jsx'
import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'
import products from './products.json'


function initFirebaseAuth() {
  // Subscribe to the user's signed-in status
  onAuthStateChanged(getAuth(), authStateObserver);
}

const authStateChanged = () => {
  authStateObserver
}

function defaultData(db) {
  db.map(async(data) => {
    try {
      await setDoc(doc(getFirestore(), 'products', `${data.id}`), {data})
        .then(console.log('Database is set to default!'));
      }
    catch(error) {
      console.error('Error set to default Firebase Database', error);
    }
  })
}

async function saveData(data) {
  try {
    await updateDoc(doc(getFirestore(), 'products', `${data.id}`), {data})
    .then(console.log('Database seved!'));
  }
  catch(error) {
    console.error('Error save to Firebase Database!', error)
  }
}

async function loadData() {
  let loadedData = []
  const querySnapshot = await getDocs(collection(getFirestore(), 'products'))
  querySnapshot.forEach((doc) => {
    loadedData.push(doc.data().data)
  })
  console.log('Database loaded!')
  return loadedData
}



async function authStateObserver(user) {
  const loadedData = await loadData()
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouteSwitch prop={{user, loadedData}} authStateChanged={authStateChanged} />
    </React.StrictMode>
  )
}

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);
initFirebaseAuth();
//defaultData(products)
// saveData({
//       "id": 3,
//       "title": "e-book",
//       "description": "Kindle reader",
//       "category": "electronics",
//       "price": 183
//     })
//loadData()
//console.log(products)



