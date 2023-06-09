import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './RouteSwitch.module.css'
import './ActiveLink.css'
import Home from '../screens/Home/Home'
import Shop from '../screens/Shop/Shop'
import Contact from '../screens/contact/Contact'
import ProductList from '../screens/productList/ProductList'
import NotFound from '../screens/NotFound/NotFound'
import Admin from '../screens/Admin/Admin'
import Cart from './Cart/Cart'
import imgCart from '../../assets/img/cart-variant.svg'
import { Fade } from 'react-reveal'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { doc, getDoc, getFirestore} from "firebase/firestore"; 

const RouteSwitch = (prop) => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState(prop.prop.loadedData)
  const [itemsInCart, setItemsInCart] = useState([])
  const [cartVisibility, setCartVisibility] = useState('hidden')
  const [signInStatus, setSignInStatus] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [searchInput, setSearchInput] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)
  
  const getAdminEmail = async() => {    
    return (await getDoc(doc(getFirestore(), 'admin', 'email'))).data().email
  }
  
  useEffect(() => {
    prop.authStateChanged()
  }, [signInStatus, isAdmin])
  
  async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider)
    .then(setSignInStatus(!!getAuth().currentUser))
    .then(await getAdminEmail() === prop.prop.currentUser.email ? setIsAdmin(true) : setIsAdmin(false))
  }
  
  async function signOutUser() {
    // Sign out of Firebase.
    await signOut(getAuth())
    .then(setSignInStatus(!!getAuth().currentUser))
    .then(await getAdminEmail() === prop.prop.user.email ? setIsAdmin(true) : setIsAdmin(false))
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
  
  const saveForm = (formData) => {
    prop.saveForm(formData)
  }

  const setToDefault = () => {
    prop.setToDefault()
  }

  const deleteProduct = (id) => {
    prop.deleteProduct(id)
  }

  const sliderChange = () => {
    isAdmin ? setIsAdmin(false) : setIsAdmin(true)
  }
  return (
    <>
      <HashRouter>
        <div className={styles.nav}>
          <ul className={styles.links}>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/shop'>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            {isAdmin && (
              <li>
                <NavLink to='/admin'>Admin</NavLink>
              </li>
            )}
          </ul>
          <div className={styles.search}>
            <input type='text' placeholder='Search here' className={styles.input} value={searchInput} onChange={searchChange}></input>
          </div>
          {signInStatus ? (
            <div className={styles.userContainer}>
              <div className={styles.userInfo}>
                <img className={styles.userImg} src={getProfilePicUrl()} alt='User photo' />
                <p>{getUserName()}</p>
              </div>
              <button onClick={signOutUser}>Exit</button>
            </div>
            ) : (
            <div className={styles.userContainer}>
              <button onClick={signIn}>Sign in</button>
            </div>
          )}
          <div className={styles.demo}>
            <label htmlFor='demo'>DEMO</label>
            <label className={styles.switch}>
              <input className={styles.slider + '-input'} id='demo' type="checkbox" checked={isAdmin} onChange={sliderChange}/>
              <span className={styles.slider + ' ' + styles.round}></span>
            </label>
          </div>
          <div className={styles.cart} onClick={openCart}>
            <img className={styles.cartImg} src={imgCart} alt='Cart'></img>
            {itemsInCart.length > 0 && (
              <div className={styles.cartNum}>{itemsInCart.length}</div>
            )}
            <Fade right when={cartVisibility === 'visible'}>
              <div className={styles.bar} style={{
                visibility: cartVisibility,
              }}>
                <Cart prop={{itemsInCart, totalPrice}} closeCart={closeCart} deleteFromCart={deleteFromCart} calculateTotalPrice={calculateTotalPrice}/>
              </div>
            </Fade>
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
              {isAdmin && (
                <Route path='/Admin' element={<Admin prop={{productList}} saveForm={saveForm} setToDefault={setToDefault} deleteProduct={deleteProduct}/>} />
              )}
              <Route path='*' element={<NotFound />} />
            </Routes>
          )
        }
      </HashRouter>
    </>
  )
}

export default RouteSwitch
