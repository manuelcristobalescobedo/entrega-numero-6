// Importamos BrowserRouter, Routes y Route de react-router-dom
// Importamos el arreglo rutas desde ./Rutas/Rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { rutas } from "./Rutas/Rutas";

// Usamos .map() para recorrer el arreglo rutas y generar las etiquetas <Route /> de forma dinámica
// Usamos key={path} para evitar que React nos entregue advertencias
function App() {
    return (
        <BrowserRouter>
            <Routes>
                {rutas.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default App