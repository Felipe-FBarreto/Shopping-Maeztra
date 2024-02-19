import "./styles.scss";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import useIsMobile from "../../hooks/device";

interface Product {
  image: string;
  variations: {
    colors: string[];
  };
  price: number;
  name: string;
  description: string;
  productId: string;
  productLink: string;
}

export interface ShelfProps {
  title?: string;
  products: Product[];
}

const Shelf = ({ title, products }: ShelfProps) => {
  const isMobile = useIsMobile();

  function formatCurrency(number: number): string {
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const addToCart = (event: React.MouseEvent, productName: string) => {
    event.preventDefault();
    event.stopPropagation();

    window.alert(`Produto "${productName}" adicionado ao carrinho!`);
  };

  const sliderSettings: Settings = {
    slidesToShow: isMobile ? 1 : 5,
    slidesToScroll: isMobile ? 1 : 5,
    vertical: false,
    lazyLoad: "ondemand",
    arrows: !isMobile,
    dots: false,
  };

  return (
    <section className="shelf">
      {title && <h2 className="shelf__title">{title}</h2>}

      <Slider {...sliderSettings}>
        {products.map(
          (
            {
              image,
              variations: { colors },
              price,
              name,
              description,
              productId,
              productLink,
            },
            index
          ) => {
            return (
              <a
                id={productId}
                className="product"
                href={productLink}
                key={index}
              >
                <img src={image} alt={name} loading="lazy" />

                <div className="product__info">
                  <div className="details__wrapper">
                    <div className="colors__wrapper">
                      {colors.map((color, index) => {
                        return (
                          <button
                            className={`color ${index === 0 ? "selected" : ""}`}
                            style={{ backgroundColor: color }}
                            key={index}
                            onClick={(event) => {
                              event.preventDefault();
                              event.stopPropagation();
                            }}
                          />
                        );
                      })}
                    </div>
                    <p className="price">{formatCurrency(price)}</p>
                    <p className="name">{name}</p>
                    <p className="description">{description}</p>
                  </div>

                  <button
                    className="add-to-cart"
                    onClick={(event) => addToCart(event, name)}
                  >
                    Adicionar
                  </button>
                </div>
              </a>
            );
          }
        )}
      </Slider>
    </section>
  );
};

export default Shelf;
