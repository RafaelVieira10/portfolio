import { projetos } from '../Projetos/listProjetos';
import './style.css'

const img = {
    elChurras: require("../../assets/elchurras.png"),
    receitech: require("../../assets/receitech.png"),
    hydeDesk: require("../../assets/hydedesk.jpeg"),
    login: require("../../assets/login.png"),
    chatBot: require("../../assets/chatBot.png"),
    acmeClima: require("../../assets/appClima.png"),
}

function CardProjetos({projeto}) {
    return (
        <div className="containerProjetos">
            <div className="cardProjetos">
                <a
                    href={projeto.link}
                    target="_blank"
                >
                    <img src={img[projeto.img]} alt=""></img>
                </a>
            </div>
        </div>
    );
}

export default CardProjetos;