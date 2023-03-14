import './App.css';
import Footer from './components/Footer';
import Habilidades from './components/Habilidades';
import Header from './components/Header'
import Inicio from './components/Inicio';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';


function App() {
  return (
    <div>
    <Header />
    <Inicio />
    <Sobre />
    <Projetos />
    <Habilidades />
    <Footer />
    </div>
   
  );
}

export default App;
