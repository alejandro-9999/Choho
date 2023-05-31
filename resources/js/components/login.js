import React, { useContext, useState } from 'react';
import axios from 'axios';
import { TokenContext } from './TokenContext';
import { useNavigate, redirect } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { updateToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email: email,
        password: password
      });

      const token = response.data.token;
      console.log(token);
      updateToken(token);
      navigate('/main');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-2 m-2 items-center">
      <h2>Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-success" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
