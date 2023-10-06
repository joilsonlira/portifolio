import "./styles/global.css";

// Reaproveitamento de estruturas
import { Link, Outlet } from "react-router-dom";

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
              {/* links para navegação */}
              <Link to={"/"}>
                <a href="#">home</a>
              </Link>
              <Link to={"projects"}>
                <a href="#">projects</a>
              </Link>
              <Link to={"contacts"}>
                <a href="#">contacts</a>
              </Link>
            </nav>
          </div>  
        </div>
      </header>

      <Outlet />
      
      <footer>
        <p>powered by {Nome} with <b>React.js &#9889;</b>.</p>
      </footer>
    </main>
  )
}

export default App
