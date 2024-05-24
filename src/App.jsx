import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./components/Teste"; // Importando o componente Teste
import Destino from "./components/Destino";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teste />} /> {/* Rota padrão, mostrando o componente Teste */}
        {/* Rota para uma página genérica */}
        <Route path="/outra-rota" element={<Destino />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
