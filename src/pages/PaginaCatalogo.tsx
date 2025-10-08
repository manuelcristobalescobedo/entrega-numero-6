import CatalogoPrincipal from "../components/catalogo/ComponenteCatalogoPrincipal"
import Destacados from "../components/ComponenteDestacados"
import Exploracion from "../components/ComponenteExploracion"

export default function PaginaCatalogo() {

    return (
        <>
        {/* <!-- Filtros--> */} 
        {/* <!-- Este filtro esta en el layout--> */} 

    <section>
        {/* <!-- Catalogo--> */}
            <CatalogoPrincipal />
    </section>

    <section>
        {/* <!-- Destacada--> */}
    <Destacados />
    </section>

    
    <section>
        {/* <!-- Catalogo--> */}
            <CatalogoPrincipal />
    </section>

     {/* <!-- Exploracion--> */}
    <section>
     <Exploracion />
     </section>

        </>
    )};