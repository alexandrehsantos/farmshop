import broccoli from "../assets/frutas/Brócolis.png"
import cubumber from "../assets/frutas/Pepino.png";
import logo from "../assets/logo.png";
import potato from "../assets/frutas/Batata.png";
import pumpkin from "../assets/frutas/Abóbora.png";
import tomato from "../assets/frutas/Tomate.png";

const mock = {
    top: {
        title: 'Detail',
    },
    details: {
        name: "Vegetables Basket",
        farmName: "Jenny Jack Farm",
        logoFarm: logo,
        description: "A basket with carefully selected products from the farm straight to your kitchen", 
        price: "R$ 40,00",
        buttonName: "Buy"
    },
    items: {
        title: "Itens da cesta",
        list: [
          {
            name: "Tomato",
            image: tomato,
          },
          {
            name: "Broccoli",
            image: broccoli,
          },
          {
            name: "Potato",
            image: potato,
          },
          {
            name: "Cucumber",
            image: cubumber,
          },
          {
            name: "Pumpkin",
            image: pumpkin,
          }
        ]
    }
}

export default mock;