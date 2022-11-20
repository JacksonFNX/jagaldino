import foto from './Images/red.png';
// import logo from './Images/logo.png'
import titulo from './Images/Jagal.png'
import './App.css';
function App() {
  return (
    <div className="App">
      <header id="About-header">
        <div className="Menu">
          <img src={titulo} className="Menu-titulo" alt="linkedin"/>
          <div className="menubotoes">
          <ul>
                  <li><a href="#About-header">Sobre</a> </li>
                  <li><a href="#Projects">Projetos</a> </li>
                  <li><a href="#Contact">Contato</a> </li>
              </ul>
          </div>    
        </div>
        <h1 className="titulos"><br/>Sobre</h1>
        <div className="container1">
          <div className="About-group-redes">
            <img src={foto} className="About-foto" alt="foto" />
            <h2>
              Jackson Galdino
            </h2>
            <div className="About-cont-redes">
              <div className="About-redes">
                <a
                  className="About-link"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="About-icone" alt="linkedin"/> 
                  Linkedin
                </a>
              </div>
              <div className="About-redes">
                <a
                  className="About-link"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src="https://github.githubassets.com/favicons/favicon-dark.png" className="About-icone" alt="linkedin"/> 
                  GitHub
                </a>
              </div>
              <div className="About-redes">
                <a
                  className="About-link"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yB/r/-7Z_RkdLJUX.png" className="About-icone" alt="Instagram"/> 
                  Instagram
                </a>
              </div>
              {/* <div className="About-redes">
                <a
                  className="About-link"
                  href="https://www.linkedin.com/in/jackson-galdino-651548197/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-7-1.png" className="About-icone" alt="linkedin"/> 
                  Discord
                </a>
              </div> */}
            </div>
          </div>
          <div className="About-group-desc">
              <h3>Quem sou eu?</h3>
              <p> &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p> <br/>
              <h3>Tecnologias:</h3>
              <br/>
              <div className="About-group-tec">
                <img src="https://xesque.rocketseat.dev/platform/tech/javascript.svg" className="About-desc-icone" alt="Javascript"/> 
                Javascript
              </div>
              <div className="About-group-tec">
                <img src="https://xesque.rocketseat.dev/platform/tech/reactjs.svg" className="About-desc-icone" alt="ReactJS"/> 
                ReactJS
              </div>
              <div className="About-group-tec">
                <img src="https://xesque.rocketseat.dev/platform/tech/html5.svg" className="About-desc-icone" alt="HTML"/> 
                HTML
              </div>
              <div className="About-group-tec">
                <img src="https://xesque.rocketseat.dev/platform/tech/css3.svg" className="About-desc-icone" alt="CSS"/> 
                CSS
              </div>
          </div>
        </div>
      </header>
      <div id= "Projects">
              <h2 className="titulos">Projetos</h2>
              <div className="container3">
                <div className="Project-block1">
                  Cafeteria (acadêmico)
                  <a href="https://jacksonfnx.github.io/acacafe/" target="_blank" rel="noopener noreferrer"><br/>
                    <div className="botao-visitar">
                    VISITAR
                    </div>
                  </a>
                </div>
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
              <h2 className="titulos">Contato</h2>
              <br/>
              <br/>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              </p>
              <br/>
              <p>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <br/>
              <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
      </div>
    </div>
  );
}

export default App;
