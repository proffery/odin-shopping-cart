
import { Link } from 'react-router-dom'
import styles from './Shop.module.css'
import { useState } from 'react'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'


const Shop = (prop) => {
    const [categories, setCategories] = useState([])
    prop.prop.productList.forEach(product => {
        !categories.includes(product.category) && (setCategories([...categories, product.category]))
    })
    return (
        <div className={styles.container}>
            <h1 className={styles.header}><Fade left cascade>SHOP</Fade></h1>
            <div className={styles.categories}>
                {categories.map(category =>
                    <Link key={'cat' + categories.indexOf(category)} to={'/shop/' + category }>
                            <div className={styles.category}>
                                <div className={styles.imgHolder}>
                        <Bounce top cascade>
                                    <img className={styles.img} src={'./assets/img/category/' + category + '.jpg'} alt={category} />
                                    <div className={styles.name}>{category}</div>
                        </Bounce>
                                </div>
                            </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Shop