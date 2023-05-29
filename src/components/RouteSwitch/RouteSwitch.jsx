import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './RouteSwitch.module.css'
import Home from '../screens/Home/Home'
import Shop from '../screens/Shop/Shop'
import Contact from '../screens/contact/Contact'
import ProductList from '../screens/ProductList/ProductList'
import NotFound from '../screens/NotFound/NotFound'
import Cart from '../Cart/Cart'
import imgCart from '../../assets/img/cart-variant.svg'
import products from '../../products.json'

const RouteSwitch = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState(eval(products))
  // eslint-disable-next-line no-unused-vars
  const [itemsInCart, setItemsInCart] = useState([])
  const [cartVisibility, setCartVisibility] = useState('scale(0)')

  const openCart = () => {
    cartVisibility === 'scale(0)' && setCartVisibility('scale(1)')
  }

  const closeCart = () => {
    cartVisibility === 'scale(1)' && setCartVisibility('scale(0)')
  }

  const addToCart = (item) => {
    setItemsInCart([...itemsInCart, item])
  }

  return (
    <>
      <BrowserRouter>
        <div className={styles.nav}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className={styles.cart} onClick={openCart}>
            <img className={styles.cartImg} src={imgCart} alt='Cart'></img>
            {itemsInCart.length > 0 && (
              <div className={styles.cartNum}>{itemsInCart.length}</div>
            )}
            <div className={styles.bar} style={{
              transform: cartVisibility,
            }}>
              <Cart prop={{itemsInCart}} closeCart={closeCart}/>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop prop={{productList}}/>} />
          <Route path='/shop/:category' element={<ProductList prop={{productList}} addToCart={addToCart}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteSwitch
