import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import bebida2 from "../img/bebida2.webp";
import Conexao from "../layout/Conexao"
import React, { useContext } from "react";

function Bebida2() {
  // essa linha obtém a função "addItemNoCarrinho" do contexto "Conexao" e a torna 
  // disponível para uso no componente atual
  const { addItemNoCarrinho } = useContext(Conexao);

  //Um conjunto de dados que descreve o item
  const bebida02 = {
      nome: "Guaraná",
      imagem: bebida2,
      preco: "R$ 6,00"
  } 
   //Variavel para usar a função "addItemNoCarrinho" para adicionar a
  //"comida1" ao carrinho de comprar quando onClick for chamado
  const adicionarAoCarrinho = () => {
    addItemNoCarrinho(bebida02);
  };

  return (
      <div className={styles.card}>
          <h1>{bebida02.nome}</h1>
          <img src={bebida02.imagem} alt="prato de comida" />
          <p>{bebida02.preco}</p>
          <ButtonCompra
              onClick={adicionarAoCarrinho}
              to="/carrinho"
              text="Comprar"
          />
      </div>
  );
}


export default Bebida2;
