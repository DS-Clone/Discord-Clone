// src/pages/HomePage.jsx
import MainContent from '../components/MainContext';
import Sidebar from '../components/Sidebar';

import { ChannelProvider } from '../contexts/ChannelContext';

function HomePage() {
  return (
    <ChannelProvider>
      <div className="flex h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </ChannelProvider>
  );
}

export default HomePage;
