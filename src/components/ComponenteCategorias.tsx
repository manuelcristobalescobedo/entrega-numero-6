
export default function Categorias() {

    return (
        <>
            <div style={{display: "flex",
                         flexDirection: "row",
                         alignItems: "center",
                         gap: "12px",
                         padding: "20px",}}>

                <button style={{padding: "0.5rem",
                                background: "darkgreen",
                                fontSize: "1rem",
                                cursor: "pointer",
                                marginRight: "0.75rem",}}>

                    <p style={{padding: "0",
                               margin: "0",}}>
                                
                        Destinos</p>
                        <svg style={{width: "1.5rem",
                                     height: "1.5rem",
                        }}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 -960 960 960" 
                        fill="currentColor">
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z"/>
                    </svg>
                </button>
                <button style={{padding: "0.5rem",
                                background: "darkgreen",
                                fontSize: "1rem",
                                cursor: "pointer",
                                marginRight: "0.75rem",
                }}>
                    <p style={{padding: "0",
                               margin: "0",}}>Tours</p>
                        <svg style={{width: "1.5rem",
                                     height: "1.5rem",}} 
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z"/>
                        </svg>
                </button>
                <button style={{padding: "0.5rem",
                                background: "darkgreen",
                                fontSize: "1rem",
                                cursor: "pointer",
                                marginRight: "0.75rem",
                }}>
                    <p style={{padding: "0",
                               margin: "0",}}>
                        Paquetes</p>
                        <svg style={{width: "1.5rem",
                                     height: "1.5rem",}}

                        xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z"/>
                        </svg>
                </button>
                <button style={{padding: "0.5rem",
                                background: "darkgreen",
                                fontSize: "1rem",
                                cursor: "pointer",
                                marginRight: "0.75rem",
                }}>
                    <p style={{padding: "0",
                               margin: "0",}}>
                        Experiencias</p>
                        <svg style={{width: "1.5rem",
                                     height: "1.5rem",}}
                                     
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                            <path d="M480-346.85 253.85-573 291-610.15l189 189 189-189L706.15-573 480-346.85Z"/>
                        </svg>
                </button>
            </div>
        </>
    )
}