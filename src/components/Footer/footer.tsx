import React from 'react';
import "./styles.scss";
import FooterMenu from "../FooterMenu/footer-menu";
import Newsletter from "../Newsletter/newsletter";
import { socialNetworkStamps, paymentStamps, copyrightStamps, footerMenus } from "./mocks";
import type { Stamp } from "./mocks";

interface StampElementProps {
  stamp: Stamp;
}

const StampElement: React.FC<StampElementProps> = ({ stamp }) => {
  const { anchor, image } = stamp;

  const StampComponent = anchor ? (
    <a {...anchor}>
      <img {...image} alt={image.alt} />
    </a>
  ) : (
    <img {...image} alt={image.alt} />
  );

  return <>{StampComponent}</>;
};

const renderStampElements = (stamps: Stamp[]) => {
  return stamps.map((stamp, index) => (
    <StampElement key={index} stamp={stamp} />
  ));
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <Newsletter />
        <FooterMenu menus={footerMenus} />

        <section className="footer__bottom">
          <div className="footer__bottom-wrapper">
            <div className="footer__social">
              {renderStampElements(socialNetworkStamps)}
            </div>

            <div className="footer__payments">
              {renderStampElements(paymentStamps)}
            </div>

            <div className="footer__copyright">
              {renderStampElements(copyrightStamps)}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;