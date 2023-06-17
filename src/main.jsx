import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitch from './components/RouteSwitch/RouteSwitch.jsx'
import './index.css'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
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

function saveAllData(db) {
  db.map(async(data) => {
    try {
      await setDoc(doc(getFirestore(), 'products', `${data.id}`), {data})
      .then(console.log('Database saved!'))
    }
    catch(error) {
      console.error('Error save to Firebase Database!', error)
    }
  })
  
}

async function saveData(data) {
  try {
    await setDoc(doc(getFirestore(), 'products', `${data.id}`), {data})
    .then(console.log('Database edited!')).then(loadData())

  }
  catch(error) {
    console.error('Error save to Firebase Database!', error)
  }
}

async function loadData() {
  let loadedData = []
  const unsubscribe = onSnapshot(collection(getFirestore(), 'products'), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      loadedData.push(doc.data().data)
    })
    console.log('Database loaded!')
    const currentUser = getAuth().currentUser
    //const currentUser = localStorage.getItem('user')
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouteSwitch prop={{currentUser, loadedData}} authStateChanged={authStateChanged} saveForm={saveData} setToDefault={setToDefault} deleteProduct={deleteProduct}/>
      </React.StrictMode>
    )
  })
  return loadedData
}

async function setToDefault() {
  saveAllData(products)
  console.log('Database set to default!')
  await loadData()
}

async function deleteProduct(id) {
  await deleteDoc(doc(getFirestore(), 'products', `${id}`))
  .then(console.log(`Id: ${id} removed!`)).then(loadData())
}

async function authStateObserver(user) {
  const loadedData = await loadData()
  const currentUser = user
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouteSwitch prop={{currentUser, loadedData}} authStateChanged={authStateChanged} saveForm={saveData} setToDefault={setToDefault} deleteProduct={deleteProduct}/>
    </React.StrictMode>
  )
}

const firebaseAppConfig = getFirebaseConfig()
initializeApp(firebaseAppConfig)
initFirebaseAuth()



