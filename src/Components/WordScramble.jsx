import React, { useState, useEffect } from 'react';
import '../assets/WordScramble.css';

const WordScramble = () => {
    const wordsList = [
        { word: 'REACT', hint: 'A JavaScript library for building user interfaces.' },
        { word: 'NODEJS', hint: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.' },
        { word: 'HTML', hint: 'The standard markup language for documents designed to be displayed in a web browser.' },
      ];
    
      const [currentWordIndex, setCurrentWordIndex] = useState(0);
      const [scrambledWord, setScrambledWord] = useState('');
      const [userAnswer, setUserAnswer] = useState('');
      const [isCorrect, setIsCorrect] = useState(null);
      const [timer, setTimer] = useState(30);
      const [score, setScore] = useState(0);
    
      useEffect(() => {
        if (currentWordIndex < wordsList.length) {
          setNewWord();
        } else {
          endGame();
        }
      }, [currentWordIndex]);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);
    
        return () => clearInterval(interval);
      }, [currentWordIndex, timer]);
    
      const setNewWord = () => {
        const { word } = wordsList[currentWordIndex];
        const scrambled = scrambleWord(word);
        setScrambledWord(scrambled);
        setUserAnswer('');
        setIsCorrect(null);
        setTimer(30);
      };
    
      const scrambleWord = (word) => {
        const wordArray = word.split('');
        for (let i = wordArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        }
        return wordArray.join('');
      };
    
      const handleInputChange = (e) => {
        setUserAnswer(e.target.value.toUpperCase());
      };
    
      const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSubmit();
        }
      };
    
      const handleSubmit = () => {
        const { word } = wordsList[currentWordIndex];
        const correct = userAnswer === word;
        setIsCorrect(correct);
    
        if (correct) {
          setScore((prevScore) => prevScore + 1);
        }
    
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => prevIndex + 1);
        }, 2000);
      };
    
      const endGame = () => {
        // Game Over logic
        // You can display the results or navigate to a different screen/page
        console.log('Game Over');
      };
    
      return (
        <div className="word-scramble-container">
          <h1>Word Scramble Game</h1>
          {currentWordIndex < wordsList.length && (
            <>
              <div className="word-container">
                <p>Unscramble the word:</p>
                <h2>{scrambledWord}</h2>
                <p>Hint: {wordsList[currentWordIndex].hint}</p>
              </div>
              <div className="answer-container">
                <input
                  type="text"
                  value={userAnswer}
                  onChange={handleInputChange}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Your Answer"
                  disabled={isCorrect !== null}
                />
                <button onClick={handleSubmit} disabled={isCorrect !== null}>
                  Submit
                </button>
              </div>
              {isCorrect !== null && (
                <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect!'} Next word in 2 seconds.
                </div>
              )}
              <div className="timer-container">
                <p>Time Remaining: {timer} seconds</p>
              </div>
            </>
          )}
          {currentWordIndex === wordsList.length && (
            <div className="results-container">
              <h2>Game Over</h2>
              <p>Your Score: {score}</p>
              <p>Correct Answers: {score}</p>
              <p>Incorrect Answers: {wordsList.length - score}</p>
            </div>
          )}
        </div>
      );
};

export default WordScramble;
