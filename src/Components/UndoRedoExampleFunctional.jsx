import React, {useEffect, useState} from 'react'

const UndoRedoExampleFunctional = () => {
    const [history, setHistory] = useState(10);
    const [currentState, setCurrentState] = useState(10);
    const [data, setData] = useState();


    const handleUndo = () => {
      if (currentState > 0) {
        setCurrentState(currentState - 1);
      }
    };
  
    const handleRedo = () => {
      if (currentState < history.length - 1) {
        setCurrentState(currentState + 1);
      }
    };
  
    const currentData = history[currentState];

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:5173/db.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
  

    return (
      <div>
        <ul>
            <li key={currentState}>{currentState}</li>
            <li key={currentData}>{currentData}</li>
        </ul>
        
        

        <div>
          <button onClick={handleUndo} disabled={currentState === 0}>
            Undo
          </button>
          <button onClick={handleRedo} disabled={currentState === history.length - 1}>
            Redo
          </button>
        </div>
        <div>
          {data.data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </div>
      </div>
    );
  
}

export default UndoRedoExampleFunctional
