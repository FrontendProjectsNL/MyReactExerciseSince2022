import React, {useState} from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform login logic
      //Hier kan je values van useState hooks gebruiken en deze bijvoorbeeld in database opslaan
    };
  


    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'}}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
        marginLeft: '20px'}}
        />
        <button type="submit" style={{marginLeft: '20px'}}>Login</button>
      </form>
    );
  };
  export default LoginForm
