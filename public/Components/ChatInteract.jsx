import { useChatInteract } from '@chainlit/react-client';

const InteractionComponent = () => {
  const { sendMessage, replyMessage } = useChatInteract();

  const handleSendMessage = () => {
    const message = { content: 'Hello, World!', id: 'message-id' };
    sendMessage(message);
  };

  const handleReplyMessage = () => {
    const message = { content: 'Replying to your message', id: 'reply-id' };
    replyMessage(message);
  };

  // Render your interaction component
  return (
    <div>
      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={handleReplyMessage}>Reply to Message</button>
    </div>
  );
};