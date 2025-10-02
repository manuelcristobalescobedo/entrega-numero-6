import React from 'react';
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import LayoutPrimario from './layout/LayoutPrimero.tsx';
import PaginaInicio  from './pages/PaginaInicio.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPrimario/>}>

        {/*<-- estos son los children de LayoutPrimario --> */}

        <Route index element={<PaginaInicio />} />
        <Route path="Producto" element={<PaginaProducto/>} />    
        <Route path="Catalogo" element={<PaginaCatalogo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);
