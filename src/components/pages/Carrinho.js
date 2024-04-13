import React, { useContext } from "react";
import Conexao from "../layout/Conexao";
import styles from "./Carrinho.module.css";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonCardapio from "../layout/ButtonCardapio";

function Carrinho() {
  //CarroItems : Uma variavel que recebe uma lista de itens
  //Remove : Uma funcão para remover itens
  const { CarroItems, Remove } = useContext(Conexao); //Hook : para acessar o contexto "Conexao"

  // função Remover o card "produto"
  const RemoveCart = (produtos) => {
    Remove(produtos);
  };

  return (
    <div className={styles.carrinhoPG}>
      <h2>Itens no Carrinho</h2>
      {/*Condição variavel CarroItems for maior do que zero rederiza ela caso não estiver rederiza a tag <p>*/}
      {CarroItems.length > 0 ? (
        // usando o metodo MAP para iterar sobre uma lista de itens e executar uma função a cada um item
        CarroItems.map((item, pagina) => (
          <div key={pagina} className={styles.caixa_cart}>
            {/* mostra a imagem */}
            <img src={item.imagem} alt={item.nome} />

            {/* mostra o nome*/}
            <h1>{item.nome}</h1>

            {/* mostra o preço */}
            <p>{item.preco}</p>

            {/* Btn com a funcão de onClick para remover os item  */}
            <button onClick={() => RemoveCart(item)}>
              <FaRegTrashCan /> Excluir
            </button>
          </div>
        ))
      ) : (
        <div className={styles.messagem_addCarrinho}>
          <p>O carrinho está<span> vazio.</span></p>
          <ButtonCardapio 
            to="/cardapio"
            text="Adicionar itens"/>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
