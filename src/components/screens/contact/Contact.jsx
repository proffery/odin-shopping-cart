import styles from './Contact.module.css'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header} ><Fade left cascade>CONTACT</Fade></h1>
            <form className={styles.form}>
                    <div className={styles.group}>
                <Fade right cascade>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required/>
                </Fade>
                    </div>
                    <div className={styles.group}>
                <Fade left cascade>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required/>
                </Fade>
                    </div>
                    <div className={styles.group}>
                <Fade bottom cascade>
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id="subject" name="subject" placeholder="Enter the subject" required/>
                </Fade>
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
            </form>
                <Flip bottom cascade>
                    <div className={styles.icons}>
                            <a href="">
                                <img className={styles.icon} src="./assets/img/icons/facebook.png" alt="facebook" />
                            </a>
                            <a href="">
                                <img className={styles.icon} src="./assets/img/icons/instagram.png" alt="instagram" />
                            </a>
                            <a href="">
                                <img className={styles.icon} src="./assets/img/icons/tik-tok.png" alt="tik-tok" />
                            </a>
                            <a href="">
                                <img className={styles.icon} src="./assets/img/icons/twitter.png" alt="twitter" />
                            </a>
                            <a href="">
                                <img className={styles.icon} src="./assets/img/icons/whatsapp.png" alt="whatsapp" />
                            </a>
                            <a href="">
                                <img className={styles.icon} src="./assets/img/icons/youtube.png" alt="youtube" />
                            </a>
                    </div>
                </Flip>
        </div>
    )
}

export default Contact