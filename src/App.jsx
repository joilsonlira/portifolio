import "./styles/global.css";

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
      
      <footer>
        <p>{Nome} de tal with <b>React.js &#9889;</b>.</p>
      </footer>
    </main>
  )
}

export default App
