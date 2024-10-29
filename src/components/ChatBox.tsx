// src/components/ChatBox.tsx
import { useState, useEffect } from 'react';
import { useSocket } from '../contexts/SocketContext';
import { useChannel } from '../contexts/ChannelContext';

function ChatBox() {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string; channel: string }[]>([]);
  const { socket } = useSocket();
  const { activeChannel } = useChannel();

  useEffect(() => {
    if (socket) {
      socket.on('receive_message', (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    }

    return () => {
      if (socket) socket.off('receive_message');
    };
  }, [socket]);

  const sendMessage = () => {
    const newMessage = { text: message, channel: activeChannel.name };
    socket?.emit('send_message', newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage('');
  };

  return (
    <div className="flex-1 bg-gray-700 p-4">
      <div className="overflow-y-scroll h-[80%]">
        {messages.map((msg, index) => (
          <p key={index} className="text-white">{msg.text}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        className="w-full p-2 bg-gray-800 text-white rounded-md"
        placeholder="Type a message..."
      />
    </div>
  );
}

export default ChatBox;
