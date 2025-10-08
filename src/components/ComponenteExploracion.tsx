import { Link } from "react-router-dom"
export default function Exploracion() {

return (
    <>
        <section style={{padding: "6rem 6rem 0 6rem",
                         background: "white",
        }}className="SeccionExploracion">
        <div style={{padding: "3rem 6rem",
                     background: "lightgreen",
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                     borderRadius: "15px",
        }}>
            <h2 style={{margin: "0",
                        marginBottom: "1.5rem",
                        textAlign: "center",
                        color: "green"
            }}>Título de la sección</h2>
            <div style={{display: "grid",
                         gridTemplateColumns: "1fr 1fr 1fr",
                         gridTemplateRows: "auto",
                         gap: "1rem"
            }}>
                <Link to="/catalogo">
                    <div style={{backgroundImage: "url('/photos/Imagen4.jpg')",
                                 padding: "2rem",
                                 paddingRight: "2rem",
                                 backgroundColor: "lightgreen",
                                 aspectRatio: "1 / 2",
                                 backgroundPosition: "center center",
                                 backgroundRepeat: "no-repeat",
                                 backgroundSize: "cover",
                                 display: "flex",
                                 flexDirection: "column",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 color: "white"
                    }}>
                        <h3 style={{textAlign: "center"}}>Nombre de la categoría</h3>
                    </div>
                </Link>
                <Link to="/catalogo">
                    <div style={{backgroundImage: "url('/photos/Imagen5.jpg')",
                                 padding: "2rem",
                                 backgroundColor: "lightgreen",
                                 aspectRatio: "1 / 2",
                                 backgroundPosition: "center center",
                                 backgroundRepeat: "no-repeat",
                                 backgroundSize: "cover",
                                 display: "flex",
                                 flexDirection: "column",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 color: "white"
                    }}>
                        <h3 style={{textAlign: "center"}}>Nombre de la categoría</h3>
                    </div>
                </Link>
                <Link to="/catalogo">
                    <div style={{backgroundImage: "url('/photos/Imagen6.jpg')",
                                 padding: "2rem",
                                 backgroundColor: "lightgreen",
                                 aspectRatio: "1/2",
                                 backgroundPosition: "center center",
                                 backgroundRepeat: "no-repeat",
                                 backgroundSize: "cover",
                                 display: "flex",
                                 flexDirection: "column",
                                 justifyContent: "center",
                                 alignItems: "center",
                                 color: "white"
                    }}>
                        <h3 style={{textAlign: "center"}}>Nombre de la categoría</h3>
                    </div>
                </Link>
            </div>
        </div>
    </section>
    </>
)

}