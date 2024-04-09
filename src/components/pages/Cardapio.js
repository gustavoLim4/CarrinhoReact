import Cards from "../layout/Cards"
import styles from "./Home.module.css"

function Cardapio() {

    return (
        <div className={styles.caixas_cards}>
            <Cards/>
            <Cards/>
          
        </div>
    )
}

export default Cardapio