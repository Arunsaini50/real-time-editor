import React, { useEffect, useRef, useState } from 'react';

const Editor = ({ username }) => {
  const [lines, setLines] = useState([]);
  const channel = useRef(null);
  const editorRef = useRef(null);
  const STORAGE_KEY = 'realtime-editor-lines';

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setLines(JSON.parse(saved));
    }

    // Setup BroadcastChannel
    channel.current = new BroadcastChannel('editor_channel');

    channel.current.onmessage = (event) => {
      const { updatedLines, sender } = event.data;
      if (sender !== username) {
        setLines(updatedLines);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLines));
      }
    };

    return () => {
      channel.current.close();
    };
  }, [username]);

  const handleLineChange = (index, value) => {
    const updated = [...lines];
    updated[index] = { text: value, editedBy: username };

    setLines(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    channel.current.postMessage({
      updatedLines: updated,
      sender: username,
    });
  };

  const handleAddLine = () => {
    setLines([...lines, { text: '', editedBy: username }]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="mb-4 text-gray-700 font-medium">
        Logged in as: <span className="text-blue-600">{username}</span>
      </div>

      <div className="space-y-2">
        {lines.map((line, index) => (
          <div key={index} className="flex items-start gap-2">
            <textarea
              rows={1}
              value={line.text}
              onChange={(e) => handleLineChange(index, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded shadow-sm resize-none focus:outline-none"
            />
            <span className="text-sm text-gray-500 pt-2 whitespace-nowrap">
              {line.editedBy}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddLine}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        ➕ Add Line
      </button>
    </div>
  );
};

export default Editor;
