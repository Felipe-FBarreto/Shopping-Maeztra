export interface LinkProps {
  icon?: Image;
  border?: React.CSSProperties["border"];
  color?: React.CSSProperties["color"];
  anchor: Anchor;
  label: string;
  highlight?: boolean;
}

const Link = ({ icon, border, anchor, label, highlight, color }: LinkProps) => {
  return (
    <div
      style={{ border, color }}
      className={`painel-item__wrapper ${
        highlight ? "painel-item__wrapper--highlight" : ""
      }`}
    >
      <img {...icon} alt={icon?.alt} />
      <a {...anchor}>{label}</a>
    </div>
  );
};

export default Link;
