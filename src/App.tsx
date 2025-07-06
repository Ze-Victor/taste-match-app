import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Match from "./pages/Match";
import Home from "./pages/Home";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
