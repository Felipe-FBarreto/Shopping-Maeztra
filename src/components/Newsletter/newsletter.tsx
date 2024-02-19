import { useState } from "react";
import "./styles.scss";

const Newsletter = () => {
  const [emailInput, setEmailInput] = useState("");

  return (
    <section className="newsletter">
      <h3 className="newsletter__title">Recebe Nossa Newsletter</h3>

      <form
        id="newsletter__form"
        className="newsletter__form"
        onSubmit={(event) => {
          event.preventDefault();
          window.alert("A partir de agora você ficará por dentro de todas as novidades da nossa Newsletter!");
          setEmailInput("");
        }}
      >
        <input
          type="email"
          placeholder="Digite seu e-mail"
          required
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Newsletter;
