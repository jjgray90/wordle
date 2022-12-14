import { createContext, useState, useEffect } from "react";

const WordContext = createContext();

export const WordProvider = ({ children }) => {
  const [word, setWord] = useState();
  const [guessWord, setGuessWord] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const [loser, setLoser] = useState(false);
  const [rowOne, setRowOne] = useState(false);
  const [rowTwo, setRowTwo] = useState(false);
  const [rowThree, setRowThree] = useState(false);
  const [rowFour, setRowFour] = useState(false);
  const [rowFive, setRowFive] = useState(false);
  const [rowSix, setRowSix] = useState(false);
  const [rowNum, setRowNum] = useState(1);

  const getWord = async () => {
    try {
      const response = await fetch(
        "https://random-word-api.herokuapp.com/word?length=5"
      );
      if (!response.ok) {
        throw new Error(response.status + " error with request");
      }
      const data = await response.json();
      setWord(...data);
    } catch (error) {
      alert(error.message);
    }
  };

  const cleanWord = (setWord, word) => setWord(word.toUpperCase().split(""));

  const handleUpdateGuessWord = (input) => {
    if (guessWord.length < 5) {
      setGuessWord((currentState) => {
        const newArr = [...currentState];
        newArr.push(input);
        return newArr;
      });
    }
  };

  const handleBackspace = () => {
    setGuessWord((currentState) => {
      const newArr = [...currentState];
      newArr.pop();
      return newArr;
    });
  };

  const checkCorrect = (a, b) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const checkLetters = (setRowState, guessWord, correctWord) => {
    const tempArr = [];
    const tempWord = [...correctWord];
    let delay = 0;

    for (let i = 0; i < guessWord.length; i++) {
      if (
        tempWord.includes(guessWord[i]) &&
        guessWord[i] !== tempWord[i] &&
        ((guessWord[i] === tempWord[i + 1] &&
          guessWord[i] === guessWord[i + 1]) ||
          (guessWord[i] === tempWord[i + 2] &&
            guessWord[i] === guessWord[i + 2]) ||
          (guessWord[i] === tempWord[i + 3] &&
            guessWord[i] === guessWord[i + 3]) ||
          (guessWord[i] === tempWord[i + 4] &&
            guessWord[i] === guessWord[i + 4]))
      ) {
        tempArr.push({ char: guessWord[i], col: "grey", delay });
      } else if (
        tempWord.includes(guessWord[i]) &&
        guessWord[i] !== tempWord[i]
      ) {
        tempArr.push({ char: guessWord[i], col: "yellow", delay });
      } else if (guessWord[i] === tempWord[i]) {
        tempArr.push({ char: guessWord[i], col: "green", delay });
        tempWord[i] = "*";
      } else tempArr.push({ char: guessWord[i], col: "grey", delay });
      delay += 0.2;
    }
    setRowState(tempArr);
    setUsedLetters([...usedLetters, ...tempArr]);
  };

  const handleSubmit = () => {
    if (guessWord.length === 5) {
      if (!rowOne) {
        checkLetters(setRowOne, guessWord, word);
        setRowNum(2);
      } else if (!rowTwo) {
        checkLetters(setRowTwo, guessWord, word);
        setRowNum(3);
      } else if (!rowThree) {
        checkLetters(setRowThree, guessWord, word);
        setRowNum(4);
      } else if (!rowFour) {
        checkLetters(setRowFour, guessWord, word);
        setRowNum(5);
      } else if (!rowFive) {
        checkLetters(setRowFive, guessWord, word);
        setRowNum(6);
      } else if (!rowSix) {
        checkLetters(setRowSix, guessWord, word);
      }

      setGuessWord([]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Backspace") {
        handleBackspace();
      }
    });

    return () => window.removeEventListener("keydown", handleBackspace);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    });

    return () => window.removeEventListener("keydown", handleSubmit);
  }, [guessWord]); // eslint-disable-line

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== "Backspace")
        handleUpdateGuessWord(event.key.toUpperCase());
    });

    return () => window.removeEventListener("keydown", handleUpdateGuessWord);
  }, []); // eslint-disable-line

  useEffect(() => {
    getWord();
  }, []);

  useEffect(() => {
    if (typeof word === "string") cleanWord(setWord, word);
  }, [word]);

  useEffect(() => {
    if (rowSix && !checkCorrect(word, guessWord)) {
      setLoser(true);
    }
  }, [rowSix, word, guessWord]);

  return (
    <WordContext.Provider
      value={{
        word,
        guessWord,
        rowOne,
        rowTwo,
        rowThree,
        rowFour,
        rowFive,
        rowSix,
        rowNum,
        usedLetters,
        loser,
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
