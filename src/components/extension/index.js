import {
  Container,
  Links,
  Paragrafo,
  Titulo,
  Cards,
  Card,
  Linha,
  TituloCard,
  Imagem,
  StyledContainer,
} from "./styled";
import chrome from "./../../assets/images/logo-chrome.svg";
import firefox from "./../../assets/images/logo-firefox.svg";
import opera from "./../../assets/images/logo-opera.svg";
import { i18n } from "./../../translate/i18n";
export default function extension() {
  return (
    <StyledContainer>
      <div className="fullscreen">
    <div className="container">
    <div className="card card_1">
      <div className="date">
        11 June 2018
                <span className="tv_ico"><img src={"http://www.cartaodental.com/nbase/image/pc.svg"}/></span>
      </div>
      <div className="content">
        <div className="title">
          La Casa de Papel
        </div>
        <div className="text">
          The most watch series in 2018, dont you miss any episode on Netflix!
        </div>
      </div>
      <div className="sinopse">
                  
          <iframe id="ytplayer" type="text/html" data-video="https://www.youtube.com/embed/ZAXA1DV4dtI?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=1&controls=0&showinfo=1&mute=1"
  src="" frameborder="0" autoplay allowfullscreen></iframe>
        
        <div className="content-sinopse">          
          <div className="title">Series Synopsis</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in hendrerit nulla, sed congue lorem. Phasellus sollicitudin tortor dui, id scelerisque ipsum ultrices vitae. Cras sed laoreet odio, vel ornare enim. Quisque porta quam at augue posuere, id luctus velit ullamcorper. Aenean sapien ligula, malesuada in mollis eu, vestibulum ut quam.
          </div>
        </div>
        <div className="view series_lacasa"> Watch Full Series </div>
      </div>
    </div>
    <div className="card card_2">
 <div className="date">
        16 April 2019
                <span className="tv_ico"><img src="http://www.cartaodental.com/nbase/image/pc.svg"/></span>
      </div>
      <div className="content">
        <div className="title">
          Avengers: Endgame
        </div>
        <div className="text">
          For alot of people the best series ever created, the most proud son of HBO!
        </div>
      </div>
      <div className="sinopse">
        
          <iframe id="ytplayer" type="text/html" data-video="https://www.youtube.com/embed/giYeaKsXnsI?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=1&controls=0&showinfo=1&mute=1"
  src="" frameborder="0" autoplay allowfullscreen></iframe>
        
        <div className="content-sinopse">
          <div className="title">Series Synopsis</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in hendrerit nulla, sed congue lorem. Phasellus sollicitudin tortor dui, id scelerisque ipsum ultrices vitae. Cras sed laoreet odio, vel ornare enim. Quisque porta quam at augue posuere, id luctus velit ullamcorper. Aenean sapien ligula, malesuada in mollis eu, vestibulum ut quam.
          </div>
        </div>
        <div className="view series_got"> Watch Full Series </div>
      </div>
    </div>
    <div className="card card_3">
 <div className="date">
        22 October 2018
                <span className="tv_ico"><img src="http://www.cartaodental.com/nbase/image/pc.svg"/></span>
      </div>
      <div className="content">
        <div className="title">
          Vikings
        </div>
        <div className="text">
          One of the best series about Vikings and their way of living dont miss it!
        </div>
      </div>
      <div className="sinopse">
          
          <iframe className="vikings" data-video="https://www.youtube.com/embed/9GgxinPwAGc?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=1&controls=0&showinfo=1&mute=1" id="ytplayer" type="text/html"
  src="" frameborder="0" autoplay allowfullscreen></iframe>
        
        <div className="content-sinopse">
          <div className="title">Series Synopsis</div>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in hendrerit nulla, sed congue lorem. Phasellus sollicitudin tortor dui, id scelerisque ipsum ultrices vitae. Cras sed laoreet odio, vel ornare enim. Quisque porta quam at augue posuere, id luctus velit ullamcorper. Aenean sapien ligula, malesuada in mollis eu, vestibulum ut quam.
          </div>
        </div>
        <div className="view series_vikings"> Watch Full Series </div>
      </div>
    </div>
  </div>
  </div>
  <div className="fullserie">
  <div className="close"><img src="http://www.cartaodental.com/nbase/image/close.svg"/></div>  

  <div className="episodes">
    <div className="episode episode_1" data-lacasa="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-616580.jpg" data-got="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-43195.jpg" data-vikings="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-504732.png">

    </div>
    <div className="episode episode_2" data-lacasa="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-616580.jpg" data-got="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-43195.jpg" data-vikings="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-504732.png">

    </div>
    <div className="episode episode_3" data-lacasa="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-616580.jpg" data-got="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-43195.jpg" data-vikings="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-504732.png">

    </div>
     <div className="episode episode_4" data-lacasa="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-616580.jpg" data-got="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-43195.jpg" data-vikings="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-504732.png">

    </div>
     <div className="episode episode_5" data-lacasa="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-616580.jpg" data-got="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-43195.jpg" data-vikings="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-504732.png">

    </div>
  </div>

</div>
  </StyledContainer>
    // <Container>
    //   <Titulo>{i18n.t("extension.titulo")}</Titulo>
    //   <Paragrafo>{i18n.t("extension.paragrafo")}</Paragrafo>
    //   <Cards>
    //     <Card>
    //       <Imagem src={chrome} alt="chrome logo" />
    //       <TituloCard>{i18n.t("extension.chrome.titulo")}</TituloCard>
    //       <Paragrafo>{i18n.t("extension.chrome.paragrafo")}</Paragrafo>
    //       <Linha />
    //       <Links href="/">{i18n.t("extension.button")}</Links>
    //     </Card>
    //     <Card id="card2">
    //       <Imagem src={firefox} alt="firefox logo" />
    //       <TituloCard>{i18n.t("extension.firefox.titulo")}</TituloCard>
    //       <Paragrafo>{i18n.t("extension.firefox.paragrafo")}</Paragrafo>
    //       <Linha />
    //       <Links href="/">{i18n.t("extension.button")}</Links>
    //     </Card>
    //     <Card id="card3">
    //       <Imagem src={opera} alt="opera logo" />
    //       <TituloCard>{i18n.t("extension.opera.titulo")}</TituloCard>
    //       <Paragrafo>{i18n.t("extension.opera.paragrafo")}</Paragrafo>
    //       <Linha />
    //       <Links href="/">{i18n.t("extension.button")}</Links>
    //     </Card>
    //   </Cards>
    // </Container>
  );
}
