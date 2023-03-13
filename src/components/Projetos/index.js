import './style.css'
import Slider from "react-slick";

function Projetos() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div className="containerProjetos">
            <div className='divTitle'>
                <h2>Projetos</h2>
            </div>

            <div className='containerCarrosel'>
            <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
            </div>
        </div>
    );
}

export default Projetos;