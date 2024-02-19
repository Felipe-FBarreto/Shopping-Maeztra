import "./styles.scss";
import SearchBar from "../SearchBar/search";
import Link from "../Link/link";
import { headerMainLinks, headerMenus } from "./mocks";
import Logo from "../../assets/logo-maeztra.png";
import MenuDrawer from "../../assets/icon-menu.svg";
import IconSearch from "../../assets/icon-search.svg";
import IconBag from "../../assets/icon-shoppingbag.svg";
import useScroll from "../../hooks/useScroll";

const HeaderDesktop = () => {
  const offScroll = useScroll();

  return (
    <header>
      <section className="header__topbar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </section>

      <section
        className="header__content"
        style={{
          ...(offScroll > 0 && {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 998,
          }),
        }}
      >
        <div className="header__content-wrapper">
          <img
            className="header__logo"
            src={Logo}
            alt="Maeztra"
            width={147}
            height={18}
          />

          <SearchBar />

          <ul className="header__painel">
            {headerMainLinks.map((link, index) => (
              <li className="header__painel-item" key={index}>
                <Link {...link} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="header__departaments">
        <ul className="header__departaments-wrapper">
          {headerMenus.map((menu, index) => (
            <li className="header__departaments-item" key={index}>
              <Link {...menu} />
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};

const HeaderMobile = () => {
  const offScroll = useScroll();

  return (
    <header>
      <section className="header__topbar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </section>

      <section
        className="header__content"
        style={{
          ...(offScroll > 0 && {
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 998,
          }),
        }}
      >
        <div className="header__content-wrapper">
          <button className="header__open-drawer">
            <img src={MenuDrawer} alt="Abrir Menu" width={24} height={24} />
          </button>
          <img
            className="header__logo"
            src={Logo}
            alt="Maeztra"
            width={110}
            height={12}
          />
          <div className="header__right-icons">
            <button>
              <img src={IconSearch} alt="Busca" width={24} height={24} />
            </button>
            <button>
              <img src={IconBag} alt="Sacola" width={21} height={24} />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export { HeaderDesktop, HeaderMobile };
