import Image from "next/image";
import styles from "./nod_logo.module.scss";

const NodLogo = (props) => {
  const { clickHandler } = props;
  return (
    <div
      className={styles.nod_logo}
      onClick={() => {
        clickHandler();
      }}
    >
      <Image
        src="/images/logo/logo1.jpeg"
        alt="logo"
        height={100}
        width={100}
      />
    </div>
  );
};

export default NodLogo;
