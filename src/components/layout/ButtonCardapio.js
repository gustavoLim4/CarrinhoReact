import { Link } from "react-router-dom";
import styles from "./ButtonCardapio.module.css";
function ButtonCardapio({ to, text }) {
  return (
    <div className={styles.container_btn}>
      <button className={styles.cardapio}>
        <Link to={to}> {text}</Link>
      </button>
    </div>
  );

}

export default ButtonCardapio;