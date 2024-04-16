import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import bebida1 from "../img/bebida1.jpeg";
import Conexao from "../layout/Conexao"
import React, { useContext } from "react";

function Bebida1() {
  // essa linha obtém a função "addItemNoCarrinho" do contexto "Conexao" e a torna 
  // disponível para uso no componente atual
  const { addItemNoCarrinho } = useContext(Conexao);

  //Um conjunto de dados que descreve o item
  const bebida01 = {
      nome: "Coca-Cola",
      imagem: bebida1,
      preco: "R$ 6,00"
  } 
   //Variavel para usar a função "addItemNoCarrinho" para adicionar a
  //"comida1" ao carrinho de comprar quando onClick for chamado
  const adicionarAoCarrinho = () => {
    addItemNoCarrinho(bebida01);
  };

  return (
      <div className={styles.card}>
          <h1>{bebida01.nome}</h1>
          <img src={bebida01.imagem} alt="prato de comida" />
          <p>{bebida01.preco}</p>
          <ButtonCompra
              onClick={adicionarAoCarrinho}
              to="/carrinho"
              text="Comprar"
          />
      </div>
  );
}


export default Bebida1;
