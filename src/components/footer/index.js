import { Container, Logo, Rota, Conjunto, Conjunto2, Rede } from "./styled";
import logo from "./../../assets/images/main_logo.png";
import facebook from "./../../assets/images/icon-facebook.svg";
import twitter from "./../../assets/images/icon-twitter.svg";
import { Link } from "react-router-dom";
import { i18n } from "./../../translate/i18n";
export default function Footer({landMode, setLandMode, homeMode, setHomeMode }) {
  const homeClickHandler = () => {
    setHomeMode(true);
    setLandMode(false);
  };
const dashClickHandler = () => {
    setHomeMode(false);
    setLandMode(false);
  };  
const landClickHandler = () => {
    setLandMode(true);
};
const chooseHandler =(handle) => {
    if (handle==="home") return homeClickHandler
    else if (handle==="dash") return dashClickHandler
    else if (handle==="land") return landClickHandler
}
  return (
    <Container>
      <Conjunto>
        <Link to="/" onClick={landClickHandler}>
          <Logo src={logo} alt="logo" style={{width: 70}}/>
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
      </Conjunto>

      {/* <Conjunto2>
        <Rede href="https://pt-br.facebook.com/" target="_blank">
          <Logo src={facebook} alt="logo" />
        </Rede>

        <Rede href="https://twitter.com/" target="_blank">
          <Logo src={twitter} alt="logo" />
        </Rede>
      </Conjunto2> */}
    </Container>
  );
}
