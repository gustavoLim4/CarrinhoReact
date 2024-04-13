import styles from "./Funcionarios.module.css";
import chefe1 from "../img/chefe1.jpg";
import chefe2 from "../img/chefe2.jpg";
import chefe3 from "../img/chefe3.jpg";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Funcionarios() {
  return (
    <div className={styles.cardFCN}>

      <img src={chefe1} alt="funcionario" />
      
      <h1>Patricia Lima</h1>

      <ul className={styles.icons}>
        <li className={styles.face}>
          <FaFacebook />
        </li>
        <li className={styles.insta}>
          <FaInstagram />
        </li>
        <li className={styles.linkedin}>
          <FaLinkedin />
        </li>
      </ul>
    </div>
  );
}
export default Funcionarios;
