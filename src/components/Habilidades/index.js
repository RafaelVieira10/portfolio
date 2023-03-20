import './style.css'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import python from '../../assets/python.png'
import react from '../../assets/react.png'
import csharp from '../../assets/csharp.png'
import { habilidades } from './listHabilidades'
import CardHabilidades from '../CardHabilidades'

function Habilidades() {
    return(
        <div className='contentHabilidades' id='habilidades'>
            <div class="containerConhecimento">
                    <h2>Habilidades</h2>
                    {habilidades.habilidades.map((habilidade, index ) => {
                        return(
                            <CardHabilidades key={index} projeto={habilidade}/>
                            );
                        })}
                </div>
        </div>
    );
}

export default Habilidades;