import "./style.css";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import elchurras from "../../assets/elchurras.png";
import receitech from "../../assets/receitech.png";
import hydedesk from "../../assets/hydedesk.jpeg";
import login from '../../assets/login.png';

function Projetos() {
  return (
    <div className="containerProjetos">
      <div className="divTitle">
        <h2>Projetos</h2>
      </div>

      <div className="containerCarrosel">
        {/* <Slider {...settings}> */}
        <div className="cardProjetos">
          <a
            href="https://github.com/RafaelVieira10/elchurras"
            target="_blank"
          >
            <img src={elchurras} alt=""></img>
          </a>
        </div>
        <div className="cardProjetos">
          <a href="https://github.com/RafaelVieira10/app-receitas" target="_blank">
            <img src={receitech} alt=""></img>
          </a>
        </div>
        <div className="cardProjetos">
          <a href="https://github.com/RafaelVieira10/hyde_desk-mobile" target="_blank">
            <img src={hydedesk} alt=""></img>
          </a>
        </div>
        <div className="cardProjetos">
          <a href="https://rafaelvieira10.github.io/Login/" target="_blank">
            <img src={login} alt=""></img>
          </a>
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
}

export default Projetos;
