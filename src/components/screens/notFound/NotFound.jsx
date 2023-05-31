import styles from './NotFound.module.css'
import Fade from 'react-reveal/Fade'

const NotFound = () => {


    return (
        <div className={styles.container}>
            <h1>
                <p><Fade right cascade>404</Fade></p>
            </h1>
            <h3>
                <p>Page not found.</p>
            </h3>
        </div>
    )
}

export default NotFound