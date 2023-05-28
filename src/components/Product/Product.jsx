import styles from './Product.module.css'

const Product = (prop) => {
    console.log(prop.prop)

    return (
        <div className={styles.container}>
            <div className={styles.imgHolder}>
                <img className={styles.img} src={'/assets/img/products/prod' + prop.prop.id + '.jpg'} alt={prop.prop.title}></img>
            </div>
            <div className={styles.description}>
                <h4 className={styles.header}>{prop.prop.title}</h4>
                <p>{prop.prop.description}</p>
                <p>Price: {prop.prop.price}$</p>
            </div>
        </div>
    )
}

export default Product