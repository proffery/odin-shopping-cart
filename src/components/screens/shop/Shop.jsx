
import { Link } from 'react-router-dom'
import styles from './Shop.module.css'
import { useState } from 'react'


const Shop = (prop) => {
    const [categories, setCategories] = useState([])
    prop.prop.productList.forEach(product => {
        categories.includes(product.category) ? (console.log('category '+ product.category + ' exist')) : (setCategories([...categories, product.category]))
    })
    console.log(categories)
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Categories</h1>
            <div className={styles.categories}>
                {categories.map(category =>
                    <div key={'cat' + categories.indexOf('category')} className={styles.category}>
                        <Link  to={'/shop/' + category}>
                            <div className={styles.imgHolder}>
                                <img className={styles.img} src={'/assets/img/category/' + category + '.jpg'} alt={category} />
                            </div>
                            <div className={styles.name}>{category}</div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shop