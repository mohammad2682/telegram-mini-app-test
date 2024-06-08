import pizzaImg from '../images/pizza.png'
import burgerImg from '../images/burger.png'
import cocaImg from '../images/coca.png'
import saladImg from '../images/salad.png'
import waterImg from '../images/water.png'
import iceCreamImg from '../images/icecream.png'
import kebabImg from '../images/kebab.png'

export function getData() {
    return [
        { title: "Pizza", price: 17.99, image: pizzaImg },
        { title: "Burger", price: 15.00, image: burgerImg },
        { title: "Coca", price: 2.5, image: cocaImg },
        { title: "Salad", price: 7.99, image: saladImg },
        { title: "Kebab", price: 15.5, image: kebabImg },
        { title: "Water", price: 1.5, image: waterImg },
        { title: "IceCream", price: 2.99, image: iceCreamImg }
    ]
}