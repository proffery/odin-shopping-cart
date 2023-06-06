import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './RouteSwitch.module.css'
import './ActiveLink.css'
import Home from '../screens/Home/Home'
import Shop from '../screens/Shop/Shop'
import Contact from '../screens/contact/Contact'
import ProductList from '../screens/productList/ProductList'
import NotFound from '../screens/NotFound/NotFound'
import Cart from '../Cart/Cart'
import imgCart from '../../assets/img/cart-variant.svg'
import products from '../../products.json'
import { Fade } from 'react-reveal'
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

import { initializeApp } from 'firebase/app'
import { getFirebaseConfig } from '../../firebase/firebase-config'

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

const RouteSwitch = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState(eval(products))
  // eslint-disable-next-line no-unused-vars
  const [itemsInCart, setItemsInCart] = useState([])
  const [cartVisibility, setCartVisibility] = useState('hidden')
  //const [signInVisibility, setSignInVisibility] = useState('visible')
  //const [signOutVisibility, setSignOutVisibility] = useState('hidden')
  const [totalPrice, setTotalPrice] = useState(0)
  const [searchInput, setSearchInput] = useState('')
  
  useEffect(() => {

}, [onAuthStateChanged])

  async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider)
      .then(console.log(getAuth().currentUser.displayName + ' is in'))
  }

  function signOutUser() {
    // Sign out of Firebase.
    console.log(getAuth().currentUser.displayName + ' is out')
    signOut(getAuth());
  }

  function isUserSignedIn() {
    // Return true if a user is signed-in.
    return !!getAuth().currentUser;
  }

  function getUserName() {
    // Return the user's display name.
    return getAuth().currentUser.displayName;
  }

  function getProfilePicUrl() {
    // Return the user's profile pic URL.
    return getAuth().currentUser.photoURL ||'/assets/img/category/default-category.svg';
  }

  const searchChange = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
  }

  const openCart = () => {
    cartVisibility === 'hidden' && setCartVisibility('visible')
  }

  const closeCart = () => {
    cartVisibility === 'visible' && setCartVisibility('hidden')
  }

  // const openCloseCart = () => {
  //   cartVisibility === 'hidden' ? setCartVisibility('visible') : setCartVisibility('hidden')
  // }

  const addToCart = (product) => {
    setItemsInCart([...itemsInCart, product])
    calculateTotalPrice()
  }

  const deleteFromCart = (id) => {
    const index = itemsInCart.findIndex((item) => item.id === parseFloat(id))
    if (index !== -1) {
      const updatedData = [...itemsInCart]
      updatedData.splice(index, 1)
      setItemsInCart(updatedData)
    }
    calculateTotalPrice()
  }

  const calculateTotalPrice = () => {
    setTotalPrice(0)
    itemsInCart.forEach(element => {
      setTotalPrice(prev => prev + element.price)
    })
  }

  return (
    <>
      <HashRouter>
        <div className={styles.nav}>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
          <input type='text' placeholder='Search here' className={styles.search} value={searchInput} onChange={searchChange}></input>
            {isUserSignedIn() ? (
              <div className={styles.userContainer}>
                <div className={styles.userInfo}>
                  <img className={styles.userImg} src={getProfilePicUrl()} alt='User photo' />
                  <h4>{getUserName()}</h4>
                </div>
                <button onClick={signOutUser}>Sign out</button>
              </div>
              ) : (
              <div className={styles.userContainer}>
                <button onClick={signIn}>Sign in</button>
              </div>
            )}
            
            <div className={styles.cart} onClick={openCart}>
            <img className={styles.cartImg} src={imgCart} alt='Cart'></img>
            {itemsInCart.length > 0 && (
              <div className={styles.cartNum}>{itemsInCart.length}</div>
            )}
                <div className={styles.bar} style={{
                  visibility: cartVisibility,
                }}>
                    <Fade right when={cartVisibility === 'visible'}>
                      <Cart prop={{itemsInCart, totalPrice}} closeCart={closeCart} deleteFromCart={deleteFromCart} calculateTotalPrice={calculateTotalPrice}/>
                    </Fade>
                </div>
          </div>
        </div>
        {searchInput.length > 0 ? 
          ( 
            <ProductList prop={{productList, searchInput}} addToCart={addToCart}/>
          ) : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop prop={{productList}}/>} />
              <Route path='/shop/:category' element={<ProductList prop={{productList, searchInput}} addToCart={addToCart}/>} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          )
        }
      </HashRouter>
    </>
  )
}

export default RouteSwitch
