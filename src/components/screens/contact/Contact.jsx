import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.header} >Contact Us</h1>
            <form className={styles.form}>
                <div className={styles.group}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" placeholder="Enter the subject" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Enter your message"></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact