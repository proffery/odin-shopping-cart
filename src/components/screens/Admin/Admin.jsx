import styles from './Admin.module.css'
import { Fade } from 'react-reveal'

const Admin = (prop) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header} ><Fade left cascade>ADMIN BOARD</Fade></h1>
            <div className={styles.products}>
                {prop.prop.productList.map(product => 
                    <div className={styles.item} key={'prod' + product.id}>
                    <div className={styles.left}>
                            <p>{product.id}</p>
                        <img className={styles.img} src={'./assets/img/products/prod' + product.id + '.jpg'} alt={product.title}/>
                        <div className={styles.description}>
                            <p>{product.title}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}$</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <button>Edit</button>
                        <button className={styles.delete} value={product.id}>Delete</button>
                    </div>
                </div>  
                )}
            </div>
                <div>
                    <button>New</button>
                    <button>Default</button>
                </div>
        </div>
    )
}

export default Admin