import styled from "styled-components";

export const ChatContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 20px;

  .sendMessageContainer {
    padding: 16px 20px 20px 16px;
  }
  .messageInput {
    padding: 14px;
    margin-right: 16px;
    width: 60%;
    border-radius: 6px;
    border: 1px solid rgb(153, 217, 234);
    font-size: 0.9rem;
  }
`

export const RoomAndUserColum = styled.div`
  border-right: 1px solid #dfdfdf;
`

export const RoomTitle = styled.div`
  margin-bottom: 60px;
  text-transform: uppercase;
  font-size: 2rem;
  color: #fff;
`

export const UsersTitle = styled.div`
  font-size: 1.2rem;
  color: #fff;
`

export const UserList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 60px;
  color: rgb(153, 217, 234);
  
  li {
    margin-bottom: 12px;
  }
`

export const MessagesColum = styled.div`
  height: 85vh;
  overflow: auto;
  padding: 10px 10px 10px 40px;
`

export const Message = styled.div`
  background: rgb(0, 24, 111);
  border-radius: 6px;
  margin-bottom: 24px;
  max-width: 600px;
  padding: 12px;
  
  .msgMeta {
    color: rgb(153, 217, 234);
    font-size: 0.75rem;
  }
  
  .msgText{
    color: #fff;
  }
`

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MsgMeta = styled.div`
  color: rgb(153, 217, 234);
  font-size: 0.75rem;
`