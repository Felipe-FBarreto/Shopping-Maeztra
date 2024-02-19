import { useState } from "react";
import "./styles.scss";

import useIsMobile from "../../hooks/device";

import BannerModal from "../../assets/banner-modal.png";
import NewsletterEmailIcon from "../../assets/newsletter-mail-icon.svg";

const Modal = () => {
  const isMobile = useIsMobile();
  const hasOpenedModal = Boolean(
    window?.sessionStorage.getItem("hasOpenedModal")
  );
  const [isClosedModal, setIsClosedModal] = useState(hasOpenedModal);
  const [emailInput, setEmailInput] = useState("");

  const closeModal = () => {
    setIsClosedModal(true);
    window.sessionStorage.setItem("hasOpenedModal", "true");
  };

  if (isClosedModal) {
    return null;
  }

  return (
    <section className="modal" onClick={closeModal}>
      <div
        className="modal__wrapper"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="modal__close">
          <button onClick={closeModal}>Fechar</button>
        </div>

        <div className="modal__content">
          {!isMobile ? (
            <div className="modal__image">
              <img src={BannerModal} alt="Imagem Modal" />
            </div>
          ) : null}

          <div className="modal__form-wrapper">
            <div className="modal__form-content">
              <img
                src={NewsletterEmailIcon}
                alt="Email"
                width={28}
                height={29}
              />
              <h1>Bem Vindo à MAEZTRA</h1>
              <h2>
                Receba em Primeira mão
                <br />
                <strong>desconto e ofertas exclusivas</strong>
              </h2>

              <form
                id="modal__form"
                className="modal__form"
                onSubmit={(event) => {
                  event.preventDefault();
                  window.alert("Email enviado!");
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
