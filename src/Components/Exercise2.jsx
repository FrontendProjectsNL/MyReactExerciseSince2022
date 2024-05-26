import React, { useEffect, useState } from "react";

const Exercise2 = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timer, setTimer] = useState(15);
  const [results, setResults] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);
  const [score, setScore] = useState(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer((prevTimer) => {
  //       const newTimer = prevTimer - 1;
  //       return newTimer >= 0 ? newTimer : 0; // Ensure the timer doesn't go below 0
  //     });

  //     if (timer === 0) {
  //       clearInterval(interval);
  //       // Do any additional logic you need when the timer reaches 0
  //     }
  //   }, 1000);

  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, [timer]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5173/questions.json');
  //       if (!response.ok) throw new Error("Couldn't fetch data");
  //       const data = await response.json();
  //       console.log("===================");
  //       console.log(data.data);
  //       setQuestions(data.data); // Just set the state without logging
  //       console.log("===================");
  //     } catch (error) {
  //       console.log("Something went wrong! Error: ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
      correctAnswer: "Blue Whale",
    },
  ];

  useEffect(() => {
    let timerInterval;

    if (currentQuestionIndex < quizData.length) {
      setTimer(100); // Set the initial timer for each question
      timerInterval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            console.log("****************");
            console.log("****************");
            console.log("****************");
            console.log("****************");
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [currentQuestionIndex]);

  return (
    <>
      {/* {questions ? ( */}

      <div style={{ width: "50%", margin: "0 auto" }}>
        <h3>Time left:</h3>
        <p>{timer}</p>{" "}
      </div>
    </>
  );
};

export default Exercise2;
