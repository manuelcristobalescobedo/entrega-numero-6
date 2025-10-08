import "../App.css" 
import { Link, Outlet } from "react-router-dom" // Como enrutar el layout a través de React Router
import FiltrosDeBusqueda from "../component/Filtro"
import ComponenteEncabezado from "../components/ComponenteEncabezado" 
import CarritoDeCompras from "../components/carrito/ComponenteTarjetaDeCompras"
import PieDePagina from "../components/ComponentePieDePagina"
import PaginaCatalogo from "../pages/PaginaCatalogo"

export default function LayoutTerciario() {

    return (
        <div style={{ width: '100%', height: 'fit-content', margin: '0', padding: '0'}} >
            <header>
                <ComponenteEncabezado />
            </header>
            <main>
                <Outlet />
            </main>
            <aside className="ComponenteCarritoDeCompra">
                <CarritoDeCompras />
            </aside>
            <aside className="ComponenteProcesoDePago">
                <ProcesoDePago />
            </aside>
            <footer>
                <PieDePagina />
            </footer>
        </div>
    )
};