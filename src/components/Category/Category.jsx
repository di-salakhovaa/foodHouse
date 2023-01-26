import saladIcon from "../../assets/salad.svg";
import drinksIcon from "../../assets/drinks.svg";
import burgersIcon from "../../assets/burgers.svg";
import snacksIcon from "../../assets/snacks.svg";
import pizzaIcon from "../../assets/pizza.svg";
import promotionsIcon from "../../assets/promotions.svg";

const CATEGORIES = [
    {
        url: saladIcon,
        text: "Салаты"
    },
    {
        url: drinksIcon,
        text: "Напитки"
    },
    {
        url: burgersIcon,
        text: "Бургеры"
    },
    {
        url: snacksIcon,
        text: "Закуски"
    },
    {
        url: pizzaIcon,
        text: "Пицца"
    },
    {
        url: promotionsIcon,
        text: "Скидки"
    },
];

const Category = () => {
    return (
        <div className="menu-catalog">
            {
                CATEGORIES.map((category) => {
                    return (
                        <div className="menu__filtration">
                            <img src={category.url} alt={category.text} />
                            <p>{category.text}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Category;