import {useEffect, useRef, useState} from "react";
import {Message, MessagesColum, MessageWrapper} from "../chatStyles";

const RECEIVE_MESSAGE = 'receive_message'

const formatDateFromTimestamp = timestamp => {
  const date = new Date(timestamp)
  return date.toLocaleDateString()
}

const sortMessagesByDate = messages => {
  return messages.sort(
    (a, b) => parseInt(a.__createdtime__) - parseInt(b.__createdtime__)
  )
}

const Messages = ({socket}) => {
  const [messagesReceive, setMessagesReceive] = useState([])
  const messageColumRef = useRef(null)

  useEffect(() => {
    if (socket) {
      socket.on('receive_message', (data) => {
        setMessagesReceive(state => [
          ...state,
          {
            message: data.message,
            username: data.username,
            __createdtime__: data.__createdtime__
          }
        ])
      })
    }

    return () => socket.off(RECEIVE_MESSAGE)
  }, [socket])

  useEffect(() => {
    socket.on('last_100_messages', last100Messages => {
      const _last100Messages = JSON.parse(last100Messages)
      const orderedLast100Messages = sortMessagesByDate(_last100Messages)
      setMessagesReceive(state => [...orderedLast100Messages, ...state])
    })
  }, [socket])

  useEffect(() => {
    messageColumRef.current.scrollTop = messageColumRef.current.scrollHeight
  }, [messagesReceive]);


  return (
    <MessagesColum ref={messageColumRef}>
      {messagesReceive.map((msg, i) => (
        <Message key={i}>
          <MessageWrapper>
            <span className='.msgMeta'>{msg.username}</span>
            <span className={'.msgMeta'}>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </MessageWrapper>
          <p className='msgText'>{msg.message}</p>
        </Message>
      ))}
    </MessagesColum>
  )
}

export default Messages