import type { Producto } from "../../types/Tipos";

interface Props {
  producto: Producto;
}

export default function Resenas({ producto }: Props) {
  return (
    <>
      <h2 style={{color: "darkgreen"}}>Reseñas</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {producto.resenas.map((r, i) => (
          <div
            key={i}
            style={{
              padding: "2rem",
              background: "lightgreen",
              borderRadius: "15px",
            }}
          >
            <h3>{r.comentario}</h3>
            <p>{"★".repeat(r.estrellas)}</p>
            <p>{r.usuario}</p>
          </div>
        ))}
      </div>
    </>
  );
}