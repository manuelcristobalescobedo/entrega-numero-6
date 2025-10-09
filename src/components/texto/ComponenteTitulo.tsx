import type { Producto } from "../../types/Tipos";

interface Props {
  producto: Producto;
}

export default function Titulo({ producto }: Props) {
  return (
    <>
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
          <h1 style={{ margin: 0, marginRight: "0.5rem", color: "darkgreen" }}>
            {producto.titulo}
          </h1>
          <a style={{ color: "green", textDecoration: "none", fontSize: "1.1rem" }} href="#">
            {producto.ubicacion}
          </a>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
        {producto.etiquetas.map((etiqueta, index) => (
          <a
            key={index}
            style={{
              padding: "0.25rem 0.5rem",
              border: "1px solid lightgreen",
              backgroundColor: "darkgreen",
              borderRadius: "0.5rem",
              marginRight: "0.5rem",
              color: "white",
              textDecoration: "none",
            }}
            href="#"
          >
            {etiqueta}
          </a>
        ))}
      </div>
    </>
  );
}