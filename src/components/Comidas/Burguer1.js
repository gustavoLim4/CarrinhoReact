import styles from "./Cards.module.css";
import ButtonCompra from "../layout/ButtonCompra";
import burgue1 from "../img/burgue1.jpg";
import Conexao from "../layout/Conexao"
import React, { useContext } from "react";

function Burgue1() {
  // essa linha obtém a função "addItemNoCarrinho" do contexto "Conexao" e a torna 
  // disponível para uso no componente atual
  const { addItemNoCarrinho } = useContext(Conexao);

  //Um conjunto de dados que descreve o item
  const burguer1 = {
      nome: "X-Salada",
      imagem: burgue1,
      preco: "R$ 10,00"
  } 
   //Variavel para usar a função "addItemNoCarrinho" para adicionar a
  //"comida1" ao carrinho de comprar quando onClick for chamado
  const adicionarAoCarrinho = () => {
    addItemNoCarrinho(burguer1);
  };

  return (
      <div className={styles.card}>
          <h1>{burguer1.nome}</h1>
          <img src={burguer1.imagem} alt="prato de comida" />
          <p>{burguer1.preco}</p>
          <ButtonCompra
              onClick={adicionarAoCarrinho}
              to="/carrinho"
              text="Comprar"
          />
      </div>
  );
}


export default Burgue1;
