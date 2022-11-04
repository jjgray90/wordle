import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import WordGrid from "./components/WordGrid/WordGrid";
import Keyboard from "./components/Keyboard/Keyboard";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <WordGrid />
      <Keyboard />
    </div>
  );
};

export default App;
