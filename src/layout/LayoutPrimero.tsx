import "../App.css" 
import { Outlet } from "react-router-dom"
import Encabezado from "../components/ComponenteEncabezado" 
import CarritoDeCompras from "../components/carrito/ComponenteTarjetaDeCompras"
import PieDePagina from "../components/ComponentePieDePagina"
import Filtros from "../components/filtro/ComponenteAbrirFiltros"

export default function LayoutPrimario() {

    return (
        <div style={{ width: '100%', height: 'fit-content', margin: '0', padding: '0'}} >
            <header>
                <Encabezado />
            </header>
            <main>
                <Outlet />
            </main>
            <aside>
                <CarritoDeCompras />
                <Filtros /> 
            </aside>
            <footer>
                <PieDePagina />
            </footer>
        </div>
    )
};