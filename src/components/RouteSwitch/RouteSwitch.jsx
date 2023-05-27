import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './RouteSwitch.module.css'
import Home from '../screens/home/Home'
import Shop from '../screens/shop/Shop'
import Contact from '../screens/contact/Contact'
import Cart from '../Cart/Cart'
import imgCart from '../../assets/img/cart-variant.svg'
import products from '../../products.json'

const RouteSwitch = () => {
  const [productList, setProductList] = useState(eval(products))
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
          {/* <Route path='/shop/:id' element={<Shop prop={{productList}}/>} /> */}
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteSwitch
