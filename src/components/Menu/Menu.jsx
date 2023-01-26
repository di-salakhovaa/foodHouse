import Category from "../Category/Category";
import Product from "../Product/Product";

const Menu = () => {
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <h2 className="block-title">Наше Меню</h2>
                    <div className="line"></div>

                    <Category />
                    <Product />

                    <button className="show_more">Показать ещё</button>
                </div>
            </div>
        </section>
    );
}

export default Menu;