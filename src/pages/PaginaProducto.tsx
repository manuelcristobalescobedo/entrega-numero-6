import React from "react"
import Titulo from "../components/texto/ComponenteTitulo"
import Galeria from "../components/ComponenteGaleria"
import Descripción from "../components/ComponenteDescripcion"
import Resenas from "../components/texto/ComponenteReseñas"
import DisponibilidadCalendario from "../components/ComponenteDisponibilidad"
import Informacion from "../components/texto/ComponenteInformacion"

export default function PaginaProducto() {

    return (
        <>
            {/* <-- Principal --> */}
        <section style={{padding: "6rem 6rem 0 6rem",
                        background: "white",}}>
            
            {/* <--  Título  --> */}
            <Titulo />
            
            {/* <--  Galería  --> */}
            <Galeria />

            {/* <--  Descripción  --> */}
            <Descripción />
        </section>

            {/* <--  Reseñas  --> */}
        <section style={{padding: "6rem 6rem 0 6rem",
                        background: "white",}}>
            <Resenas />
        </section>

            {/* <--  DisponibilidadCalendario  --> */}
        <section style={{padding: "6rem 6rem 0 6rem",
                        background: "white",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridTemplateRows: "rows",
                        gap: "1rem"}}>
            <DisponibilidadCalendario />

        </section>

            {/* <--  Informacion  --> */}

            <Informacion />
        </>
    )};