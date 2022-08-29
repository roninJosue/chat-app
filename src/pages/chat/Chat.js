import {ChatContainer} from "./chatStyles";
import Messages from "./components/Messages";

const Chat = ({socket, username, room}) => {
  return(
    <ChatContainer>
      <Messages socket={socket} />
    </ChatContainer>
  )
}

export default Chat