const { default: Link } = require("next/link");
const { Whatsapp } = require("react-bootstrap-icons");

import styles from "./whatsapp_button.module.scss";

const WhatsappButton = () => {
  return (
    <Link href="https://wa.link/o72l9m" target="_blank">
      <div className={styles.whatsapp_btn}>
        <Whatsapp />
      </div>
    </Link>
  );
};

export default WhatsappButton;
