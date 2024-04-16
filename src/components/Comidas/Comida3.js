import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import pratoComida3 from "../img/pratoComida3.jpg";
import Conexao from "../layout/Conexao"
import React, { useContext } from "react";

function Cards1() {
  // essa linha obtém a função "addItemNoCarrinho" do contexto "Conexao" e a torna 
  // disponível para uso no componente atual
  const { addItemNoCarrinho } = useContext(Conexao);

  //Um conjunto de dados que descreve o item
  const comida3 = {
      nome: "Comida2",
      imagem: pratoComida3,
      preco: "R$ 30,00"
  } 
   //Variavel para usar a função "addItemNoCarrinho" para adicionar a
  //"comida1" ao carrinho de comprar quando onClick for chamado
  const adicionarAoCarrinho = () => {
    addItemNoCarrinho(comida3);
  };

  return (
      <div className={styles.card}>
          <h1>{comida3.nome}</h1>
          <img src={comida3.imagem} alt="prato de comida"/>
          <p>{comida3.preco}</p>
          <ButtonCompra
              onClick={adicionarAoCarrinho}
              to="/carrinho"
              text="Comprar"
          />
      </div>
  );
}


export default Cards1;
