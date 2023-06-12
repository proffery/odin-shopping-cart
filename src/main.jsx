import React from 'react'
import ReactDOM from 'react-dom/client'
import RouteSwitch from './components/RouteSwitch/RouteSwitch.jsx'
import './index.css'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, setDoc, doc, getDocs, deleteDoc } from 'firebase/firestore/lite'
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
    .then(console.log('Database edited!'))

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

async function setToDefault() {
  const allData = await loadData()
  allData.forEach((doc) => {deleteProduct(doc.id)})
  saveAllData(products)
  console.log('Database set to default!')
}

async function deleteProduct(id) {
  await deleteDoc(doc(getFirestore(), 'products', `${id}`))
  .then(console.log(`Id: ${id} removed!`))
}

async function authStateObserver(user) {
  const loadedData = await loadData()
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouteSwitch prop={{user, loadedData}} authStateChanged={authStateChanged} saveForm={saveData} setToDefault={setToDefault} deleteProduct={deleteProduct}/>
    </React.StrictMode>
  )
}

const firebaseAppConfig = getFirebaseConfig()
initializeApp(firebaseAppConfig)
initFirebaseAuth()



