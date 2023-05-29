import styles from './Cart.module.css'
import { useEffect, useState } from 'react'
import uniqid from 'uniqid'
const Cart = (prop) => {
    const [totalPrice, setTotalPrice] = useState(0)

    const closeCart = () => {
        prop.closeCart()
    }

    useEffect(() => {
        setTotalPrice(0)
        prop.prop.itemsInCart.map(item => setTotalPrice(totalPrice + item.price))
    }, [prop.prop.itemsInCart])
    
    console.log(prop.prop.itemsInCart)
    return (
        <div className={styles.container}>
            {prop.prop.itemsInCart.map(product =>
                <div className={styles.item} key={'cartProd' + uniqid()}>
                    <img className={styles.img} src={'/assets/img/products/prod' + product.id + '.jpg'} alt={product.title}/>
                    <div className={styles.description}>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>Price: {product.price}$</p>
                    </div>
                    <div className={styles.buttons}>
                        <button>Buy</button>
                        <button>Delete</button>
                    </div>
                </div>
            )}
            {prop.prop.itemsInCart.length > 0 && 
                <h4>Total price: {totalPrice}$</h4>
            }
            <div>
                {prop.prop.itemsInCart.length > 0 && 
                    <button className={styles.button}>Buy all</button>
                }
                <button className={styles.button} onClick={closeCart}>Close</button>

            </div>
        </div>
    )
}

export default Cart