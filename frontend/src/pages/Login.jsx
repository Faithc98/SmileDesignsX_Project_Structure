import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/upload');
    } catch (err) {
      console.error(err);
      setError('Login failed. Check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">SmileDesignsX Login</h2>
        <input type="email" placeholder="Email" className="w-full mb-4 px-3 py-2 border rounded"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full mb-4 px-3 py-2 border rounded"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Log In</button>
      </form>
    </div>
  );
};

export default Login;