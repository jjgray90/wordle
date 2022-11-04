import { createContext, useState } from "react";

const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [word, setWord] = useState(["F", "A", "I", "T", "H"]);
  const [guessWord, setGuessWord] = useState("");

  const handleUpdateGuessWord = (input) => {
    if (guessWord.length < 5) setGuessWord([...guessWord, input]);
  };

  const handleBackspace = () => {
    setGuessWord((currentState) => {
      const newArr = [...currentState];
      newArr.pop();
      return newArr;
    });
  };

  const handleSubmit = () => {
    if (guessWord.length === 5) console.log(guessWord + " submitted");
  };

  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
        guessWord,
        setGuessWord,
        handleUpdateGuessWord,
        handleBackspace,
        handleSubmit,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export default WordContext;
