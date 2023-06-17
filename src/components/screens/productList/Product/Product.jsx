import styles from './Product.module.css'
import cartImg from '../../../../assets/img/cart-variant.svg'
import cardImg from '../../../../assets/img/credit-card-outline.svg'
import Fade from 'react-reveal/Fade'
import Bounce from 'react-reveal/Bounce'

const Product = (prop) => {
    const addToCart = () => {
        prop.addToCart(prop.prop)
    }

    return (
        <div className={styles.container}>
            <Fade>
                <div className={styles.imgHolder}>
                    <img className={styles.img} src={prop.prop.url} alt={prop.prop.title}></img>
                </div>
            </Fade>
            <Fade top>
                <div className={styles.description}>
                    <div className={styles.left}>
                            <h4 className={styles.header}>
                        <Fade left cascade>
                            {prop.prop.title}
                        </Fade>
                            </h4>
                        <Fade right>
                            <p>{prop.prop.description}</p>
                        </Fade>
                        <Fade bottom>
                            <p>Price: {prop.prop.price}$</p>
                        </Fade>
                    </div>
                        <div className={styles.right}>
                            <Bounce bottom>
                                <div>
                                    <img className={styles.icon} src={cartImg} alt="cart" onClick={addToCart} />
                                </div>
                            </Bounce>
                            <Bounce right>
                                <div>
                                    <img className={styles.icon} src={cardImg} alt="card" />
                                </div>
                            </Bounce>
                        </div>
                </div>
            </Fade>
        </div>
    )
}

export default Product