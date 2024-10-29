// src/contexts/ChannelContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

interface Channel {
  id: number;
  name: string;
}

interface ChannelContextType {
  channels: Channel[];
  activeChannel: Channel;
  setActiveChannel: (channel: Channel) => void;
}

const ChannelContext = createContext<ChannelContextType | undefined>(undefined);

export const ChannelProvider = ({ children }: { children: ReactNode }) => {
  const [channels] = useState<Channel[]>([
    { id: 1, name: 'general' },
    { id: 2, name: 'random' },
    { id: 3, name: 'support' },
  ]);
  const [activeChannel, setActiveChannel] = useState<Channel>(channels[0]);

  return (
    <ChannelContext.Provider value={{ channels, activeChannel, setActiveChannel }}>
      {children}
    </ChannelContext.Provider>
  );
};

export const useChannel = () => {
  const context = useContext(ChannelContext);
  if (!context) throw new Error("useChannel must be used within a ChannelProvider");
  return context;
};
