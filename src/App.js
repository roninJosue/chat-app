import {useState} from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home";

import {GlobalStyles} from "./styles/GlobalStyles";
import io from "socket.io-client";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
