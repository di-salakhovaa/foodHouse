import img from "../../assets/item__image.png";
import img2 from "../../assets/item__image2.png";
import img3 from "../../assets/item__image3.png";
import img4 from "../../assets/item__image4.png";
import img5 from "../../assets/item__image5.png";

const PRODUCTS = [
    {
        id: 1,
        image: img,
        name: "Салат “Греческий”",
        portion: "300 грамм - 1 порция",
        calories: "36 - белков, 11 - жиров, 55 - углеводов"
    },

    {
        id: 2,
        image: img2,
        name: "Салат “Греческий”",
        portion: "300 грамм - 1 порция",
        calories: "36 - белков, 11 - жиров, 55 - углеводов"
    },

    {
        id: 3,
        image: img3,
        name: "Салат “Тропический”",
        portion: "300 грамм - 1 порция",
        calories: "36 - белков, 11 - жиров, 55 - углеводов"
    },

    {
        id: 4,
        image: img4,
        name: "Салат “Японка”",
        portion: "300 грамм - 1 порция",
        calories: "36 - белков, 11 - жиров, 55 - углеводов"
    },

    {
        id: 5,
        image: img5,
        name: "Салат “Собери Сам”",
        portion: "300 грамм - 1 порция",
        calories: "36 - белков, 11 - жиров, 55 - углеводов"
    },

    {
        id: 6,
        image: img2,
        name: "Салат “Цезарь”",
        portion: "300 грамм - 1 порция",
        calories: "36 - белков, 11 - жиров, 55 - углеводов"
    },

    {
        id: 7,
        image: img3,
        name: "Салат “Оливье”",
        portion: "300 грамм - 1 порция",
        calories: "36 - белков, 11 - жиров, 55 - углеводов"
    },

    {
        id: 8,
        image: img4,
        name: "Салат “Летний”",
        portion: "300 грамм - 1 порция",
        calories: "36 - белков, 11 - жиров, 55 - углеводов"
    },
]

const Product = () => {
    return (
        <div className="products__list">
            {
                PRODUCTS.map((product) => {
                    return (
                        <div className="item">
                            <img src={product.image} alt={product.id } />

                            <div className="item__information">
                                <div className="product_info">
                                    <h3 className="item__name">{product.name}</h3>

                                    <p className="portion">{product.portion}</p>

                                    <p className="calories">{product.calories}</p>
                                </div>

                                <a href="?">Добавить в корзину</a>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Product;