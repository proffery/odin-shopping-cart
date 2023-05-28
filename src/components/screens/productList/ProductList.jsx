import { useParams } from 'react-router-dom'
import styles from './ProductList.module.css'

const ProductList = (prop) => {
    const { category } = useParams() 

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Product List ({category})</h1>
        </div>
    )
}

export default ProductList