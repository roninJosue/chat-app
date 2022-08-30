import {ChatContainer} from "./chatStyles";
import Messages from "./components/Messages";
import SendMessage from "./components/SendMessage";
import RoomAndUsers from "./components/RoomAndUsers";

const Chat = ({socket, username, room}) => {
  return (
    <ChatContainer>
      <RoomAndUsers
        socket={socket}
        room={room}
        username={username}
      />

      <Messages
        socket={socket}
      />

      <SendMessage
        room={room}
        socket={socket}
        username={username}
      />
    </ChatContainer>
  )
}

export default Chat