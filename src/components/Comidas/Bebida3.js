import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import bebida3 from "../img/bebida3.jpg";
import Conexao from "../layout/Conexao"
import React, { useContext } from "react";

function Bebida3() {
  // essa linha obtém a função "addItemNoCarrinho" do contexto "Conexao" e a torna 
  // disponível para uso no componente atual
  const { addItemNoCarrinho } = useContext(Conexao);

  //Um conjunto de dados que descreve o item
  const bebida03 = {
      nome: "Fanta Uva",
      imagem: bebida3,
      preco: "R$ 6,00"
  } 
   //Variavel para usar a função "addItemNoCarrinho" para adicionar a
  //"comida1" ao carrinho de comprar quando onClick for chamado
  const adicionarAoCarrinho = () => {
    addItemNoCarrinho(bebida03);
  };

  return (
      <div className={styles.card}>
          <h1>{bebida03.nome}</h1>
          <img src={bebida03.imagem} alt="prato de comida" />
          <p>{bebida03.preco}</p>
          <ButtonCompra
              onClick={adicionarAoCarrinho}
              to="/carrinho"
              text="Comprar"
          />
      </div>
  );
}


export default Bebida3;
