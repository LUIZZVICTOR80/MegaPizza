import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "../pages/landing";
import Login from "../pages/login";
import Register from "../pages/register";
import Cardapio from "../pages/cardapio";
import Admin from "../pages/admin";

const AppRoutes = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Landing /> }/>
        <Route path="/login" element={ <Login />}/>
        <Route path="/register" element={ <Register />}/>
        <Route path="/cardapio" element={ <Cardapio />}/>
        <Route path="/admin" element= { <Admin />}/>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };