
import { Link } from "react-router-dom"
import TextoDescripcionDefault from "../ComponenteTextoPlaceholder"
import ImagenCatalogoSegunda from "../ComponenteImagenCatalogoSecundario"
export default function CatalogoSecundario() {

    return (
        <>
        <section style={{padding: "3rem 6rem 0 6rem",
                         background: "white"
        }}className="SeccionCatalogo">
        <h2 style={{margin: "0",
                    marginBottom: "1.5rem"
        }}>Título de la sección</h2>

        {/* Grid wrapper */}
        <div style={{display: "grid",
                     gridTemplateColumns: "1fr 1fr 1fr",
                     gridTemplateRows: "auto",
                     columnGap: "1rem",
                     rowGap: "3rem",
        }}>
            <Link to="/producto">
                <ImagenCatalogoSegunda />
                
                <TextoDescripcionDefault />
            </Link>
            <Link to="/producto">
                <ImagenCatalogoSegunda />

                <TextoDescripcionDefault />
            </Link>
            <Link to="/producto">
                <ImagenCatalogoSegunda />
                
                <TextoDescripcionDefault />
            </Link>
        </div>
    </section>
        </>
    )
}