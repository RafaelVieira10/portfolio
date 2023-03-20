import './style.css'
import {listHabilidades} from '../Habilidades/listHabilidades'

const img = {
    html: require("../../assets/html.png"),
    css: require("../../assets/css.png"),
    javascript: require("../../assets/javascript.png"),
    react: require("../../assets/react.png"),
    python: require("../../assets/python.png"),
    csharp: require("../../assets/csharp.png"),
}

function CardHabilidades(habilidade) {
    console.log(img[habilidade.projeto.img])
    return(
           <div class="conhecimentos-ul">
                        <ul>
                            <li>
                                <img src={img[habilidade.projeto.img]} alt="HTML"/>
                                <div class="barra-content">
                                    <div class="barra">
                                        <div class="barra2 "></div>
                                        <div className='divPorcent'>
                                            <p>{habilidade.projeto.porcentagem}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> 
    );      
}

export default CardHabilidades;