import churrasco from "../assets/card-churrasco-quadrado.jpg";
import salgados from "../assets/card-salgados-quadrado.jpg";
import pizza from "../assets/card-pizza.jpg";
import hamburguer from "../assets/card-hamburguer.png";
const combosTodos = {
    tituloPrincipal: "Combos",
    itens: [
        {
            image: churrasco,
            titulo: "Churrasco",
            href: '/churrasco'
        },
        {
            image: salgados,
            titulo: "Festas",
            href: '/festas'
        },
        {
            image: pizza,
            titulo: "Pizza",
            href: '/pizza'
        },
        {
            image: hamburguer,
            titulo: "Hamburguer",
            href: '/hamburguer'
        },
        // {
        //     image: birthday,
        //     titulo: "Birthday",
        //     href: '/birthday'
        // },
        // {
        //     image: pizza,
        //     titulo: "Pizza",
        //     href: '/pizza'
        // },
        // {
        //     image: drink,
        //     titulo: "Drinks",
        //     href: '/drinks'
        // },
    ]
}

export default combosTodos;