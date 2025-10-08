import { Link } from "react-router-dom";
import TextoDescripcionDefault from "../ComponenteTextoPlaceholder";
export default function ItemCatalogoPrincipal() {

    return (
        <>
        <Link to="/producto">
            <div style={{ backgroundImage: "url(/photos/Imagen1.jpg)",
                          borderRadius: "7px",
                          width: "100%",
                          aspectRatio: "1/1",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          marginBottom: "1.5rem",
            }}></div>
            <TextoDescripcionDefault />
        </Link>

        <Link to="/producto">
            <div style={{ backgroundImage: "url(/photos/Imagen2.jpg)",
                          borderRadius: "7px",
                          width: "100%",
                          aspectRatio: "1/1",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          marginBottom: "1.5rem",
                
             }}></div>
            <TextoDescripcionDefault />
        </Link>

        <Link to="/producto">
            <div style={{ backgroundImage: "url(/photos/Imagen3.jpg)",
                          borderRadius: "7px",
                          width: "100%",
                          aspectRatio: "1/1",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          marginBottom: "1.5rem",
             }}></div>
            <TextoDescripcionDefault />
        </Link>

        <Link to="/producto">
            <div style={{ backgroundImage: "url(/photos/Imagen4.jpg)",
                          borderRadius: "7px",
                          width: "100%",
                          aspectRatio: "1/1",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          marginBottom: "1.5rem",
             }}></div>
            <TextoDescripcionDefault />
        </Link>

        <Link to="/producto">
            <div style={{ backgroundImage: "url(/photos/Imagen5.jpg)",
                          borderRadius: "7px",
                          width: "100%",
                          aspectRatio: "1/1",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          marginBottom: "1.5rem",
             }}></div>
            <TextoDescripcionDefault />
        </Link>

        <Link to="/producto">
            <div style={{ backgroundImage: "url(/photos/Imagen6.jpg)",
                          borderRadius: "7px",
                          width: "100%",
                          aspectRatio: "1/1",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          marginBottom: "1.5rem",
             }}></div>
            <TextoDescripcionDefault />
        </Link>
    </>
);
}