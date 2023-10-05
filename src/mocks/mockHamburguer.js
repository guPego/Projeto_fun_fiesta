const combosHamburguer = {
    titulo: "Hamburguer",
    comboGold: {
      titulo: "Combo Gold",
      naoDetalhado: {
        itens: ["3 Hamburgueres", "1 refrigerante ou 1 suco"],
        valor: "85 reais",
      },
      detalhado: {
        containerComida: {
          titulo: "Hamburgueres",
          itens: ["Hambúrguer com bacon ", "Hambúrguer Vegetariano", "Hambúrguer com costelinha", "Hambúrguer comum"],
        },
        containerBebida: {
        titulo: "Bebidas", //Colocar 1 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Guaraná 2L", "Fanta 2L", "Suco de laranja", "Suco de limão", "Suco de maracujá",],
        },
      },
      valor: "85,00",
    },
    comboPlatinum: {
      titulo: "Combo Platinum",
      naoDetalhado: {
        itens: ["6 Hamburgueres", "2 refrigerantes ou sucos"],
        valor: "170 reais",
      },
      detalhado: {
        containerComida: {
          titulo: "Hamburgueres",
          itens: ["Hambúrguer com bacon ", "Hambúrguer Vegetariano", "Hambúrguer com costelinha", "Hambúrguer comum"],
        },
        containerBebida: {
          titulo: "Bebidas", //Colocar 2 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Guaraná 2L", "Fanta 2L", "Suco de laranja", "Suco de limão", "Suco de maracujá",],
        },
      },
      valor: "170,00",
    },
    comboMaster: {
      titulo: "Combo Master",
      naoDetalhado: {
        itens: ["10 Hamburgueres", "3 refrigerantes ou sucos"],
        valor: "280 reais",
      },
      detalhado: {
        containerComida: {
          titulo: "Hamburgueres",
          itens: ["Hambúrguer com bacon ", "Hambúrguer Vegetariano", "Hambúrguer com costelinha", "Hambúrguer comum"],
        },
        containerBebida: { 
          titulo: "Bebidas", //Colocar 3 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Guaraná 2L", "Fanta 2L", "Suco de laranja", "Suco de limão", "Suco de maracujá",],
        },
      },
      valor: "280,00",
    },
  };
  
  export default combosHamburguer;