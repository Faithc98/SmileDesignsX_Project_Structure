import React, { useState, useEffect } from 'react';

const MockupViewer = () => {
  const [mockupId, setMockupId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [viewBefore, setViewBefore] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('mockup_id');
    if (!id) {
      setError('No mockup found. Please generate a case.');
      return;
    }
    setMockupId(id);
    setImageUrl(`http://127.0.0.1:8000/mockups/${id}.png`);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h2 className="text-2xl font-bold mb-4">Smile Mockup Preview</h2>
      {error && <p className="text-red-500">{error}</p>}
      {!error && (
        <>
          <button className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setViewBefore(!viewBefore)}>
            Toggle {viewBefore ? 'After' : 'Before'}
          </button>
          <div className="border rounded shadow p-4 bg-white">
            <img
              src={viewBefore ? "/before-placeholder.jpg" : imageUrl}
              alt="Smile Mockup"
              className="max-w-full max-h-[500px] object-contain"
            />
          </div>
          <a href={imageUrl} download={`smiledesigns_mockup_${mockupId}.png`}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Download Mockup
          </a>
        </>
      )}
    </div>
  );
};

export default MockupViewer;