export default function TarjetaCompras() {

    return (
        <>
        {/* <!-- Carro de compras--> */}
            <section style={{display: "none",
                             width: "100%",
                             height: "100%",
                             background: "darkgreen",
                             justifyContent: "flex-end",
                             top: "0",
                             left: "0",
                             overflowY: "auto",

            }}>
                <div style={{position: "relative", /* necesario para ubicar el botón X */
                             padding: "2rem",
                             width: "50%",
                             background: "#c7ffff",
                             height: "max-content",
                             boxSizing: "border-box",
                        }}>

                    <h3>Número de ítems</h3>
                    {/* <!-- ComponenteTarjetaCarro--> */}
                    <a style={{background: "darkgreen",
                               padding: "1.5rem",
                               display: "flex",
                               gap: "1rem",
                               marginBottom: "1rem",
                               position: "relative"
                    }} className="ComponenteTarjetaCarro">
                        <div style={{width: "50%"}}>
                            <div style={{ backgroundImage: "url('/photos/Imagen1.jpg')",
                                          background: "white",
                                          width: "100%",
                                          aspectRatio: "1/1",
                                          backgroundPosition: "center",
                                          backgroundRepeat: "no-repeat",
                                          backgroundSize: "cover",
                                          marginBottom: "1rem",
                             }}></div>
                        </div>
                        <div>
                            <h4 style={{margin: "0 0 1rem"}}>Título del ítem</h4>
                            <p style={{margin: "0 0 0.25rem"}}>Cantidad de personas</p>
                            <p>Fecha del ítem</p>
                            <p>Hora del ítem</p>
                            <p>Precio del ítem</p>
                            <button style={{ display: "block",
                                            padding: "0.5rem 1rem",
                                            fontFamily: "inherit",
                                            backgroundColor: "darkgreen",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            marginBottom: "0.25rem",
                                            fontSize: "1rem"}}>
                              Revisar detalles</button>
                            <button style={{ display: "block",
                                            padding: "0.5rem 1rem",
                                            fontFamily: "inherit",
                                            backgroundColor: "darkgreen",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "4px",
                                            marginBottom: "0.25rem",
                                            fontSize: "1rem"}}>
                              Editar</button>
                        </div>
                        <button style={{position: "absolute",
                                        top: "1rem",
                                        right: "1rem",
                                        background: "none",
                                        border: "none",
                                        fontSize: "1.5rem",
                                        cursor: "pointer",}}>

                            <svg style={{width: "1.5rem",
                                         height: "1.5rem",
                                         color: "black",}}
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="m293.42-258.69-33.92-34.73L445.27-480 259.5-666.58l33.92-34.73L480-514.73l186.58-186.58 33.92 34.73L514.73-480 700.5-293.42l-33.92 34.73L480-445.27 293.42-258.69Z"/>
                            </svg>
                        </button>
                    </a>
                    {/* <!-- ComponenteTarjetaCarro--> */}
                    <a className="ComponenteTarjetaCarro">
                        <div>
                            <div style={{ backgroundImage: "url('/photos/Imagen1.jpg')" }}></div>
                        </div>
                        <div>
                            <h4>Título del ítem</h4>
                            <p>Cantidad de personas</p>
                            <p>Fecha del ítem</p>
                            <p>Hora del ítem</p>
                            <p>Precio del ítem</p>
                            <button>Revisar detalles</button>
                            <button>Editar</button>
                        </div>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                                <path d="m293.42-258.69-33.92-34.73L445.27-480 259.5-666.58l33.92-34.73L480-514.73l186.58-186.58 33.92 34.73L514.73-480 700.5-293.42l-33.92 34.73L480-445.27 293.42-258.69Z"/>
                            </svg>
                        </button>
                    </a>
                    {/* <!-- ComponenteTarjetaTotal--> */}
                    <div style={{background: "white",
                                 padding: "1.5rem",
                                 marginBottom: "1rem"}}
                         className="ComponenteTarjetaTotal">
                        <h4 style={{margin: "0",
                                    marginBottom: "1rem",}}>
                            Detalles de la compra</h4>
                        <div style={{display: "grid",
                                     gridTemplateColumns: "1fr 1fr",
                                     gridTemplateRows: "auto",
                                     columnGap: "1rem",
                                     rowGap: "0",
                                     borderBottom: "solid 1px black",
                                     marginBottom: "0.5rem"
                        }}>
                            <p>Título de la actividad</p>
                            <p>Precio</p>
                            <p>Título de la actividad</p>
                            <p>Precio</p>
                            <p>Título de la actividad</p>
                            <p>Precio</p>
                        </div>
                        <div style={{display: "grid",
                                     gridTemplateColumns: "1fr 1fr",
                                     gridTemplateRows: "auto",
                                     columnGap: "1rem",
                                     rowGap: "0",
                                     borderBottom: "solid 1px black",
                                     marginBottom: "0.5rem",}}>
                            <p>Descuento de la actividad</p>
                            <p>Precio</p>
                        </div>
                        <div style={{display: "grid",
                                     gridTemplateColumns: "1fr 1fr",
                                     gridTemplateRows: "auto",
                                     columnGap: "1rem",
                                     rowGap: "0",
                                     marginBottom: "2rem",}}>
                            <p>Total a pagar</p>
                            <p>Precio</p>
                        </div>
                        <button style={{display: "grid",
                                        padding: "0.5rem 1rem",
                                        backgroundColor: "darkgreen",
                                        color: "green",
                                        border: "none",
                                        borderRadius: "4px",
                                        fontSize: "1rem",
                                        marginBottom: "0.25rem",}}>Pagar</button>
                    </div>
                    <button id="cerrar-carrito">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="m293.42-258.69-33.92-34.73L445.27-480 259.5-666.58l33.92-34.73L480-514.73l186.58-186.58 33.92 34.73L514.73-480 700.5-293.42l-33.92 34.73L480-445.27 293.42-258.69Z"/>
                        </svg>
                    </button>
                </div>
            </section>                
        </>
    )
}