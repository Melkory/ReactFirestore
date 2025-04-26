import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../paginas/Home/Home";
import Principal from "../paginas/Principal/Principal";
import Cadastro from "../paginas/Cadastro/Cadastro";
import Login from "../paginas/Login/Login";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
