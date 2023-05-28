import styles from './Product.module.css'
import cartImg from '../../assets/img/cart-variant.svg'
import cardImg from '../../assets/img/credit-card-outline.svg'
const Product = (prop) => {
    console.log(prop.prop)

    return (
        <div className={styles.container}>
            <div className={styles.imgHolder}>
                <img className={styles.img} src={'/assets/img/products/prod' + prop.prop.id + '.jpg'} alt={prop.prop.title}></img>
            </div>
            <div className={styles.description}>
                <div className={styles.left}>
                    <h4 className={styles.header}>{prop.prop.title}</h4>
                    <p>{prop.prop.description}</p>
                    <p>Price: {prop.prop.price}$</p>
                </div>
                <div className={styles.right}>
                    <div>
                        <img className={styles.icon} src={cartImg} alt="cart" />
                    </div>
                    <div>
                        <img className={styles.icon} src={cardImg} alt="card" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product