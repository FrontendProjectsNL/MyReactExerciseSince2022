import React, { useEffect, useState } from 'react'


const Test = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = (e) => {
        
      }
    
      return (
        <form onSubmit={handleSubmit}>
            <div>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder='username'
          />
            </div>
            <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='email'
          />
            </div>
            <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='password'
          />
            </div>
          {/* Other form elements and submit button */}
        </form>
      );
    
}

export default Test
