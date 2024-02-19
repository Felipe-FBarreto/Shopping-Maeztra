import { useState, useRef, useEffect } from "react";
import "./styles.scss";
import useIsMobile from "../../hooks/device";

interface Anchor {
  href: string;
}

interface MenuItem {
  anchor: Anchor;
  label: string;
}

export interface FooterMenuProps {
  menus: Array<{
    title: string;
    items: MenuItem[];
  }>;
}

interface CollapsibleMenus {
  [key: number]: boolean;
}

const FooterMenu = ({ menus }: FooterMenuProps) => {
  const [collapsibleMenus, setCollapsibleMenus] = useState<CollapsibleMenus>({});
  const initialCollapsibleMenus = useRef<CollapsibleMenus>({});
  const isMobile = useIsMobile();

  useEffect(() => {
    setCollapsibleMenus(initialCollapsibleMenus.current);
  }, []);

  const handleToggleMenu = (index: number) => {
    setCollapsibleMenus((prevCollapsibleMenus) => ({
      ...prevCollapsibleMenus,
      [index]: !prevCollapsibleMenus[index],
    }));
  };

  return (
    <section className={`footer-menu${isMobile ? " mobile" : ""}`}>
      <div className="footer-menu__wrapper">
        {menus.map(({ title, items }, index) => {
          initialCollapsibleMenus.current = {
            ...initialCollapsibleMenus.current,
            [index]: false,
          };

          return (
            <div key={index} className={`footer-menu__section${isMobile ? " mobile" : ""}`}>
              <h2 onClick={() => isMobile && handleToggleMenu(index)}>
                {title}
                {isMobile && (collapsibleMenus[index] ? "-" : "+")}
              </h2>
              <ul className={`${isMobile ? (collapsibleMenus[index] ? "open" : "closed") : ""}`}>
                {items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.anchor.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FooterMenu;