import image from "../../assets/image.png";

const Banner = () => {
    return (
        <main>
            <div className="container">
                <div className="banner__wrapper">
                    <div className="banner__information">
                        <p className="sub">Экспресс-доставка от Яндекс.Еды</p>
                        <h1 className="title">Быстро <br /> и вкусно<span>.</span></h1>
                        <p className="subtitle">Сеть быстрого питания #1 в Казани</p>

                        <div className="button__text">
                            <button>Сделать заказ</button>
                            <p className="text">бесплатная доставка <br /> от 500 рублей</p>
                        </div>
                    </div>

                    <div className="banner__image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Banner;