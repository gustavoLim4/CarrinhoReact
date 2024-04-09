import { Link } from "react-router-dom";
import styles from "./ButtonCompra.module.css";
function ButtonCompra({ to, text , onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.comprar}>
        <Link to={to}> {text}</Link>
      </button>
    </div>
  );

}

export default ButtonCompra;
