//Importamos Acceso, Catalogo, Inicio, Producto, Registro de Paginas
import Acceso from "../Paginas/Acceso";
import Catalogo from "../Paginas/Catalogo";
import Inicio from "../Paginas/Inicio";
import Producto from "../Paginas/Producto";
import Registro from "../Paginas/Registro";

// Declaramos y exportamos la constante rutas, un arreglo de objetos donde cada objeto representa una ruta
// Usamos :id en el path /producto/:id para poder probar la navegación a diferentes productos
export const rutas = [
    { path: "/acceso", element: <Acceso />},
    { path: "/catalogo", element: <Catalogo />},
    { path: "/", element: <Inicio />},
    { path: "/producto/:id", element: <Producto />},
    { path: "/registro", element: <Registro />}
];