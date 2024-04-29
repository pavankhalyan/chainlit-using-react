import { ChainlitAPI, useChatSession } from '@chainlit/react-client';

const CHAINLIT_SERVER_URL = 'http://localhost:8000';

const apiClient = new ChainlitAPI(CHAINLIT_SERVER_URL, 'app');

const ChatComponent = () => {
  const { connect, disconnect, chatProfile, setChatProfile } = useChatSession();

  // Connect to the WebSocket server
  useEffect(() => {
    connect({
      client: apiClient,
      userEnv: {
        /* user environment variables */
      },
      accessToken: 'Bearer YOUR_ACCESS_TOKEN' // Optional Chainlit auth token
    });

    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  // Rest of your component logic
};