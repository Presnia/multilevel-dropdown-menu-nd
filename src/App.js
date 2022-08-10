import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
      <header>
        <div className="nav-area">
          <a href="/#" className="logo">
            Logo
          </a>
          <NavBar />
        </div>
      </header>
  );
}

export default App;
