import { useState } from "react";

import Product from "../Product/Product";

import { categories } from "../../data/categories";
import { productsItem } from "../../data/products";

import { filterSalad } from "../../utils/filter";

const Menu = () => {
    const [items, setItems] = useState(productsItem);

    const onCLickFilter = (id) => {
        setItems(filterSalad(productsItem, id));
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <h2 className="block-title">Наше Меню</h2>
                    <div className="line"></div>

                    <div className="menu-catalog">
                        {
                            categories.map((category) => {
                                return (
                                    <button onClick={() => onCLickFilter(category.id)} className="menu__filtration">
                                        <img src={category.url} alt={category.text} />
                                        <p>{category.text}</p>
                                    </button>
                                );
                            })
                        }
                    </div>

                    <div keys={items} className="products__list">
                        {items.map((item) => <Product img={item.image} name={item.name} portion={item.portion} calories={item.calories}/>)}
                    </div>

                    <button className="show_more">Показать ещё</button>
                </div>
            </div>
        </section>
    );
}

export default Menu;