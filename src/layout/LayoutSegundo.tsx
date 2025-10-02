import "../App.css" 
import { Link } from "react-router-dom" // Como enrutar el layout a través de React Router
import FiltrosDeBusqueda from "../component/Filtro"

export default function LayoutSecundario() {

    return (
        <div style={{ width: '100%', height: 'fit-content', margin: '0', padding: '0'}} >
            <header>
                <ComponenteEncabezado />
            </header>
            <main>
                <PaginaCatalogo />
            </main>
            <aside className="ComponenteCarritoDeCompra">
                <CarritoDeCompras />
            </aside>
            <aside className="ComponenteFiltrosDeBusqueda">
                <FiltrosDeBusqueda />
            </aside>
            <footer>
                <ComponentePieDePagina />
            </footer>
        </div>
    )
};