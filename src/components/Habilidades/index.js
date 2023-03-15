import './style.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'

function Habilidades() {
    return(
        <div className='contentHabilidades' id='habilidades'>
            <div class="containerConhecimento">
                    <h2>Habilidades</h2>
                    <div class="conhecimentos-ul">
                        <ul>
                            <li>
                                <img src={html} alt="HTML"/>
                                <div class="barra-content">
                                    <div class="barra">
                                        <div class="barra2 fifty"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={css} alt="CSS"/>
                                <div class="barra-content">
                                    <div class="barra">
                                        <div class="barra2 fifty"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={javascript} alt="Javascript"/>
                                <div class="barra-content">
                                    <div class="barra">
                                        <div class="barra2 fourty"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={react} alt="React"/>
                                <div class="barra-content">
                                    <div class="barra">
                                        <div class="barra2 fourty"></div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <img src={python} alt="Python"/>
                                <div class="barra-content">
                                    <div class="barra">
                                        <div class="barra2 thirty"></div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default Habilidades;