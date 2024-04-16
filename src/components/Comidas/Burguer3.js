import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import burgue3 from "../img/burgue3.jpg";
import Conexao from "../layout/Conexao"
import React, { useContext } from "react";

function Burgue2() {
  // essa linha obtém a função "addItemNoCarrinho" do contexto "Conexao" e a torna 
  // disponível para uso no componente atual
  const { addItemNoCarrinho } = useContext(Conexao);

  //Um conjunto de dados que descreve o item
  const burguer3 = {
      nome: "X-Bacon",
      imagem: burgue3,
      preco: "R$ 20,00"
  } 
   //Variavel para usar a função "addItemNoCarrinho" para adicionar a
  //"comida1" ao carrinho de comprar quando onClick for chamado
  const adicionarAoCarrinho = () => {
    addItemNoCarrinho(burguer3);
  };

  return (
      <div className={styles.card}>
          <h1>{burguer3.nome}</h1>
          <img src={burguer3.imagem} alt="prato de comida" />
          <p>{burguer3.preco}</p>
          <ButtonCompra
              onClick={adicionarAoCarrinho}
              to="/carrinho"
              text="Comprar"
          />
      </div>
  );
}


export default Burgue2;
