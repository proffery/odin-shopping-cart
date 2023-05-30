import styles from './Cart.module.css'
import { useEffect } from 'react'
import uniqid from 'uniqid'
const Cart = (prop) => {

    const closeCart = () => {
        prop.closeCart()
    }

    const deleteFromCart = (e) => {
        prop.deleteFromCart(e.target.value)
    }

    useEffect(() => {
        prop.calculateTotalPrice()
    }, [prop])
    
    return (
        <div className={styles.container}>
            {prop.prop.itemsInCart.length > 0 && 
                <h3>Shopping Cart</h3>
            }
            {prop.prop.itemsInCart.map(product =>
                <div className={styles.item} key={'cartProd' + uniqid()}>
                    <div className={styles.left}>
                        <img className={styles.img} src={'/assets/img/products/prod' + product.id + '.jpg'} alt={product.title}/>
                        <div className={styles.description}>
                            <p>{product.title}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}$</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button>Buy</button>
                        <button className={styles.delete} value={product.id} onClick={deleteFromCart}>Delete</button>
                    </div>
                </div>
            )}
            {prop.prop.itemsInCart.length > 0 ? 
                <h4>Total price: {prop.prop.totalPrice}$</h4> :
                <h3>Cart is empty</h3>
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