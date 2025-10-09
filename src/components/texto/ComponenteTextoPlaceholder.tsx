import type { Producto } from "../../types/Tipos";

interface Props {
  producto: Producto;
}

export default function TextoDescripcionDefault({ producto }: Props) {
  // Si producto no está definido, mostramos un mensaje y salimos
  if (!producto) return <div style={{color: "darkgreen", marginTop: "1rem"}}>Producto no disponible</div>;

  // Calcular promedio de estrellas y cantidad de reseñas
  const totalResenas = producto.resenas.length;
  const promedioEstrellas =
    totalResenas > 0
      ? producto.resenas.reduce((acc, r) => acc + r.estrellas, 0) / totalResenas
      : 0;

  return (
    <div style={{ color: "green" }}>
      <h3>{producto.titulo}</h3>
      <p>Precio adulto: ${producto.precios.adulto}</p>
      <div>
        <p>★ {promedioEstrellas.toFixed(1)}</p>
        <p>({totalResenas} Reseñas)</p>
      </div>
    </div>
  );
}
