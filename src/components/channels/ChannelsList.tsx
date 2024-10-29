// src/components/ChannelList.tsx

import { PlusIcon } from "@heroicons/react/16/solid";


interface ChannelListProps {
  selectedServer: string | null;
}

const channels: Record<string, string[]> = {
  '1': ['general', 'random', 'memes'],
  '2': ['news', 'updates', 'tech'],
  '3': ['gaming', 'music', 'movies'],
};

function ChannelsList({ selectedServer }: ChannelListProps) {
  return (
    <div className="flex-grow p-4 space-y-2 text-gray-300">
      <h2 className="text-xs font-semibold text-gray-400 uppercase mb-2">Text Channels</h2>
      {selectedServer &&
        channels[selectedServer]?.map((channel) => (
          <div
            key={channel}
            className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg"
          >
            <span># {channel}</span>
          </div>
        ))}
      <button className="flex items-center text-sm text-blue-500 hover:text-blue-400">
        <PlusIcon className="w-4 h-4 mr-1" />
        Add Channel
      </button>
    </div>
  );
}

export default ChannelsList;
