import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import carrinhoImagem from "../img/carrinhoImagem.png";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className={styles.item}>
          <Link to="/cardapio">Cardapio</Link>
        </li>
        <li className={styles.item}>
          <Link to="/contato">Contato</Link>
        </li>
        <li className={styles.carrinho}>
          <Link to="/carrinho">
            <img src={carrinhoImagem} alt="PaginaCarrinho" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
