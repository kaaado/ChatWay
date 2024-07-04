import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId='2a4a4059-1c32-4a5f-ae13-cabd38fc0209
'
        username={props.user.username} 
        secret={props.user.secret} 
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
