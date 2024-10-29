// src/components/UserPanel.tsx

import { CogIcon } from "@heroicons/react/16/solid";


function UserPanel() {
  const isOnline = true; // Aquí puedes hacer lógica para el estado real del usuario

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 border-t border-gray-700">
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-600'}`} />
        <div className="ml-2">
          <h3 className="text-sm font-medium">Username</h3>
          <p className="text-xs text-gray-400">#1234</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-white">
        <CogIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default UserPanel;
