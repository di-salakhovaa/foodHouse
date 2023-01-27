const Product = ({ img, name, portion, calories }) => {
    return (
        <div className="item">
            <div className="item__image">
                <img src={img} alt="" />
            </div>

            <div className="item__information">
                <div className="product_info">
                    <h3 className="item__name">{name}</h3>

                    <p className="portion">{portion}</p>

                    <p className="calories">{calories}</p>
                </div>

                <a href="?">Добавить в корзину</a>
            </div>
        </div>
    );
}

export default Product;