// src/components/Sidebar.tsx
import { UserIcon, CogIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import ChannelsList from './channels/ChannelsList';
import UserPanel from './user/UserPanel';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/outline';

const servers = ['1', '2', '3'];

function Sidebar() {
  const [selectedServer, setSelectedServer] = useState<string | null>(servers[0]);

  return (
    <div className="flex flex-col w-60 bg-gray-900 text-white">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold justify-center py-4 border-b border-gray-800">
        Talki
      </div>
      {/* Servers List */}
      <div className="flex flex-col items-center py-4 space-y-2 border-b border-gray-800">
        {servers.map((server) => (
          <button
            key={server}
            className={`w-10 h-10 rounded-full ${
              selectedServer === server ? 'bg-blue-600' : 'bg-gray-700'
            } hover:bg-blue-500`}
            onClick={() => setSelectedServer(server)}
          >
            {server[0].toUpperCase()}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center py-6 space-y-6">
        <button className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
          <UserIcon className="h-6 w-6 mr-3" />
          <span className="hidden md:inline">Friends</span>
        </button>
        <button className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
          <ChatBubbleLeftEllipsisIcon className="h-6 w-6 mr-3" />
          <span className="hidden md:inline">Messages</span>
        </button>
        <button className="flex items-center p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
          <CogIcon className="h-6 w-6 mr-3" />
          <span className="hidden md:inline">Settings</span>
        </button>
      </nav>

      {/* Channel List for Selected Server */}
      <ChannelsList selectedServer={selectedServer} />

      {/* User Panel */}
      <UserPanel />
    </div>
  );
}

export default Sidebar;
