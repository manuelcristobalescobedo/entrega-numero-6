import { Link } from "react-router-dom";
import TextoDescripcionDefault from "../texto/ComponenteTextoPlaceholder";
import type { Producto } from "../../types/Tipos";

interface Props {
  producto: Producto;
}

export default function ItemCatalogoPrincipal({ producto }: Props) {
  return (
    <Link to={`/producto/${producto.id}`}>
      <div
        style={{
          backgroundImage: `url(${producto.imagenes[0]})`,
          borderRadius: "7px",
          width: "100%",
          aspectRatio: "1/1",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          marginBottom: "1.5rem",
        }}
      ></div>
      <TextoDescripcionDefault producto={producto} />
    </Link>
  );
}