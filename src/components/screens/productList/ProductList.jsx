import { useParams } from 'react-router-dom'
import styles from './ProductList.module.css'
import Product from '../../Product/Product'

const ProductList = (prop) => {
    const { category } = useParams() 
    //console.log(prop.prop.productList)
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>{category}</h1>
            <div className={styles.products}>
                {prop.prop.productList.filter(cat => cat.category === category).map(product =>
                    <Product key={'product' + product.id} prop={product}/>   
                )}
            </div>
        </div>
    )
}

export default ProductList