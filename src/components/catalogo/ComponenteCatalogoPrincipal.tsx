import ItemCatalogoPrincipal from "./ComponenteItemCatalogoPrincipal";
import { productos } from "../../data/Datos";

export default function CatalogoPrincipal() {
  return (
    <section
      style={{
        padding: "1rem 6rem 3rem 6rem",
        background: "white",
      }}
      className="SeccionCatalogo"
    >
      <h2 style={{ margin: 0, marginBottom: "1.5rem", color: "darkgreen" }}>
        Título de la sección
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "auto",
          columnGap: "1rem",
          rowGap: "3rem",
        }}
      >
        {productos.map((producto) => (
          <ItemCatalogoPrincipal 
            key={producto.id} 
            producto={producto} 
            // productoId={producto.id} // 🔹 Pasamos el id para usar en Link
          />
        ))}
      </div>
    </section>
  );
}