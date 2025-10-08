

export default function Descripción() {

    return(
        <>
        <section>
        <div style={{display: "grid",
                     gridTemplateColumns: "1fr 1fr 1fr",
                     gridTemplateRows: "auto",
                     gap: "1rem",
                     color: "green"}}>
                <div
                style={{
                    gridColumn: "1 / 3",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem 0",
                }}
                >
                <h2
                    style={{
                    margin: "0 0 1rem 0",
                    color: "green",
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    }}
                >
                    Descripción
                </h2>
                <p
                    style={{
                    margin: "0 0 2rem 0",
                    maxWidth: "60ch",
                    lineHeight: "1.6",
                    fontSize: "1.1rem",
                    color: "green",
                    }}
                >
                    Describir es explicar, de manera detallada y ordenada, cómo son las personas,
                    animales, lugares, objetos, etc. La descripción sirve sobre todo para ambientar
                    la acción y crear una que haga más creíbles los hechos que se narran. Muchas
                    veces, contribuyen a detener la acción y preparar el escenario de los hechos que
                    siguen.
                </p>
            <div style={{display: "flex", alignItems: "center",}}>
            <div style={{width: "3rem", 
                         height: "3rem", 
                         borderRadius: "50%", 
                         backgroundColor: "white",
                            justifyContent: "flex-start",
                            alignItems: "center",
                         
                         }}>
                <h3 style={{display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginTop: "2rem",
                            }}>
                    <a style={{color: "darkgreen",
                               }}href="#">Nombre del anunciante</a>
                </h3>
            </div>
            </div>
            </div>
                <div
                    style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "2rem 0",
                        color: "green",
                    }}
                    >
                    <div
                        style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "center",
                        gap: "0.25rem",
                        marginBottom: "0.5rem",
                        }}
                    >
                        <h3
                        style={{
                            fontSize: "1.8rem",
                            margin: "0",
                            color: "darkgreen",
                            fontWeight: "700",
                        }}
                        >
                        $39.990
                        </h3>
                        <p style={{ margin: "0", fontSize: "1rem" }}>por adulto</p>
                    </div>

                    <p style={{ margin: "0.25rem 0", fontSize: "1rem" }}>
                        $29.990 por estudiante
                    </p>
                    <p style={{ margin: "0.25rem 0", fontSize: "1rem" }}>
                        $19.990 por adulto mayor
                    </p>
                    </div>
            </div>
    </section>
        
        </>
    )
}