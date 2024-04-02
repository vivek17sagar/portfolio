import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import HeroBoard from "./Components/HeroBoard";
import About from "./Components/About";
import Design from "./Design/Design";

function App() {
  return (
    <div className="App bg-black -z-50">
      <Header />
      <HeroBoard />
      <About/>
    </div>
  );
}

export default App;
