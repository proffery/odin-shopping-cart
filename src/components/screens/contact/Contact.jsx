import styles from './Contact.module.css'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
      // Input Change Handling
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "https://formbold.com/s/6lDYy",
      data: inputs,
    })
      .then((r) => {
        console.log("hello");
      })
      .catch((r) => {
        console.log("error");
      });
  };
    return (
        <div className={styles.container}>
            <h1 className={styles.header} ><Fade left cascade>CONTACT</Fade></h1>
            <form onSubmit={handleOnSubmit}>
            <div className={styles.group}>
                <Fade left cascade>
                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={handleOnChange}
                        value={inputs.email}
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </Fade>
            </div>
            <div className={styles.group}>
                <Fade right cascade>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        onChange={handleOnChange}
                        value={inputs.subject}
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Enter the subject"
                        required
                    />
                </Fade>
            </div>
            <div className={styles.group}>
            <Fade bottom cascade>
                <label htmlFor="message">Message:</label>
                <textarea
                    onChange={handleOnChange}
                    value={inputs.message}
                    id="message"
                    name="message"
                    placeholder="Type your message"
                    required
                />
            </Fade>
            </div>
                <button type="submit">Send</button>
            </form>
                <Flip cascade>
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
                                <img className={styles.icon} src="./assets/img/icons/youtube.png" alt="youtube" />
                            </a>
                    </div>
                </Flip>
        </div>
    )
}

export default Contact