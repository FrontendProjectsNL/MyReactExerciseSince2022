import React, { useState, useEffect } from 'react';
import '../assets/WordGuessingGame.css';

const WordGuessingGame = () => {
  const wordsList = [
    'REACT', 'JAVASCRIPT', 'HTML', 'CSS', 'NODEJS',
    'DATABASE', 'COMPUTER', 'PROGRAMMING', 'DEVELOPMENT', 'FRONTEND',
    'BACKEND', 'FRAMEWORK', 'LIBRARY', 'API', 'INTERFACE',
    'DATABASE', 'COMPONENT', 'RENDER', 'STATE', 'PROPS',
    'FUNCTION', 'EVENT', 'HANDLER', 'ASYNC', 'AWAIT',
    'RESPONSIVE', 'DESIGN', 'UXUI', 'ALGORITHM', 'DATASTRUCTURE'
  ];

  const getRandomIndexes = (max, count) => {
    const indexes = [];
    while (indexes.length < count) {
      const index = Math.floor(Math.random() * max);
      if (!indexes.includes(index)) {
        indexes.push(index);
      }
    }
    return indexes;
  };

  const hideLetters = (word, indexes) => {
    return word
      .split('')
      .map((letter, index) => (indexes.includes(index) ? letter : '_'))
      .join('');
  };

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    const word = wordsList[randomIndex];
    const minVisiblePercent = 0.35;
    const maxVisiblePercent = 0.5;
    const visiblePercent = Math.random() * (maxVisiblePercent - minVisiblePercent) + minVisiblePercent;
    const visibleCount = Math.floor(word.length * visiblePercent);
    const hiddenIndexes = getRandomIndexes(word.length, Math.min(visibleCount, word.length - 1));

    return {
      originalWord: word,
      displayWord: hideLetters(word, hiddenIndexes),
      hiddenIndexes: hiddenIndexes,
    };
  };

  const maxQuestions = 10;
  const maxTries = 3;
  const maxTime = 30;

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [wordInfo, setWordInfo] = useState(getRandomWord());
  const [userGuess, setUserGuess] = useState('');
  const [triesLeft, setTriesLeft] = useState(maxTries);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timer, setTimer] = useState(maxTime);
  const [gameOver, setGameOver] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setWordInfo(getRandomWord());
    setTriesLeft(maxTries);
    setTimer(maxTime);
    setIsCorrect(false);
  }, [currentQuestion]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      if (timer === 0) {
        handleTimeout();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, gameOver]);

  const handleTimeout = () => {
    if (!gameOver) {
      setIsCorrect(false);
      setTriesLeft((prevTries) => prevTries - 1);
      setResults((prevResults) => [...prevResults, { question: currentQuestion, correct: false }]);
      if (currentQuestion === maxQuestions) {
        setGameOver(true);
      } else {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }
    }
  };

  useEffect(() => {
    if (userGuess.toUpperCase() === wordInfo.originalWord) {
      setIsCorrect(true);
      setResults((prevResults) => [...prevResults, { question: currentQuestion, correct: true }]);
      if (currentQuestion === maxQuestions) {
        setGameOver(true);
      } else {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }
    }
  }, [userGuess, wordInfo.originalWord, currentQuestion]);

  const handleInputChange = (e) => {
    setUserGuess(e.target.value.toUpperCase());
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!gameOver) {
      if (userGuess.toUpperCase() === wordInfo.originalWord) {
        setIsCorrect(true);
        setResults((prevResults) => [...prevResults, { question: currentQuestion, correct: true }]);
        if (currentQuestion === maxQuestions) {
          setGameOver(true);
        } else {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
      } else {
        setIsCorrect(false);
        setTriesLeft((prevTries) => prevTries - 1);
        setResults((prevResults) => [...prevResults, { question: currentQuestion, correct: false }]);
        if (currentQuestion === maxQuestions) {
          setGameOver(true);
        } else {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(1);
    setWordInfo(getRandomWord());
    setUserGuess('');
    setTriesLeft(maxTries);
    setIsCorrect(false);
    setTimer(maxTime);
    setGameOver(false);
    setResults([]);
  };

  const calculateScore = () => {
    const correctAnswers = results.filter((result) => result.correct).length;
    return correctAnswers;
  };

  return (
    <div className="word-guessing-game-container">
      <h1>Word Guessing Game</h1>
      {!gameOver && (
        <>
          <p>Question {currentQuestion}:</p>
          <div className="word-container">
            {wordInfo.displayWord.split('').map((letter, index) => (
              <div key={index} className="square">
                {isCorrect || wordInfo.hiddenIndexes.includes(index) ? letter : '_'}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={userGuess}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Your Guess"
            disabled={isCorrect}
          />
          <button onClick={handleSubmit} disabled={isCorrect} style={{background: '#333'}}>
            Submit
          </button>
          <p>Tries Left: {triesLeft}</p>
          <p>Time Remaining: {timer} seconds</p>
        </>
      )}
      {gameOver && (
        <>
          <h2>Game Over</h2>
          <p>Your Score: {calculateScore()} / {maxQuestions}</p>
          <p>Results:</p>
          <ul>
            {results.map((result) => (
              <li key={result.question}>
                Question {result.question}: {result.correct ? 'Correct' : 'Incorrect'}
              </li>
            ))}
          </ul>
          <button onClick={handleRestart} style={{background: '#333'}}>Restart</button>
        </>
      )}
      {!gameOver && timer === 0 && (
        <>
          <h2>Time's up!</h2>
          <button onClick={handleRestart} style={{background: '#333'}}>Restart</button>
        </>
      )}
    </div>
  );
};

export default WordGuessingGame;
