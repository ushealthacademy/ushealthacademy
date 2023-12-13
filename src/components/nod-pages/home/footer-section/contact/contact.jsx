const {
  default: Nodbutton,
} = require("@/components/nod-ui/nod-button/nod_button");
import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}
    // data-aos='fade-left'
    >
      <h2>Contact Us</h2>
      <p>
        Got a project in mind? Fill in the form or send us an email and we’ll
        get back to you right away!
      </p>
      <input placeholder="Your Name..." />
      <input placeholder="Your Email..." />
      <input placeholder="Your Phone Number..." />
      <textarea
        placeholder="Your Message..."
        
      />
      <Nodbutton>Send Message</Nodbutton>
    </div>
  );
};

export default Contact;
