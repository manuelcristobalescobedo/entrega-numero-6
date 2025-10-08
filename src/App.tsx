import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LayoutPrimario from './layout/LayoutPrimero.tsx';
import PaginaInicio from './pages/PaginaInicio.tsx';
import PaginaProducto from './pages/PaginaProducto.tsx';
import PaginaCatalogo from './pages/PaginaCatalogo.tsx';

function App() {

  return (
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
  )
};

export default App
