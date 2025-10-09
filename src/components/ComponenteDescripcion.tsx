import type { Producto } from "/home/manuelcristobalescobedo/entrega-numero-6/src/types/Tipos.ts";

interface Props {
  producto: Producto;
}

export default function Descripcion({ producto }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1rem",
        color: "green",
      }}
    >
      <div
        style={{
          gridColumn: "1 / 3",
          textAlign: "center",
          padding: "2rem 0",
        }}
      >
        <h2 style={{ margin: "0 0 1rem 0", color: "green", fontSize: "1.8rem", fontWeight: 600 }}>
          Descripción
        </h2>
        <p style={{ margin: "0 0 2rem 0", maxWidth: "60ch", lineHeight: "1.6", fontSize: "1.1rem" }}>
          {producto.informacion}
        </p>
        <h3>
          <a style={{ color: "darkgreen" }} href="#">
            {producto.anunciante}
          </a>
        </h3>
      </div>

      <div style={{ textAlign: "center", padding: "2rem 0", color: "green" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.25rem" }}>
          <h3 style={{ fontSize: "1.8rem", margin: 0, color: "darkgreen", fontWeight: 700 }}>
            ${producto.precios.adulto}
          </h3>
          <p style={{ margin: 0, fontSize: "1rem" }}>por adulto</p>
        </div>
        <p style={{ margin: "0.25rem 0", fontSize: "1rem" }}>${producto.precios.estudiante} por estudiante</p>
        <p style={{ margin: "0.25rem 0", fontSize: "1rem" }}>${producto.precios.mayor} por adulto mayor</p>
      </div>
    </div>
  );
}