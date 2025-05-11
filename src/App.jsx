import React, { useState } from 'react';
import Editor from './Components/Editor';

const App = () => {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded w-full mb-4"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Enter Editor
          </button>
        </form>
      ) : (
        <Editor username={username} />
      )}
    </div>
  );
};

export default App;
