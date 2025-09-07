import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const MockupForm = () => {
  const [preset, setPreset] = useState('veneer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError('');

    const sessionId = localStorage.getItem('session_id');
    if (!sessionId) {
      setError('Missing session. Please re-upload.');
      return;
    }

    const formData = new FormData();
    formData.append('session_id', sessionId);
    formData.append('preset', preset);

    try {
      const res = await api.post('/generate', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      localStorage.setItem('mockup_id', res.data.mockup_id);
      navigate('/result');
    } catch (err) {
      console.error(err);
      setError('Generation failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleGenerate} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Generate Smile Mockup</h2>
        <label className="block mb-2 font-semibold">Select Preset:</label>
        <select value={preset} onChange={(e) => setPreset(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded">
          <option value="veneer">Veneer</option>
          <option value="bridge">Bridge</option>
          <option value="implant">Implant</option>
          <option value="aox">All-On-X</option>
        </select>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Generate Mockup</button>
      </form>
    </div>
  );
};

export default MockupForm;