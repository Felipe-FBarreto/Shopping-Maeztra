export interface LinkProps {
  icon?: Image;
  border?: React.CSSProperties["border"];
  anchor: Anchor;
  label: string;
  highlight?: boolean;
}

const Link = ({ icon, border, anchor, label, highlight }: LinkProps) => {
  return (
    <div
      style={{ border }}
      className={`menu-item__wrapper ${
        highlight ? "menu-item__wrapper--highlight" : ""
      }`}
    >
      <img {...icon} alt={icon?.alt} />
      <a {...anchor}>{label}</a>
    </div>
  );
};

export default Link;
