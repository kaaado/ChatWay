import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const projectId = "2a4a4059-1c32-4a5f-ae13-cabd38fc0209";
  const chatProps = useMultiChatLogic(projectId, props.user.username, props.user.secret);

  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
    </div>
  );
};

export default ChatsPage;
