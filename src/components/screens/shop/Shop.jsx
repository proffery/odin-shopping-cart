
import { Link } from 'react-router-dom'
import styles from './Shop.module.css'
import { useState } from 'react'


const Shop = (prop) => {
    const [categories, setCategories] = useState([])
    prop.prop.productList.forEach(product => {
        !categories.includes(product.category) && (setCategories([...categories, product.category]))
    })
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Categories</h1>
            <div className={styles.categories}>
                {categories.map(category =>
                    <Link key={'cat' + categories.indexOf(category)} to={'/shop/' + category }>
                        <div className={styles.category}>
                            <div className={styles.imgHolder}>
                                <img className={styles.img} src={'/assets/img/category/' + category + '.jpg'} alt={category} />
                                <div className={styles.name}>{category}</div>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Shop