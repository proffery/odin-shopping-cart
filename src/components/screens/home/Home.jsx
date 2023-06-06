import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
const Home = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2><Fade right big cascade>Welcome to online shop</Fade></h2>
                <h2><Fade right big cascade></Fade></h2>
                <p><Fade bottom cascade>Discover a wide range of products for every need</Fade></p>
                <NavLink to='/shop'><button type='button' className={styles.startShopping}>Shop</button></NavLink>
            </div>
        </div>
    )
}

export default Home