import styled, {css} from "styled-components"

const inputCss = css`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid rgb(63, 73, 204);
  font-size: .9rem;
`

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63, 73, 204);
`

export const FormContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 32px;
  background: lightblue;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`

export const StyledInput = styled.input`
  ${inputCss}
`

export const StyledSelect = styled.select`
  ${inputCss}
  option {
    margin-top: 70px;
  }
`

const Button = styled.button`
  padding: 14px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  border: none;
  width: ${({fullWidth}) => fullWidth ? '100%' : 'auto'};
`

export const ButtonSecondary = styled(Button)`
  background: rgb(0, 24, 111);
  color: #fff;
`

export const ButtonPrimary = styled(Button)`
  background: rgb(153, 217, 234);
  color: rgb(0, 24, 111);
`

export const ButtonOutline = styled(Button)`
  color: rgb(153, 217, 234);
  border: 1px solid rgb(153, 217, 234);
  background: rgb(63, 73, 204);
`
