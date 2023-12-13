import { useRouter } from "next/router";
import styles from "./nod_button.module.scss";
import Link from "next/link";

const Nodbutton = (props) => {
  const { clickHandler } = props;
  const router = useRouter();

  const { children } = props;
  return clickHandler ? (
    <button
      className={styles.nod_button}
      onClick={() => {
       clickHandler()
      }}
    >
      {children}
    </button>
  ) : (
    <button
      className={styles.nod_button}
      onClick={() => {
        console.log(router);
      }}
    >
      <Link href="#contact">{children}</Link>
    </button>
  );
};

export default Nodbutton;
