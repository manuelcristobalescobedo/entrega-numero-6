

export default function Resenas() {

    return(
        <>
        <h2>Reseñas</h2>
            <div style={{display: "grid",
                         gridTemplateColumns: "1fr 1fr 1fr",
                         gridTemplateRows: "auto",
                         gap: "1rem",
            }}>
                <a style={{padding: "2rem",
                           textDecoration: "none",
                           color: "black",
                           background: "lightgreen",
                           borderRadius: "15px"}} href="#">
                    <h3>La evaluación es un proceso que se utiliza para determinar, de manera sistemática, el mérito, el valor y el significado de un trabajo o capacidad, ya sea intelectual o física.</h3>
                    <p>★★★★★</p>
                    <p>Nombre del usuario</p>
                </a>
                <a style={{padding: "2rem",
                           textDecoration: "none",
                           color: "black",
                           background: "lightgreen",
                           borderRadius: "15px"}} href="#">
                    <h3>La evaluación es un proceso que se utiliza para determinar, de manera sistemática, el mérito, el valor y el significado de un trabajo o capacidad, ya sea intelectual o física.</h3>
                    <p>★★★★★</p>
                    <p>Nombre del usuario</p>
                </a>
                <a style={{padding: "2rem",
                           textDecoration: "none",
                           color: "black",
                           background: "lightgreen",
                           borderRadius: "15px"}} href="#">
                    <h3>La evaluación es un proceso que se utiliza para determinar, de manera sistemática, el mérito, el valor y el significado de un trabajo o capacidad, ya sea intelectual o física.</h3>
                    <p>★★★★★</p>
                    <p>Nombre del usuario</p>
                </a>
            </div>

        </>
    )
}