import React, { useState, useEffect } from 'react';
import '../assets/QuizOnlineAPI.css';

const QuizOnlineAPI = () => {
    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false);
    const [timer, setTimer] = useState(30);
  
    useEffect(() => {
      fetchQuestions();
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [currentQuestionIndex]);
  
    useEffect(() => {
      if (timer === 0) {
        handleTimeout();
      }
    }, [timer]);
  
    useEffect(() => {
      if (currentQuestionIndex < questions.length) {
        setTimer(30);
      }
    }, [currentQuestionIndex, questions]);
  
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
        const data = await response.json();
  
        if (data.results) {
          setQuestions(data.results);
          setUserAnswers(Array(data.results.length).fill(null));
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
  
    const handleOptionClick = (option) => {
      if (!selectedAnswer) {
        const isCorrect = option === questions[currentQuestionIndex].correct_answer;
        setSelectedAnswer(option);
        updateUserAnswers(option);
  
        if (isCorrect) {
          setScore((prevScore) => prevScore + 1);
        }
  
        setTimeout(() => {
          setSelectedAnswer('');
          goToNextQuestion();
        }, 1000);
      }
    };
  
    const updateUserAnswers = (answer) => {
      setUserAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = answer;
        return updatedAnswers;
      });
    };
  
    const goToNextQuestion = () => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  
      if (currentQuestionIndex === questions.length - 1) {
        endQuiz();
      }
    };
  
    const handleTimeout = () => {
      updateUserAnswers('Not answered');
      goToNextQuestion();
    };
  
    const endQuiz = () => {
      setQuizEnded(true);
    };
  
    const resetQuiz = () => {
      setQuestions([]);
      setUserAnswers([]);
      setCurrentQuestionIndex(0);
      setSelectedAnswer('');
      setScore(0);
      setQuizEnded(false);
      setTimer(30);
      fetchQuestions();
    };
  
    return (
      <div className="quiz-container">
        {quizEnded ? (
          <div className="results-container">
            <h2>Quiz Results</h2>
            <p>Your Score: {score}</p>
            <ul className="question-summary">
              {questions.map((question, index) => (
                <li key={index}>
                  <strong>Question:</strong> {question.question}
                  <br />
                  <strong>Correct Answer:</strong> {question.correct_answer}
                  <br />
                  <strong>Your Answer:</strong> {userAnswers[index] || 'Not answered'}
                </li>
              ))}
            </ul>
            <button className="reset-button" onClick={resetQuiz}>
              Start New Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="question-container">
              <h2 dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex]?.question }} />
              <div className="options-container">
                {questions[currentQuestionIndex]?.incorrect_answers.map((option, index) => (
                  <button
                    key={index}
                    className={`option ${selectedAnswer === option ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(option)}
                    dangerouslySetInnerHTML={{ __html: option }}
                  />
                ))}
                <button
                  className={`option ${selectedAnswer === questions[currentQuestionIndex]?.correct_answer ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(questions[currentQuestionIndex]?.correct_answer)}
                  dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex]?.correct_answer }}
                />
              </div>
            </div>
            <div className="timer-container">
              <p>Time Remaining: {timer} seconds</p>
            </div>
          </>
        )}
      </div>
    );
};

export default QuizOnlineAPI;
