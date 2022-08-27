import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/home";
import {GlobalStyles} from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
