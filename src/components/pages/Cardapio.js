import Comida1 from "../Comidas/Comida1";
import Comida2 from "../Comidas/Comida3";
import Comida3 from "../Comidas/Comida2";
import Burguer1 from "../Comidas/Burguer1";
import Burguer2 from "../Comidas/Burguer2";
import Burguer3 from "../Comidas/Burguer3";
import Bebida1 from "../Comidas/Bebida1";
import Bebida2 from "../Comidas/Bebida2";
import Bebida3 from "../Comidas/Bebida3";
import styles from "./Cardapio.module.css";
function Cardapio() {
  return (
    <div className={styles.pg_cardapio}>
      <div>
        <h2>Pratos</h2>
        <div className={styles.secess_Comida}>
          <Comida1 />
          <Comida2 />
          <Comida3 />
        </div>
          <h2>Lanches</h2>
        <div className={styles.secess_lanches}>
          <Burguer1 />
          <Burguer2 />
          <Burguer3 />
        </div>
          <h2>Bebidas</h2>
        <div className={styles.secess_Bebida}>
          <Bebida1 />
          <Bebida2 />
          <Bebida3 />
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
