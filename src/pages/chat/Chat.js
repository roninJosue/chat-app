import {ChatContainer} from "./chatStyles";
import Messages from "./components/Messages";
import SendMessage from "./components/SendMessage";

const Chat = ({socket, username, room}) => {
  return(
    <ChatContainer>
        <Messages socket={socket} />
        <SendMessage
          room={room}
          socket={socket}
          username={username}
        />
    </ChatContainer>
  )
}

export default Chat