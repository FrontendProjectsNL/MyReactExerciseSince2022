import React, {useReducer} from 'react'

const formReducer = (state, action) => {
    return { ...state, [action.field]: action.value };
  };
  

const UseReducerExampleFormHandling = () => {
    const [formState, dispatch] = useReducer(formReducer, { name: '', email: '' });

    const handleInputChange = (field, value) => {
      dispatch({ type: 'UPDATE_FIELD', field, value });
    };
  
    return (
        
      <div>
        <ul>
                <>
                <li key={formState.name}>
                    {formState.name}
                </li>
                <li key={formState.email}>
                {formState.email}
            </li>
                </>

        </ul>
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>
    );
  
}

export default UseReducerExampleFormHandling
