import "./styles/global.css";
import j from "./assets/j-icon.png"

// Reaproveitamento de estruturas
import { Outlet } from "react-router-dom";

const Nome = "fulano de tal";

function App() {

  return (
    <main>
      <header className="main-header">
        <div className="content-header">
          <div className="box">
            <div className="logo">
              {/* <div className="icon-logo">
                <img src={j} alt="icon" />
              </div> */}
              <h2><b>{"< "}</b>{Nome}<b>{" />"}</b></h2>
            </div>
            <nav>
              <a href="#">home</a>
              <a href="#">projects</a>
              <a href="#">contato</a>
            </nav>
          </div>  
        </div>
      </header>
      <Outlet />
      {/* <section>
        <div className="content">
          <figure className="content-foto">
            <img src="https://img.freepik.com/fotos-premium/feliz-jovem-adulto-afro-americano-andando-no-parque-usando-fones-de-ouvido_113876-3750.jpg" alt="photo" />
          </figure>
          <div className="content-info">
            <div className="description">
              <h2>Ola!</h2>
              <p>Me chamo {Nome}. Sou estudante de <b>Analise e desenvolvimento de Sistemas</b>, desenvolvedor <b>Front-end</b>, apaixonado por games e entusiasta no mundo <b>Open Source</b>.</p>
            </div>
            <div className="social">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="second">
        <div className="content">
          <div className="content-info">
            <h2>Sobre mim</h2>
            <p>
            Estudo desenvolvimento desde <b>2020</b>, faço faculdade de analise e desenvolvimento de Sistemas, e atualmente busco recolocação profissional. Utilizo em meus projetos principalmente tecnologias para o desenvolvimento front-end, com foco no Javascript, <b>Typescript</b> e <b>React.js</b>.
            </p>
            <p>
            Sou apaixonado por videogames, sempre que posivel estouo ouvindo música, espero um dia ficar em dia com os episodios de One Piece e conseguir usar a tecnologia para ajudar as pessoas.
            </p>
            <button>acessar curriculo</button>
          </div>
          <div className="content-extra">
            <h2>Hard skills</h2>
            <div className="box-extra">
                <div className="row-language">
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                </div>
                <div className="row-language">
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                </div>
                <div className="row-language">
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                  <div className="language">
                    <div className="icon-language">
                      <img src="#" alt="language" />
                    </div>
                    <p>exemplo text</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section> */}
      <footer>
        <p>{Nome} de tal with <b>React.js &#9889;</b>.</p>
      </footer>
    </main>
  )
}

export default App
