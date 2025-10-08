
export default function Titulo() {

    return (
        <>
          <div style={{ marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-end" }}>
              <h1
                style={{
                  margin: "0",
                  marginRight: "0.5rem",
                  color: "darkgreen",
                  marginBottom: "0",
                }}
    >
                  Título
                </h1>
                <a
                  style={{
                    color: "green",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                  }}
                  href="#"
                >
                  Ubicación
                </a>
              </div>
            </div>
              <div style={{display: "flex",
                           justifyContent: "flex-start",
                           alignItems: "center",
                           marginBottom: "2rem"

              }}>
                <a style={{padding: "0.25rem 0.5rem", 
                          border: "1px solid lightgreen",
                          backgroundColor: "darkgreen",
                          borderRadius:"0.5rem", 
                          marginRight: "0.5rem", 
                          color: "white"}}
                    href="#">Primera etiqueta</a>
                <a style={{padding: "0.25rem 0.5rem", 
                          border: "1px solid lightgreen",
                          backgroundColor: "darkgreen",
                          borderRadius:"0.5rem", 
                          marginRight: "0.5rem", 
                          color: "white"}}
                    href="#">Segunda etiqueta</a>
                <a style={{padding: "0.25rem 0.5rem", 
                          border: "1px solid lightgreen",
                          backgroundColor: "darkgreen",
                          borderRadius:"0.5rem", 
                          marginRight: "0.5rem", 
                          color: "white"}}
                    href="#">Tercera etiqueta</a>
              </div>    
        </>
    )
}