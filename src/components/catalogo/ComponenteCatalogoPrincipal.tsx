
import { Link } from "react-router-dom"
import ItemCatalogoPrincipal from "./ComponenteItemCatalogoPrincipal"
export default function CatalogoPrincipal() {

    return (
        <>
        <section style={{padding: "1rem 6rem 3rem 6rem",
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
                         rowGap: "3rem"
            }}>
                <ItemCatalogoPrincipal />
            </div>
            </section>
        </>
    )

}