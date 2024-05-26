import React, {useReducer, useState} from 'react'

const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.item];
      case 'REMOVE':
        return state.filter((item) => item !== action.item);
      default:
        return state;
    }
  };
  

export const UseReducerTodoListExample = () => {

    const [todos, dispatch] = useReducer(todoReducer, []);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    dispatch({ type: 'ADD', item: newTodo });
    setNewTodo('');
  };

 
    return (
        <div>
          <ul>
            {todos.map((todo) => (
              <li key={todo}>
                {todo}
                <button onClick={() => dispatch({ type: 'REMOVE', item: todo })}>Remove</button>
              </li>
            ))}
          </ul>
          <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
          <button onClick={addTodo}>Add Todo</button>
        </div>
      );
    
}
