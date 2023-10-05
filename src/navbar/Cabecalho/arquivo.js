import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app'; // Importe o Firebase conforme necessário
import 'firebase/database'; // Importe o módulo de banco de dados do Firebase

function PedidoLista() {
  const [pedidoAtual, setPedidoAtual] = useState(null);
  const [mensagem, setMensagem] = useState("Carregando..."); // Mensagem padrão enquanto os dados são carregados

  useEffect(() => {
    // Referência ao nó 'pedidoAtual' para listar os itens
    const pedidoAtualRef = firebase.database().ref('users/pedidoAtual');

    // Escute por alterações no nó 'pedidoAtual'
    pedidoAtualRef.on('value', (snapshot) => {
      const pedidoAtual = snapshot.val();

      // Verifique se o nó 'pedidoAtual' está vazio
      if (!pedidoAtual) {
        setPedidoAtual(null);
        setMensagem("Ainda não pediu? Corra e adicione à sacola!");
      } else {
        setPedidoAtual(pedidoAtual);
        setMensagem(null);
      }
    });

    // Retornar uma função de limpeza para desinscrever-se do ouvinte
    return () => pedidoAtualRef.off('value');
  }, []); // O segundo argumento vazio garante que isso seja executado apenas uma vez no montagem

  return (
    <div>
      {mensagem && <p>{mensagem}</p>}
      {pedidoAtual && (
        <ul>
          {Object.keys(pedidoAtual).map((key) => {
            const item = pedidoAtual[key];
            if (key !== 'totalValor') {
              return (
                <li key={key}>
                  Combo: {item.combo}, Valor: {item.valor}
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>

    
  );
}

export default PedidoLista;
