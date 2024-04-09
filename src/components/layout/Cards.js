import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import comida from "../img/comida.jpg";


function Cards() {
  const produto = {
    nome: "Comida",
    imagem: comida,
    preco: "R$ 20,00",
  };

  
  const adicionarAoCarrinho = () => {
    
  };

  return (
    <div className={styles.card}>
      <h1>{produto.nome}</h1>
      <img src={produto.imagem} alt="prato de comida" />
      <p>{produto.preco}</p>
      <ButtonCompra
        id={produto}
        onClick={adicionarAoCarrinho}
        to="/carrinho"
        text="Comprar"
      />
    </div>
  );
}

export default Cards;
