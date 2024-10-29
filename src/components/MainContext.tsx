// src/components/MainContent.tsx

import ChatWindow from "./ChatWindow";


function MainContent() {
  return (
    <div className="flex flex-col flex-grow bg-gray-800">
      <header className="flex items-center justify-between px-4 py-2 bg-gray-900 shadow">
        <h2 className="text-lg font-semibold text-white"># general</h2>
      </header>
      <ChatWindow />
    </div>
  );
}

export default MainContent;
