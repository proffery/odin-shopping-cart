import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './RouteSwitch.module.css'
import Home from '../screens/Home/Home'
import Shop from '../screens/Shop/Shop'
import Contact from '../screens/Contact/Contact'
import ProductList from '../screens/ProductList/ProductList'
import NotFound from '../screens/NotFound/NotFound'
import Cart from '../Cart/Cart'
import imgCart from '../../assets/img/cart-variant.svg'
import products from '../../products.json'

const RouteSwitch = () => {
  // eslint-disable-next-line no-unused-vars
  const [productList, setProductList] = useState(eval(products))
  // eslint-disable-next-line no-unused-vars
  const [itemsInCard, setItemsInCard] = useState([])
  const [cartVisibility, setCartVisibility] = useState('hidden')
  const openCard = () => {
    cartVisibility === 'hidden' ? setCartVisibility('visible') : setCartVisibility('hidden')
    
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
          <div className={styles.cart} onClick={openCard}>
            <img className={styles.cartImg} src={imgCart} alt='Cart'></img>
            {itemsInCard.length > 0 && (
              <div className={styles.cartNum}>{itemsInCard.length}</div>
            )}
            <div className={styles.bar} style={{
              visibility: cartVisibility,
            }}>
              <Cart onClick={openCard}/>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop prop={{productList}}/>} />
          <Route path='/shop/:category' element={<ProductList prop={{productList}}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteSwitch
