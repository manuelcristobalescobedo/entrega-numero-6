
import { Link } from "react-router-dom"
export default function Destacados() {

    return (
        <>
        <section style={{padding: "6rem 6rem 6rem",
                         background: "white"}}
                 className="SeccionDestacada">

            <div style={{ backgroundImage: "url('/photos/Imagen1.jpg')",
                          borderRadius: "10px",
                          flexDirection: "column",
                          aspectRatio: "16 / 7.4",
                          padding: "4rem",
                          backgroundPosition: "center center",
                          backgroundRepeat: "no-repeat",  
                          backgroundSize: "cover",
                          marginBottom: "1rem",
                          display: "flex",
                          alignItems: "start",
                          justifyContent: "center",
             }}>
                
                <h1 style={{margin: "0",
                            marginBottom: "0.5rem",
                            fontSize: "2rem",
                }}>Título del ítem destacado</h1>
                <p style={{
                           margin: "0",
                           marginBottom: "1.5rem"
                }}>
                    Descripción del ítem destacado</p>
                <Link to="/producto">
                <button style={{ background: "green",
                                 border: "white 1px solid",
                                 borderRadius: "4px",
                                 fontSize: "1rem",

                }}>¡Quiero verlo!</button>
                </Link>
            </div>
        </section>
        </>
    )
}