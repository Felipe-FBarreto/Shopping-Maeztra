import "./styles.scss";

export interface Benefit {
  title: string;
  subtitle: string;
  icon: string;
}

export interface BenefitsProps {
  title: string;
  benefits: Benefit[];
}

const Benefits = ({ title, benefits }: BenefitsProps) => {
  return (
    <section className="benefits">
      <h3>{title}</h3>

      <ul className="benefits__wrapper">
        {benefits.map((benefit, index) => {
          return (
            <li className="benefit" key={index}>
              <img
                src={benefit.icon}
                alt="Ícone"
                width={320}
                height={32}
                loading="lazy"
              />
              <p className="benefit__content">
                <strong>{benefit.title}</strong>
                <br />
                <span>{benefit.subtitle}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Benefits;