export interface Deal {
  title: string;
  subtitle: string;
  icon: string;
}

export interface DealsProps {
  title: string;
  deals: Deal[];
}

const Deals = ({ title, deals }: DealsProps) => {
  return (
    <section className="deals">
      <h3>{title}</h3>

      <ul className="deals__wrapper">
        {deals.map((deal, index) => {
          return (
            <li className="deal" key={index}>
              <img
                src={deal.icon}
                alt="Ícone"
                width={320}
                height={32}
                loading="lazy"
              />
              <p className="deal__content">
                <strong>{deal.title}</strong>
                <br />
                <span>{deal.subtitle}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Deals;
