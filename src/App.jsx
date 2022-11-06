import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import WordGrid from "./components/WordGrid/WordGrid";
import Keyboard from "./components/Keyboard/Keyboard";
import { WordProvider } from "./context/WordContext";

const App = () => {
  return (
    <WordProvider>
      <div className="app">
        <NavBar />
        <WordGrid />
        <Keyboard />
      </div>
    </WordProvider>
  );
};

export default App;
