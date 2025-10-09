import Destacados from "../components/ComponenteDestacados";
import CatalogoPrincipal from "../components/catalogo/ComponenteCatalogoPrincipal";
// import CatalogoSecundario from "../components/catalogo/ComponenteCatSecundario";
import Exploracion from "../components/ComponenteExploracion";
import BusquedaPrincipal from "../components/ComponenteBusquedaPrincipal";

export default function PaginaInicio() {
  //const listaProductos: Producto[] = productos as Producto[];

  return (
    <>
    {/* <-- Busqueda Principal --> */}
    <BusquedaPrincipal />

    {/* <-- Destacada --> */}
    <Destacados />

    {/* <-- Catalogo --> */}

    <CatalogoPrincipal />               

    {/* <-- Catalogo secundario --> */}
   
    {/*<CatalogoSecundario />*/}

    {/* <-- Exploracion --> */}

    <Exploracion />

    </>
  );
}