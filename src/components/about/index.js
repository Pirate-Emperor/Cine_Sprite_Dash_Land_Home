import {
  Links,
  Container,
  Chrome,
  Firefox,
  ColunaImagem,
  Paragrafo,
  Titulo,
  Linha,
  Textos,
} from "./styled";
import imagem from "./../../assets/images/illustration-hero.svg";
import { i18n } from "./../../translate/i18n";
export default function About() {
  return (
    <Container>
      <Linha>
        <Textos>
          <Titulo className="h1 mb-4">{i18n.t("about.titulo")}</Titulo>
          <Paragrafo>{i18n.t("about.paragrafo")}</Paragrafo>
          <Links>
            <Chrome
              href="https://myanimelist.net/anime/season"
              target="_blank"
            >
              {i18n.t("about.buttons.chrome")}
            </Chrome>
            <Firefox
              href="https://myanimelist.net/anime/season"
              target="_blank"
            >
              {i18n.t("about.buttons.firefox")}
            </Firefox>
          </Links>
        </Textos>
        <ColunaImagem>
          <img src={imagem} alt="bookmark" />
        </ColunaImagem>
      </Linha>
    </Container>
  );
}
