import { useParams } from "react-router-dom";
import Titulo from "../components/texto/ComponenteTitulo";
import Galeria from "../components/ComponenteGaleria";
import Descripcion from "../components/ComponenteDescripcion";
import Resenas from "../components/texto/ComponenteReseñas";
import Informacion from "../components/texto/ComponenteInformacion";
import { productos } from "../data/Datos";

export default function PaginaProducto() {
  const { productoId } = useParams<{ productoId: string }>(); // 🧩 importante
  const producto = productos.find(p => p.id.toString() === productoId);

  if (!producto) return <div>Producto no disponible</div>;

  return (
    <>
      <section style={{ padding: "6rem 6rem 0 6rem", background: "white" }}>
        <Titulo producto={producto} />
        <Galeria producto={producto} />
        <Descripcion producto={producto} />
      </section>

      <section style={{ padding: "6rem 6rem 0 6rem", background: "white" }}>
        <Resenas producto={producto} />
      </section>

      <Informacion producto={producto} />
    </>
  );
}