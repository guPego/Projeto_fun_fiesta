const combosChurrasco = {
    titulo: "Churrasco",
    comboGold: {
      titulo: "Combo Gold 5 pessoas",
      naoDetalhado: {
        itens: ["400g de Carnes", "1 refrigerante ou 1 suco"],
        valor: "90 reais",
      },
      detalhado: {
        containerComida: {
          titulo: "Carnes",
          itens: ["Alcatra", "Picanha", "Asinhas", "Lombo",],
        },
        containerBebida: {
          titulo: "Bebidas", //Colocar 1 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Guaraná 2L", "Fanta 2L", "Suco de laranja", "Suco de limão", "Suco de maracujá",],
        },
      },
      valor: "90,00",
    },
    comboPlatinum: {
      titulo: "Combo Platinum 8 pessoas",
      naoDetalhado: {
        itens: ["600g de Carnes", "3 refrigerantes ou 3 sucos"],
        valor: "150 reais",
      },
      detalhado: {
        containerComida: {
          titulo: "Carnes",
          itens: ["Alcatra","Picanha","Asinhas","Lombo",],
        },
        containerBebida: {
          titulo: "Bebidas", //Colocar 3 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Guaraná 2L", "Fanta 2L", "Suco de laranja", "Suco de limão", "Suco de maracujá",],
        },
      },
      valor: "150,00",
    },
    comboMaster: {
      titulo: "Combo Master 12 pessoas",
      naoDetalhado: {
        itens: ["1kg Carnes","6 refrigerantes ou 6 sucos",],
        valor: "250 reais"
      },
      detalhado: {
        containerComida: {
          titulo: "Carnes",
          itens: ["Alcatra","Picanha","Asinhas","Lombo",],
        },
        containerBebida: {
          titulo: "Bebidas", //Colocar 6 refrigerantes ou suco no cod
          itens: ["Coca-cola 2L", "Guaraná 2L", "Fanta 2L", "Suco de laranja", "Suco de limão", "Suco de maracujá",],
        },
      },
      valor: "250,00",
    },
  };
  
  export default combosChurrasco;