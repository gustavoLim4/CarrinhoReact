import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <Link to = "/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to = "/sobre">Sobre</Link>
        </li >
        <li className={styles.item}>
          <Link to = "/cardapio">Cardapio</Link>
        </li>
        <li className={styles.item}>
          <Link to = "/contato">Contato</Link>
        </li>
        <li className={styles.carrinho}>
          <Link to = "/carrinho"><MdOutlineShoppingCartCheckout /></Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default NavBar;
