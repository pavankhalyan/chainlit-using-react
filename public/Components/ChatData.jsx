import { useChatData } from '@chainlit/react-client';

const ChatDataComponent = () => {
  const { loading, connected, error } = useChatData();

  // Use the data to render your component
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error connecting to chat...</p>;
  if (!connected) return <p>Disconnected...</p>;

  // Rest of your component logic
};