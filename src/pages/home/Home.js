import {useNavigate} from "react-router-dom";

import {
  ButtonSecondary,
  Container,
  FormContainer,
  StyledInput,
  StyledSelect
} from "./styles";

const Home = ({username, setUsername, room, setRoom, socket}) => {
  const navigate = useNavigate()

  const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', {username, room})
    }

    navigate('/chat', {replace: true})
  }

  return (
    <Container>
      <FormContainer>
        <h1>{`<>DevRooms</>`}</h1>
        <StyledInput
          placeholder='Username...'
          onChange={e => setUsername(e.target.value)}
        />

        <StyledSelect
          onChange={e => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </StyledSelect>

        <ButtonSecondary
          fullWidth
          onClick={joinRoom}
        >
          Join Room
        </ButtonSecondary>
      </FormContainer>
    </Container>
  )
}

export default Home