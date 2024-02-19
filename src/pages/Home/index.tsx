import "./home.scss";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import useIsMobile from "../../hooks/device";
import Deals from "../../components/Benefits/benefits";
import Shelf from "../../components/Shelf/shelf";
import { homepartners, homeDeals, homeShelf, mainBanners } from "./mocks";

import CollectionBannerDesk from "../../assets/collection-banner-desk.jpg";
import CollectionBannerMobile from "../../assets/collection-banner-mobile.jpg";

const Home = () => {
  const isMobile = useIsMobile();

  const sliderSettings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    lazyLoad: "ondemand",
    arrows: true,
    dots: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <main className="home">
      <section className="home__main-banner">
        <Slider {...sliderSettings}>
          {mainBanners.map(({ src, mobileSrc, alt, anchor }, index) => {
            return (
              <a {...anchor} key={index}>
                <img
                  src={isMobile && mobileSrc ? mobileSrc : src}
                  alt={alt}
                  loading="lazy"
                />
              </a>
            );
          })}
        </Slider>
      </section>

      <Deals {...homeDeals} />

      <section className="home__partners">
        <h3>Marcas Parceiras</h3>

        <ul className="home__partners-wrapper">
          {homepartners.map((brand, index) => {
            return (
              <li className="brand__image" key={index}>
                <img {...brand} alt={brand.alt} />
              </li>
            );
          })}
        </ul>
      </section>

      <Shelf {...homeShelf} />

      <section className="home__collection">
        <div className="home__collection-wrapper">
          <div className="home__collection-text">
            <h2>Lorem ipsum</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
              dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut
              mauris integer. Nibh sagittis in lobortis sed cursus condimentum
              velit pharetra. Amet luctus ut vulputate scelerisque placerat
              consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec
              tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut
              ornare augue eget convallis volutpat aliquet. Sed sed pellentesque
              porttitor phasellus donec condimentum sit sapien.
            </p>
          </div>

          <div className="home__collection-banner">
            <img
              src={isMobile ? CollectionBannerMobile : CollectionBannerDesk}
              alt="Banner de coleção"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
