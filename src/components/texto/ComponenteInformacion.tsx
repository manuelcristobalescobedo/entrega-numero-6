import type { Producto } from "../../types/Tipos";

interface Props {
  producto: Producto;
}

export default function Informacion({ producto }: Props) {
  if (!producto) return <div style={{color: "darkgreen", marginTop: "1rem"}}>Producto no disponible</div>;

  return (
    <section
      style={{
        padding: "6rem",
        background: "white",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        color: "green",
        lineHeight: "1.6",
      }}
    >
      <div style={{ maxWidth: "60ch" }}>
        <h4>En qué consiste</h4>
        <p>{producto.descripcion}</p>

        <h4>Más información</h4>
        <p>{producto.informacion}</p>
      </div>

      <div>
        <h4>Políticas de cancelación y modificación</h4>
        <p>{producto.cancelacion}</p>

        <h4>Qué está incluido</h4>
        <p>{producto.incluye}</p>

        <h4>Qué no está incluido</h4>
        <p>{producto.excluye}</p>
      </div>
    </section>
  );
}