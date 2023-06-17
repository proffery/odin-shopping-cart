import { useState} from 'react'
import styles from './Admin.module.css'
import AdminForm from './Form/AdminForm'
import { Fade } from 'react-reveal'

const Admin = (prop) => {
    const [editProduct, setEditProduct] = useState(null)
    const [categories, setCategories] = useState([])
    const [productList, setProductList] = useState(prop.prop.productList)

    prop.prop.productList.forEach(product => {
        !categories.includes(product.category) && (setCategories([...categories, product.category]))
    })

    const sortByAllCategory = () => {
        setProductList(prop.prop.productList)
    }

    const sortByCategory = (e) => {
        console.log(prop.prop.productList.filter(product => product.category.includes(e.target.alt)))
        setProductList(prop.prop.productList.filter(product => product.category.includes(e.target.alt)))
    }
    
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
    
    const addProduct = () => {
        function findFirstMissing(array, start, end) {
            if (start > end) {
                return end + 1
            }
            if (start != array[start]) {
                return start
            }
            let mid = parseInt((start + end) / 2, 10)
            if (array[mid] == mid) {
                return findFirstMissing(array, mid + 1, end)
            }
            return findFirstMissing(array, start, mid)
        }
        
        function idList() {
            let idList = []
            prop.prop.productList.map(product => idList.push(product.id))
            return idList.toSorted((a, b) => a - b)
        }
        
        setEditProduct({
            id: findFirstMissing(idList(), 0, prop.prop.productList.length),
            title: "",
            description: "",
            category: "",
            price: 0,
            url: ""
        }) 
    }
    
    const deleteProduct = (e) => {
        prop.deleteProduct(e.target.value)
    }
  
    return (
        <div className={styles.container}>
            <h1 className={styles.header} ><Fade left cascade>ADMIN BOARD</Fade></h1>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.products}>
                        <h2>Products:</h2>
                        <div className={styles.products}>
                            {productList.map(product => 
                                <div className={styles.item} key={'prod' + product.id}>
                                <div className={styles.left}>
                                        <p>{product.id}</p>
                                    <img className={styles.img} src={product.url} alt={product.title}/>
                                    <div className={styles.description}>
                                        <p>{product.title}</p>
                                        <p>{product.description}</p>
                                        <p>Price: {product.price}$</p>
                                    </div>
                                </div>
                                <div className={styles.buttons}>
                                    <button className={styles.edit} value={product.id} onClick={editProductForm}>Edit</button>
                                    <button className={styles.delete} value={product.id} onClick={deleteProduct}>Delete</button>
                                </div>
                            </div>  
                            )}
                        </div>
                        <div>
                            <button onClick={addProduct}>New</button>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <h2>sort by:</h2>
                    <div className={styles.categories}>
                        <div className={styles.category} onClick={sortByAllCategory}>
                                    <div className={styles.imgHolder}>
                                        <div className={styles.name}>All</div>
                                        <img className={styles.img} src={'./assets/img/category/default-category.svg'} alt='all' />
                                    </div>
                                    </div>    
                        {categories.map(category =>
                            <div key={'cat' + categories.indexOf(category)} value={category} onClick={sortByCategory}>
                                <div className={styles.category}>
                                    <div className={styles.imgHolder}>
                                        <div className={styles.name}>{category}</div>
                                        <img className={styles.img} src={'./assets/img/category/' + category + '.jpg'} alt={category} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        
            <div className={styles.buttonsBottom}>
                <button onClick={setToDefault}>Set to Default</button>
            </div>
            {editProduct !== null && (<AdminForm prop={editProduct} saveForm={saveForm} closeForm={closeForm}/> )}
        </div>
    )
}

export default Admin