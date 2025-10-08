import "../App.css" 
import { Outlet } from "react-router-dom" // Como enrutar el layout a través de React Router
import ComponenteEncabezado from "../components/ComponenteEncabezado" 
import CarritoDeCompras from "../components/carrito/ComponenteTarjetaDeCompras"
import PieDePagina from "../components/ComponentePieDePagina"
import FiltrosDeBusqueda from "../components/ComponenteFiltrosDeBusqueda"

export default function LayoutSecundario() {

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
            <aside className="ComponenteFiltrosDeBusqueda">
                <FiltrosDeBusqueda />
            </aside>
            <footer>
                <PieDePagina />
            </footer>
        </div>
    )
};