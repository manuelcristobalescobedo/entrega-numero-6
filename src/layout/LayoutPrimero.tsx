import "../App.css" 
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom" // Como enrutar el layout a través de React Router

export default function LayoutPrimario() {

    return (
        <div style={{ width: '100%', height: 'fit-content', margin: '0', padding: '0'}} >
            <header>
                <ComponenteEncabezado />
            </header>
            <main>
                <Outlet>
                    
                </Outlet>
            </main>
            <aside>
                <ComponenteCarritodeCompras>
            </aside>
            <footer>
                <ComponentePieDePagina />
            </footer>
        </div>
    )
};