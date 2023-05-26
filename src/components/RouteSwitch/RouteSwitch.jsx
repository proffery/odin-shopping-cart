import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import styles from './RouteSwitch.module.css'
import Home from '../screens/home/Home'
import Shop from '../screens/shop/Shop'
import Contact from '../screens/contact/Contact'
import Cart from '../Cart/Cart'
import imgCart from '../../assets/img/cart-variant.svg'
import { useState } from 'react'

const RouteSwitch = () => {
  const [itemsInCard, setItemsInCard] = useState(0)
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
            {itemsInCard > 0 && (
              <div className={styles.cartNum}>{itemsInCard}</div>
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
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouteSwitch
