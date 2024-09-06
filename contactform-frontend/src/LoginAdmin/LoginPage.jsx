import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, password } = credentials;

  
    if (id === 'admin' && password === 'adminpass') {
      navigate('/admin');
    } else {
      setError('Invalid ID or Password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID</label>
            <input
              type="text"
              name="id"
              value={credentials.id}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
