// src/components/ChatWindow.tsx
import { useState } from 'react';

function ChatWindow() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col flex-grow p-4 overflow-y-auto space-y-4">
      {/* Messages */}
      {messages.map((message, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gray-600 rounded-full" />
          <div>
            <div className="text-sm font-semibold text-gray-300">Username</div>
            <div className="text-sm text-gray-400">{message}</div>
          </div>
        </div>
      ))}

      {/* Message Input */}
      <div className="flex items-center p-4 border-t border-gray-700">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-grow p-2 bg-gray-800 text-white rounded-lg outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
