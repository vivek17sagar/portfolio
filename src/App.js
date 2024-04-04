import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import HeroBoard from "./Components/HeroBoard";
import About from "./Components/About";
import Design from "./Design/Design";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App bg-[#0f0d0e] -z-50">
      <Header />
      <HeroBoard />
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
