const combosPizza = {
    titulo: "Pizzas",
    comboGold: {
      titulo: "Combo Gold",
      naoDetalhado: {
        itens: ["1 Pizza Grande", "1 refrigerante ou suco"],
        valor: "50 reais",
      },
      detalhado: {
        containerComida: {
          titulo: "Pizzas", //Colocar no cod *8 fatias*
          itens: ["Pizza de Frango com Catupiry", "Pizza de Calabresa ", "Pizza de Presunto e Queijo", "Pizza de Margherita", "Pizza de Chocolate"],
        },
        containerBebida: {
        titulo: "Bebidas", //Colocar 1 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Fanta 2L", "Sprite 2L", "Guaraná 2L", "Pepsi 2L", "Suco de Uva 1L", "Suco de Laranja 1L", "Suco de Maracujá 1L", "Suco de Limão 2L", "Suco de Pêssego 2L",],
        },
      },
      valor: "85,00",
    },


    comboPlatinum: {
      titulo: "Combo Platinum",
      naoDetalhado: {
        itens: ["2 Pizzas Grandes", "2 refrigerantes ou 2 sucos"],
        valor: "120 reais",
      },
      detalhado: {
        containerComida: {
          titulo: "Pizzas", //Colocar no cod *16 fatias*
          itens: ["Hambúrguer com bacon ", "Hambúrguer Vegetariano", "Hambúrguer com costelinha", "Hambúrguer comum"],
        },
        containerBebida: {
          titulo: "Bebidas", //Colocar 2 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Fanta 2L", "Sprite 2L", "Guaraná 2L", "Pepsi 2L", "Suco de Uva 1L", "Suco de Laranja 1L", "Suco de Maracujá 1L", "Suco de Limão 2L", "Suco de Pêssego 2L",],
        },
      },
      valor: "120,00",
    },


    comboMaster: {
      titulo: "Combo Master",
      naoDetalhado: {
        itens: ["2 Pizzas Gigante", "3 refrigerantes ou 3 sucos"],
        valor: "170 reais",
      },
      detalhado: {
        containerComida: {
          titulo: "Hamburgueres", //Colocar no cod *32 fatias*
          itens: ["Hambúrguer com bacon ", "Hambúrguer Vegetariano", "Hambúrguer com costelinha", "Hambúrguer comum",],
        },
        containerBebida: { 
          titulo: "Bebidas", //Colocar 3 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Fanta 2L", "Sprite 2L", "Guaraná 2L", "Pepsi 2L", "Suco de Uva 1L", "Suco de Laranja 1L", "Suco de Maracujá 1L", "Suco de Limão 2L", "Suco de Pêssego 2L",],
        },
      },
      valor: "170,00",
    },
  };
  
  export default combosPizza;