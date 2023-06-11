import { useState } from 'react'
import styles from './Admin.module.css'
import AdminForm from './Form/AdminForm'
import { Fade } from 'react-reveal'

const Admin = (prop) => {
    const [editProduct, setEditProduct] = useState(null)

    const editProductForm = (e) => {
        const productById = prop.prop.productList.filter(product => product.id === parseFloat(e.target.value))
        setEditProduct(productById[0])
    }

    const saveForm = (formData) => {
        prop.saveForm(formData)
        setEditProduct(null)
    }

    const closeForm = () => {
        setEditProduct(null)
    }

    const setToDefault = () => {
        prop.setToDefault()
    }

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
                        <button className={styles.edit} value={product.id} onClick={editProductForm}>Edit</button>
                        <button className={styles.delete} value={product.id}>Delete</button>
                    </div>
                </div>  
                )}
            </div>
            <div className={styles.buttonsBottom}>
                <button>New</button>
                <button onClick={setToDefault}>Default</button>
                <button>Save DB</button>
            </div>
            {editProduct !== null && (<AdminForm prop={editProduct} saveForm={saveForm} closeForm={closeForm}/> )}
        </div>
    )
}

export default Admin