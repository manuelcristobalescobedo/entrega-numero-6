import { Link } from "react-router-dom"
import Validacion from "./logica/ComponenteValidacion"
import Categorias from "./ComponenteCategorias"

export default function BusquedaPrincipal() {

    return(
        <>
            <section style={{padding: "6rem 6rem 0 6rem",
                     backgroundColor: "white"
                }}>
                <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "lightgreen",
                        borderRadius: "15px",
                        aspectRatio: "16 / 7.4"}}>

                <Validacion></Validacion>
                    <Link to="Catalogo">
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: "Darkgreen",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: "10px",
                                    paddingBottom: "2.1rem",
                                    height: "40px",
                                    width: "150px",
                                    padding: "8px",
                                    alignItems: "center",
                                    gap: "8px",
                                    cursor: "pointer",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                }}
                            >
                                <svg style={{width: "1.5rem",
                                            height: "1.5rem",
                                            alignItems: "center"
                                }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -960 960 960"
                                    fill="currentColor"
                                    
                                >
                                    <path d="M762.69-160.92 524.46-399.16q-30 22.77-65.79 35.27-35.79 12.5-73.87 12.5-93.58 0-159.11-65.51-65.53-65.51-65.53-159.04 0-93.52 65.51-159.1 65.51-65.57 159.04-65.57 93.52 0 159.1 65.53 65.57 65.53 65.57 159.11 0 39.23-12.88 75.02-12.89 35.8-34.89 64.64l238.23 238.23-37.15 37.16ZM384.77-403.38q72.31 0 122.46-50.16 50.16-50.15 50.16-122.46t-50.16-122.46q-50.15-50.16-122.46-50.16t-122.46 50.16Q212.15-648.31 212.15-576t50.16 122.46q50.15 50.16 122.46 50.16Z"/>
                                </svg>
                        </button>
                    </Link>
                    <Categorias />
                </div>
                </section>
        </>
    )
}