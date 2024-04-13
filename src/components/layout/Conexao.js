//createContext: Importa a função para criar um contexto.
//Um contexto é uma maneira de compartilhar dados entre componentes.

// useState: Importa o hook useState para criar e gerenciar estado local em um componente.
import React, { createContext, useState } from "react";

const Conexao = createContext();

// A função "Provider" é um componente React que define um estado local com o hook useState
export const Provider = ({ children }) => {
  // Provider: É um componente que recebe children (os componentes filhos que serão renderizados dentro dele).
  const [CarroItems, setCarroALTitems] = useState([]);
  // "CarroItems" é para armazenar itens no carrinho, e "setCarroALTitems"" é para alterar esses itens.

  // Parâmetro: A função recebe um argumento chamado (item)
  // Dentro da função, estou chamando setCarroALTitems para atualizar o estado do carrinho.

  const addItemNoCarrinho = (item) => {
    setCarroALTitems([...CarroItems, item]);
    //...CarroItems: Esta sintaxe espalha (copia) dos itens que ja existente para uma nova lista abaixo
    // item: novo item à lista.
  };

  // A função Remove é usada para remover um item específico do carrinho de compras.
  //Parâmetro: A função recebe um argumento chamado (productRemover), que representa
  //o item que você quer remover do carrinho.
  const Remove = (productRemover) => {
    // chamei (setCarroALTitems) para atualizar o estado do carrinho.
    setCarroALTitems(
        CarroItems.filter((item) => item !== productRemover)
    );
  };

  return (
    // Conexao.Provider: É um componente que fornece dados aos seus filhos
    //(os componentes que estão dentro dele).

    <Conexao.Provider value={{ CarroItems, addItemNoCarrinho, Remove }}>
      {/*CarroItems ,addItemNoCarrinho, Remove: É um objeto que contém os dados e funções que 
         você quer compartilhar com os componentes filhos. */}

      {/* CarroItems: É a lista de itens no carrinho de compras.

          addItemNoCarrinho: É a função para adicionar itens ao carrinho de compras.

          Remove: É a função para remover itens do carrinho de compras. */}
       {children}
      {/*prop especial que representa o conteúdo aninhado dentro de um componente*/}

    </Conexao.Provider>
  );
};

export default Conexao;
