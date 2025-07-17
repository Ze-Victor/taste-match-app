import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import ProfileSuggestionPage from "./pages/ProfileSuggestionPage";
import Home from "./pages/Home";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/ProfileSuggestion" element={<ProfileSuggestionPage />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
