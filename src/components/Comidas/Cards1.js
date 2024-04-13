import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import comida from "../img/comida.jpg";
import Conexao from "../layout/Conexao"
import React, { useContext } from "react";

function Cards() {
  // essa linha obtém a função "addItemNoCarrinho" do contexto "Conexao" e a torna 
  // disponível para uso no componente atual
  const { addItemNoCarrinho } = useContext(Conexao);

  //Um conjunto de dados que descreve o item
  const comida1 = {
      nome: "Comida1",
      imagem: comida,
      preco: "R$ 20,00"
  } 
   //Variavel para usar a função "addItemNoCarrinho" para adicionar a
  //"comida1" ao carrinho de comprar quando onClick for chamado
  const adicionarAoCarrinho = () => {
    addItemNoCarrinho(comida1);
  };

  return (
      <div className={styles.card}>
          <h1>{comida1.nome}</h1>
          <img src={comida1.imagem} alt="prato de comida" />
          <p>{comida1.preco}</p>
          <ButtonCompra
              onClick={adicionarAoCarrinho}
              to="/carrinho"
              text="Comprar"
          />
      </div>
  );
}


export default Cards;
