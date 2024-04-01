import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import HeroBoard from "./Components/HeroBoard";
import About from "./Components/About";
import Design from "./Design/Design";

function App() {
  return (
    <div className="App bg-gradient-to-r from-black h-[100vh]">
      <Header />
      <HeroBoard />
    </div>
  );
}

export default App;
