import styles from './Home.module.css'
import Fade from 'react-reveal/Fade'
const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>
                    <Fade right big cascade>Welcome to best</Fade>
                </h1>
                <h1>
                    <Fade right big cascade>Online Shop</Fade>
                </h1>
                <p><Fade bottom>Discover a wide range</Fade></p>
                <p><Fade top cascade>of products for every need.</Fade></p>
                <button className={styles.startShopping}>Shop</button>
            </div>
        </div>
    )
}

export default Home