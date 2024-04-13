import styles from "./Sobre.module.css";
import Funcionarios from "../layout/Fucionarios";
function Sobre() {
  return (
    <div className={styles.sobre_container}>
      <h1 className={styles.cardh1}>Sobre</h1>
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
        editoração eletrônica, permanecendo essencialmente inalterado. Se
        popularizou na década de 60, quando a Letraset lançou decalques contendo
        passagens de Lorem Ipsum, e mais recentemente quando passou a ser
        integrado a softwares de editoração eletrônica como Aldus PageMaker.
      </p>
      <div className={styles.cards_funcionarios}>
        <Funcionarios />
        <Funcionarios />
        <Funcionarios />
      </div>
    </div>
  );
}
export default Sobre;
