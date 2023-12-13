import styles from "./custom_button.module.scss";

const CustomButton = (props) => {
  const { children, clickHandler = () => {}, disabled } = props;
  return (
    <button
      className={styles.custom_button}
      onClick={clickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
