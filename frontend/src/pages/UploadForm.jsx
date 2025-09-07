import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const UploadForm = () => {
  const [stlFile, setStlFile] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!stlFile || !photoFile) {
      setError('Please upload both STL and photo.');
      return;
    }

    const formData = new FormData();
    formData.append('stl_file', stlFile);
    formData.append('photo_file', photoFile);

    try {
      const res = await api.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      localStorage.setItem('session_id', res.data.session_id);
      navigate('/generate');
    } catch (err) {
      console.error(err);
      setError('Upload failed. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload STL + Photo</h2>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">STL File:</label>
          <input type="file" accept=".stl" onChange={(e) => setStlFile(e.target.files[0])} className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Facial Photo:</label>
          <input type="file" accept="image/*" onChange={(e) => setPhotoFile(e.target.files[0])} className="w-full" />
        </div>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Upload Files</button>
      </form>
    </div>
  );
};

export default UploadForm;