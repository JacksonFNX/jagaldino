import jupiter from './Images/jupiter.png';
import foguete from './Images/foguete.png';
// import logo from './Images/logo.png'
import titulo from './Images/Jagal.png'
import GitHub from './Images/GitHub.png'
import './App.css';
function App() {
  return (
    <div className="App">
      <header id="About-header">
        <div className="Menu">
          <h1>AstroCurious</h1>
          <div className="menubotoes">
          <ul>
                  <li><a href="#About-header">Destaques</a> </li>
                  <li><a href="#Projects">Artigos</a> </li>
                  <li><a href="#Contact">Sobre</a> </li>
              </ul>
          </div>
        </div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <h1 className="titulos"><br/>Destaques</h1>
          <div className="container1">
            <div className="Destaque-des1">
            <img src={jupiter} className="foto" alt="foto" />
              <h2>
                Telescópio James Webb registra imagens de Jupiter
              </h2>
                <p className ="paragrafo">
                &nbsp;Desde que o Telescópio Espacial James Webb (JWST) deu início as suas operações, os cientistas estão tendo a chance de rever objetos já conhecidos sob outras perspectivas. Dessa vez, o alvo foi Júpiter, que teve suas luas, auroras e até mesmo tempestades reveladas.
                </p>
                <p className ="paragrafo">
                &nbsp;As imagens do planeta foram obtidas no dia 27 de julho e divulgadas pela NASA nesta segunda-feira (22). Elas foram feitas com o instrumento NIRCam (Near Infrared Camera, ou “câmera de infravermelho próximo”) do telescópio.
                </p>
            </div>
            </div>
            <div className="Destaque-des2">
            <img src={foguete} className="foto" alt="foto" />
              <h2>
              SpaceX: Starship Explode após lançamento
              </h2>
              <div className="About-cont-redes">
                <p className ="paragrafo">
                &nbsp;A empresa de foguetes SpaceX fez um segundo teste de lançamento da Starship -- considerada a nave mais poderosa do mundo. 
                </p>
                <p className ="paragrafo">
                &nbsp;A decolagem aconteceu às dez da manhã, no estado americano do Texas, mas o propulsor -- que é a parte inferior da nave -- explodiu pouco depois de se separar da cápsula, a parte superior..
                </p>
                <p className ="paragrafo">
                &nbsp;Os cientistas perderam contato com a cápsula e a missão foi encerrada. A SpaceX admitiu que sabia da possibilidade de incidentes. O objetivo era que a Starship voasse por uma hora e meia, com pouso no Oceano Pacífico.
                </p>
                <p className ="paragrafo">
                &nbsp;A empresa planeja usar essa nave para levar seres humanos à lua, nos próximos anos, e a Marte no futuro.
                </p>
            </div>
          </div>
      </header>
      <div id= "Projects">
              <h2 className="titulos">Artigos</h2>
              <div className="container3">
              <a href="https://jacksonfnx.github.io/acacafe/" target="_blank" rel="not"><br/>
              <div className="Project-block1">
                  <p>Entenda a terraformação</p>
                </div>
                  </a>
                <div className="Project-block2">
                  Em breve
                </div>
                <div className="Project-block3">
                  Em breve
                </div>
                <div className="Project-block4">
                  Em breve
                </div>
                <div className="Project-block5">
                  Em breve
                </div>
                <div className="Project-block6">
                  Em breve
                </div>
              </div>
              
      </div>
      <div id= "Contact">
              <h2 className="titulos">Sobre nós</h2>
              <br/>
              <br/>
              <p>
              jacksongaldinofnx@gmail.com
              </p>
              <br/>
              <p>
              +55 (83) 99999-9999
              </p>
              <br/>
              <p>
              Discord: FNX_#9803
              </p>
      </div>
    </div>
  );
}

export default App;
