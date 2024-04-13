import Cards1 from "../Comidas/Cards1"
import Cards2 from "../Comidas/Cards2"
import Cards3 from "../Comidas/Cards3"
import styles from "./Cardapio.module.css"
function Cardapio() {
    return (
        <div className={styles.caixas_cards}>
            
            <Cards1/>
            <Cards2/>
            <Cards3/>   
            <Cards1/>
            <Cards2/>
            <Cards3/>   
        </div>
    )
}

export default Cardapio