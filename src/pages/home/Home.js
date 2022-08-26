import {ButtonSecondary, Container, FormContainer, StyledInput, StyledSelect} from "./styles";

const Home = () => {
  return(
    <Container>
      <FormContainer>
        <h1>{`<>DevRooms</>`}</h1>
        <StyledInput placeholder='Username...' />
        <StyledSelect>
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </StyledSelect>

        <ButtonSecondary>Join Room</ButtonSecondary>
      </FormContainer>
    </Container>
  )
}

export default Home