import type React from "react";
import { useState } from "react";

function Validacion() {

    const [validacion, setValidacion] = useState("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let errorValidacion = false;

        const regServicio = /^[a-zA-Z\s]{4,40}$/;

        // ejemplo de dato a validar

        // let nombreServicio = "Tour en Cochamo";

        //---------------------------------//

        if (regServicio.test(validacion)) {
            console.log("El nombre es valido");

        } else if (!regServicio.test(validacion)) {
            console.error("El nombre no es valido");
        }

         if (validacion.length > 40 || validacion.length < 4) {
            errorValidacion = true
        }

        if (errorValidacion) {
            console.error("Error de validación");

        } else {
            console.log("Validación exitosa");
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValidacion(event.target.value)
        }
    

    //
    return (
        <>
        <form style={{ marginBottom: "1rem",
                       display: "flex",
                       alignItems: "center"}}

        className="ComponenteBusqueda" onSubmit={handleSubmit}>
                <input style={{width: "40rem",
                               textAlign: "center",
                               background: "white",
                               color: "gray",
                               fontSize: "0.9rem",
                               borderRadius: "6px",
                               border: "1px solid white",
                               height: "40px",
                }}      
                    type="text"
                    placeholder="Buscar"
                    onChange={handleChange}
                    value={validacion}
                />
            </form>
        </>
    )
}

export default Validacion;