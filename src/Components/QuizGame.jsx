import React, { useState, useEffect, useRef } from 'react';
import '../assets/QuizGame.css';

const QuizGame = () => {
  const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Whale Shark', 'Blue Whale', 'Giraffe'],
      correctAnswer: 'Blue Whale',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);
  const [timer, setTimer] = useState(10); // Set the initial timer
  const timerRef = useRef(null);

  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            handleTimeout();
          }
          return prevTimer - 1;
        });
      }, 1000);
    };

    if (currentQuestionIndex < quizData.length) {
      startTimer();
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentQuestionIndex, selectedAnswer]);

  useEffect(() => {
    if (timer === 0 && currentQuestionIndex < quizData.length) {
      handleTimeout();
    }
  }, [timer, currentQuestionIndex]);

  const handleOptionClick = (option) => {
    if (!selectedAnswer) {
      const isCorrect = option === quizData[currentQuestionIndex].correctAnswer;
      setResults((prevResults) => [...prevResults, { option, isCorrect }]);
      setSelectedAnswer(option);

      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }

      setTimeout(() => {
        setSelectedAnswer('');
        goToNextQuestion();
      }, 1000);
    }
  };

  const handleTimeout = () => {
    setResults((prevResults) => [...prevResults, { option: '', isCorrect: false }]);
    setSelectedAnswer('');

    clearInterval(timerRef.current); // Clear the interval before moving to the next question

    setTimeout(() => {
      goToNextQuestion();
    }, 1000);
  };

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;

      if (nextIndex < quizData.length) {
        setTimer(10); // Reset the timer for the next question
        return nextIndex;
      } else {
        endQuiz();
        return prevIndex;
      }
    });
  };

  const endQuiz = () => {
    setQuizEnded(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer('');
    setScore(0);
    setResults([]);
    setQuizEnded(false);
  };

  const timerDisplay = currentQuestionIndex < quizData.length && (
    <div className="timer-container">
      <p>Time Remaining: {timer} seconds</p>
    </div>
  );

  return (
    <div className="quiz-container">
      {quizEnded ? (
        <div className="results-container">
          <h2>Quiz Results</h2>
          <p>Your Score: {score}</p>
          <ul>
            {results.map((result, index) => (
              <li key={index} className={result.isCorrect ? 'correct' : 'incorrect'}>
                {result.isCorrect ? 'Correct' : 'Incorrect'}: {result.option}
              </li>
            ))}
          </ul>
          <button className="reset-button" onClick={resetQuiz}>
            Reset Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-container">
            <h2>{quizData[currentQuestionIndex].question}</h2>
            <div className="options-container">
              {quizData[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`option ${selectedAnswer === option ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          {timerDisplay}
        </>
      )}
    </div>
  );
};

export default QuizGame;
