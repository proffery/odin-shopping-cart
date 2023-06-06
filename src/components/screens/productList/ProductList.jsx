import { useParams } from 'react-router-dom'
import styles from './ProductList.module.css'
import Product from '../../Product/Product'
import Fade from 'react-reveal/Fade'

const ProductList = (prop) => {
    const { category } = useParams() 
    const addToCart = (item) => {
        prop.addToCart(item)
    }
    
    return (
        <div className={styles.container}>
            {prop.prop.searchInput.length === 0 ?(
                    <h1 className={styles.header}><Fade right cascade>{category}</Fade></h1>
                ) : (
                    <h1 className={styles.header}><Fade right cascade>Search results</Fade></h1>
                )
            }
            <div className={styles.products}>
                {prop.prop.searchInput.length === 0 ? (
                    prop.prop.productList.filter(item => item.category === category).map(product =>
                        <Product key={'product' + product.id} prop={product} addToCart={addToCart}/>)
                ) : (
                        prop.prop.productList.filter(item => item.title.toLowerCase().match(prop.prop.searchInput.toLowerCase())).map(product =>
                        <Product key={'product' + product.id} prop={product} addToCart={addToCart}/>)
                    )
                }
            </div>
        </div>
    )
}

export default ProductList