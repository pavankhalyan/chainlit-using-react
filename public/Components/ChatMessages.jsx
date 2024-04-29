import { useChatMessages } from '@chainlit/react-client';

const MessagesComponent = () => {
  const { messages, firstUserMessage } = useChatMessages();

  // Render your messages
  return (
    <div>
      {messages.map((message) => (
        <p key={message.id}>{message.content}</p>
      ))}
    </div>
  );
};