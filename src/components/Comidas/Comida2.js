import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import pratoComida2 from "../img/pratoComida2.jpg";
import Conexao from "../layout/Conexao"
import React, { useContext } from "react";

function Cards2() {
  // essa linha obtém a função "addItemNoCarrinho" do contexto "Conexao" e a torna 
  // disponível para uso no componente atual
  const { addItemNoCarrinho } = useContext(Conexao);

  //Um conjunto de dados que descreve o item
  const comida2 = {
      nome: "Comida3",
      imagem: pratoComida2,
      preco: "R$ 40,00"
  } 
   //Variavel para usar a função "addItemNoCarrinho" para adicionar a
  //"comida1" ao carrinho de comprar quando onClick for chamado
  const adicionarAoCarrinho = () => {
    addItemNoCarrinho(comida2);
  };

  return (
      <div className={styles.card}>
          <h1>{comida2.nome}</h1>
          <img src={comida2.imagem} alt="prato de comida" />
          <p>{comida2.preco}</p>
          <ButtonCompra
              onClick={adicionarAoCarrinho}
              to="/carrinho"
              text="Comprar"
          />
      </div>
  );
}


export default Cards2;
