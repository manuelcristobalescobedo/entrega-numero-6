import "../App.css" 
import { Link } from "react-router-dom" // Como enrutar el layout a través de React Router
import FiltrosDeBusqueda from "../component/Filtro"

export default function LayoutTerciario() {

    return (
        <div style={{ width: '100%', height: 'fit-content', margin: '0', padding: '0'}} >
            <header>
                <ComponenteEncabezado />
            </header>
            <main>
                <PaginaProducto />
            </main>
            <aside className="ComponenteCarritoDeCompra">
                <ComponenteCarritoDeCompras />
            </aside>
            <aside className="ComponenteProcesoDePago">
                <ComponenteProcesoDePago />
            </aside>
            <footer>
                <ComponentePieDePagina />
            </footer>
        </div>
    )
};