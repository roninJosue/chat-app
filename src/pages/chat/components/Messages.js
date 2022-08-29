import {useEffect, useState} from "react";
import {MessagesColum, MessageWrapper} from "../chatStyles";

const RECEIVE_MESSAGE = 'receive_message'

const formatDateFromTimestamp = timestamp => {
  const date = new Date(timestamp)
  return date.toLocaleDateString()
}

const Messages = ({socket}) => {
  console.log(socket)
  console.count('set')
  const [messagesReceive, setMessagesReceive] = useState([])

  useEffect(() => {
    console.count('effect')
    if (socket) {
      socket.on(RECEIVE_MESSAGE, (data) => {
        console.log(data)
        //setMessagesReceive([{message: 'asdas'}])
        /*setMessagesReceive(state => [
          ...state,
          {
            message: data.message,
            username: data.username,
            __createdtime__: data.__createdtime__
          }
        ])*/
      })

      return () => socket.off(RECEIVE_MESSAGE)
    }
  }, [socket])

  return (
    <MessagesColum>
      {messagesReceive.map((msg, i) => (
        <Messages key={i}>
          <MessageWrapper>
            <span className='.msgMeta'>{msg.username}</span>
            <span className={'.msgMeta'}>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </MessageWrapper>
          <p className='msgText'>{msg.message}</p>
        </Messages>
      ))}
    </MessagesColum>
  )
}

export default Messages