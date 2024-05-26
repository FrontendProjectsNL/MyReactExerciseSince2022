import { useState } from 'react';

const MyForm2 = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    return (
        <>
      <form>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {/* Other form elements and submit button */}
      </form>
     <div>
      
   <>
   {formData.username ? (<p>username: {formData.username}</p>) : null}
   {formData.email ? (<p>email: {formData.email}</p>) : null}
   {formData.password ? (<p>password: {formData.password}</p>) : null }
   </>
      
    </div>
        </>
    );
  };
  export default MyForm2;
