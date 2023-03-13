import './style.css'
import imgRafa from '../../assets/rafael-portfolio.png'

function Sobre() {
    return (
        <div className="containerSobre">
            <div className='divImage'>
                <img src={imgRafa} alt=''></img>
            </div>
            <div className='divTextSobre'>
                <h2>Sobre mim</h2>
                <p>Desenvolvedor Web</p>
                <br></br><br></br>
                <p>Me chamo Rafael Vieira, tenho 18anos. Sou aluno na
                    Escola SENAI Suiço-Brasileira Paulo Ernesto Tolle, onde estou estudando Desenvolvimento de Sistemas. Busco uma vaga de experiência como desenvolvedor
                    (estagiário ou júnior), para aprender e aperfeiçoar minhas competências técnicas e profissionais.
                </p>
            </div>
        </div>
    );
}

export default Sobre;