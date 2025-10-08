import { useState } from "react";

export default function CarroDeCompras() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [1, 2]; // sample items

  return (
    <>
      {/* --- Botón para abrir --- */}

      <button onClick={() => setIsOpen(true)}
              style={{backgroundColor: "darkgreen"}}
                className="abrir-carrito">
            <svg style={{height: "1.2rem",
                         width: "1.2rem",
                }}xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M273.2-121.77q-24.92 0-42.16-17.41-17.23-17.42-17.23-42.35t17.41-42.16q17.42-17.23 42.35-17.23 24.92 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.42 17.23-42.35 17.23Zm412.43 0q-24.93 0-42.17-17.41-17.23-17.42-17.23-42.35t17.42-42.16q17.41-17.23 42.34-17.23 24.93 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.41 17.23-42.34 17.23ZM229.18-753.15h523.55q15.34 0 22.33 11.37 6.98 11.38 1.78 23.78l-93.68 227.12q-6.66 16.96-21.72 27.46-15.07 10.5-33.83 10.5H318.62l-45.12 78.23q-3.08 4.61-.19 10 2.88 5.38 8.65 5.38h463.42v47.96H285.53q-37.07 0-54.17-29.72-17.09-29.73 1.1-59.62l55.08-93.63-130.83-305.26H76.08v-47.96h112.8l40.3 94.39Z"/>
                </svg>
            </button>
      

      {/* --- Fondo oscuro --- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            inset: "0",
            background: "rgba(0,0,0,0.4)",
            zIndex: "10",
          }}
        />
      )}

      {/* --- Panel lateral --- */}
      <aside
        style={{
          position: "fixed",
          color: "darkgreen",
          top: 0,
          right: isOpen ? "0" : "-600px",
          width: "500px",
          height: "100%",
          background: "lightgreen",
          padding: "1.5rem",
          boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          transition: "right 0.35s ease",
          zIndex: 20,
          overflowY: "auto",
        }}
      >
        {/* --- Header --- */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid rgba(0,0,0,0.1)",
            paddingBottom: "0.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            Número de ítems
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.3rem",
              cursor: "pointer",
              color: "darkgreen"
            }}
          >
            ✕
          </button>
        </div>

        {/* --- Lista de items --- */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {items.map((_, index) => (
            <div
              key={index}
              style={{
                background: "green",
                color: "white",
                borderRadius: "10px",
                padding: "1rem",
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600"
                alt="Item"
                style={{
                  width: "45%",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    Título del ítem
                  </h3>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    fontSize: "0.9rem",
                    lineHeight: 1.4,
                  }}
                >
                  <li>Cantidad de personas</li>
                  <li>Fecha del ítem</li>
                  <li>Hora del ítem</li>
                  <li>Precio del ítem</li>
                </ul>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <button
                    style={{
                      background: "darkgreen",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "0.4rem 0.8rem",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    Revisar detalles
                  </button>
                  <button
                    style={{
                      background: "darkgreen",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "0.4rem 0.8rem",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    Editar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Detalles de la compra --- */}
        <div
          style={{
            background: "darkgreen",
            color: "white",
            borderRadius: "10px",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
            Detalles de la compra
          </h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.9rem",
            }}
          >
            <tbody>
              {[
                "Título de la actividad",
                "Título de la actividad",
                "Título de la actividad",
                "Descuento de la actividad",
                "Total a pagar",
              ].map((titulo, i) => (
                <tr key={i}>
                  <td
                    style={{
                      padding: "0.4rem 0",
                      borderBottom:
                        i === 3 || i === 4
                          ? "1px solid rgba(0,0,0,0.3)"
                          : "1px solid rgba(0,0,0,0.2)",
                      fontWeight: i >= 3 ? "bold" : "normal",
                    }}
                  >
                    {titulo}
                  </td>
                  <td
                    style={{
                      padding: "0.4rem 0",
                      borderBottom:
                        i === 3 || i === 4
                          ? "1px solid rgba(0,0,0,0.3)"
                          : "1px solid rgba(0,0,0,0.2)",
                      textAlign: "right",
                      fontWeight: i >= 3 ? "bold" : "normal",
                    }}
                  >
                    Precio
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            style={{
              background: "darkgreen",
              color: "white",
              border: "2px solid white",
              borderRadius: "6px",
              padding: "0.6rem 1.2rem",
              cursor: "pointer",
              alignSelf: "flex-start",
              fontWeight: "500",
              marginBottom: "1rem"
            }}
          >
            Pagar
          </button>
        </div>
      </aside>
    </>
  );
}