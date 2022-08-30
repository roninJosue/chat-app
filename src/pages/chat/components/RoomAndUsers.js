import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  RoomAndUserColum,
  RoomTitle,
  UserList,
  UserName,
  UsersTitle
} from "../chatStyles";
import {ButtonOutline} from "../../home/styles";

const RoomAndUsers = ({socket, username, room}) => {
  const [roomUsers, setRoomUsers] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    socket.on('chatroom_users', data => {
      setRoomUsers(data)
    })

    return () => socket.off('chatroom_users')
  }, [socket])

  const leaveRoom = () => {
    const __createdtime__ = Date.now()
    socket.emit('leave_room', {username, room, __createdtime__})
    navigate('/', {replace: true})
  }

  return (
    <RoomAndUserColum>
      <RoomTitle>{room}</RoomTitle>
      {roomUsers.length > 0 && <UsersTitle>Users:</UsersTitle>}
      <UserList>
        {roomUsers.map(user => (<UserName currentUser={user.username === username} key={user.id}>{user.username}</UserName>))}
      </UserList>
      <ButtonOutline onClick={leaveRoom}>
        Leave
      </ButtonOutline>
    </RoomAndUserColum>
  )
}

export default RoomAndUsers