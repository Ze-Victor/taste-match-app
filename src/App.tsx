import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import ProfileSuggestionPage from "./pages/ProfileSuggestionPage";
import Home from "./pages/Home";
import Teste from "./pages/Teste";
import FistPage from "./pages/fistPage";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FistPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/ProfileSuggestion" element={<ProfileSuggestionPage />} />
          <Route path="/Teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;