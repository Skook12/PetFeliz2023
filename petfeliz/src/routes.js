import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Adocao from "./pages/Adocao/adocao";
import Sobre from "./pages/Sobre/sobre";
import Contato from "./pages/Contato/contato";
import Login from "./pages/Login/login";
import Cadastro from "./pages/Cadastro/cadastro";
import Painel from "./pages/Painel/painel";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/adocao" element={<Adocao />}></Route>
          <Route exact path="/sobre" element={<Sobre />}></Route>
          <Route exact path="/contato" element={<Contato />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/cadastro" element={<Cadastro />}></Route>
          <Route exact path="/painel" element={<Painel />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
