import {useState} from "react";
import {ButtonPrimary, StyledInput} from "../../home/styles";

const SendMessage = ({socket, username, room}) => {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    if (message !== '') {
      const __createdtime__ = Date.now()
      socket.emit('send_message', {username, room, message, __createdtime__})
      setMessage('')
    }
  }

  return (
    <div>
      <StyledInput
        placeholder='Message...'
        onChange={({target: {value}}) => setMessage(value)}
        value={message}
      />
      <ButtonPrimary onClick={sendMessage}>
        Send message
      </ButtonPrimary>
    </div>
  )
}

export default SendMessage