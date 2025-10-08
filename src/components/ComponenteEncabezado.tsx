import CarroDeCompras from "./carrito/ComponenteCarroDeCompras"
import ValidacionTop from "./logica/ComponenteValTop"

export default function Encabezado() {

    return (
        <>
        {/* <!-- Encabezado--> */}
            <header style={{
                            padding: "1rem 6rem",
                            background: "white",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "1rem",
                            position: "fixed",
                            top: "0",
                            left: "0",
                            right: "0",
                            zIndex: "1000",     
            }}>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M762.69-160.92 524.46-399.16q-30 22.77-65.79 35.27-35.79 12.5-73.87 12.5-93.58 0-159.11-65.51-65.53-65.51-65.53-159.04 0-93.52 65.51-159.1 65.51-65.57 159.04-65.57 93.52 0 159.1 65.53 65.57 65.53 65.57 159.11 0 39.23-12.88 75.02-12.89 35.8-34.89 64.64l238.23 238.23-37.15 37.16ZM384.77-403.38q72.31 0 122.46-50.16 50.16-50.15 50.16-122.46t-50.16-122.46q-50.15-50.16-122.46-50.16t-122.46 50.16Q212.15-648.31 212.15-576t50.16 122.46q50.15 50.16 122.46 50.16Z"/>
                    </svg>
                </a>

        {/* <-- ComponenteBusquedaPrincipal --> */}

            <ValidacionTop></ValidacionTop>
            
            <CarroDeCompras />

            <button
                    style={{
                        height: "2.8rem",
                        width: "2.8rem",
                        borderRadius: "100px",
                        overflow: "hidden",
                        padding: 0,
                        border: "none",
                        cursor: "pointer",
                    }}
                    >
                    <div
                        style={{
                        backgroundImage: "url('/photos/Imagen5.jpg')",
                        backgroundColor: "darkgreen",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%",
                        }}
                    ></div>
                    </button>
            </header>       
        </>
    )
}