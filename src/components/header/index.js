import {
  Container,
  Logo,
  Rota,
  BotaoLogin,
  Conjunto,
  Itens,
  MobileNav,
  Conjunto2,
  Rede,
} from "./styled";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";
import facebook from "./../../assets/images/icon-facebook.svg";
import twitter from "./../../assets/images/icon-twitter.svg";
import logo from "./../../assets/images/logo-bookmark.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { i18n } from "./../../translate/i18n";
export default function Header({homeMode, setHomeMode }) {
  const [navToggle, setNavToggle] = useState(false);
  const alternar = () => {
    setNavToggle(!navToggle);
  };
  const homeClickHandler = () => {
    setHomeMode(!homeMode);
  };
  useEffect(() => {
    if (navToggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <MobileNav navToggle={navToggle}>
        <button onClick={alternar}>
          {navToggle ? (
            <i>
              <img src={Close} alt="Fechar" />
            </i>
          ) : (
            <i>
              <img src={Hamburger} alt="abrir" />
            </i>
          )}
        </button>
      </MobileNav>
      <Conjunto navToggle={navToggle}>
        <Itens>
          <Link to="/" onClick={homeClickHandler}>
            <Rota>{i18n.t("rotas.dash")}</Rota>
          </Link>
          <Link to="/features">
            <Rota>{i18n.t("rotas.features")}</Rota>
          </Link>


          <Link to="/extension">
            <Rota>{i18n.t("rotas.pricing")}</Rota>
          </Link>

          <Link to="/contact">
            <Rota>{i18n.t("rotas.contact")}</Rota>
          </Link>

          <BotaoLogin>
            <Link to="/login">
              <Rota>{i18n.t("rotas.login")}</Rota>
            </Link>
          </BotaoLogin>
        </Itens>
      </Conjunto>
    </Container>
  );
}
