import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
const Home = () => {

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2><Fade left big cascade>Welcome to</Fade></h2>
                <h2><Fade left big cascade>online shop</Fade></h2>
            
                <Fade bottom>
                    <p>Discover a wide range of</p>
                    <p>products for every need</p>
                </Fade>
                <NavLink to='/shop'><button type='button' className={styles.startShopping}>Shop</button></NavLink>
            </div>
        </div>
    )
}

export default Home