import React, { useState } from 'react';
import '../assets/TicTacToe.css'

const TicTacToe = () => {
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [xIsNext, setXIsNext] = useState(true);
  
    const handleClick = (index) => {
      const newBoard = [...board];
  
      if (calculateWinner(newBoard) || newBoard[index]) {
        return;
      }
  
      newBoard[index] = xIsNext ? 'X' : 'O';
      setBoard(newBoard);
      setXIsNext(!xIsNext);
    };
  
    const handleReset = () => {
      setBoard(initialBoard);
      setXIsNext(true);
    };
  
    const renderSquare = (index) => {
      return (
        <button className="square" onClick={() => handleClick(index)}>
          {board[index]}
        </button>
      );
    };
  
    const winner = calculateWinner(board);
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? 'X' : 'O'}`;
  
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    );
  };

// Helper function to determine the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export default TicTacToe;
