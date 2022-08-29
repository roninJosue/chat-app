import {useState} from "react";
import io from "socket.io-client";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home";
import {GlobalStyles} from "./styles/GlobalStyles";
import Chat from "./pages/chat";

const socket = io.connect(process.env.REACT_APP_SOCKET_URL)

function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route
          path='/'
          element={
          <Home
            username={username}
            setUsername={setUsername}
            room={room}
            setRoom={setRoom}
            socket={socket}
          />
        }
        />
        <Route
        path='/chat'
        element={
          <Chat
            socket={socket}
            username={username}
            room={room}
          />
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
