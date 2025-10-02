import { useState } from "react";
import React from "react";
import "../App.css" 


function ValidacionTop() {

    const [validacionNumero, setValidacionNumero] = useState("");
    const [validacionFecha, setValidacionFecha] = useState("");
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
          
        let validado = true;  

        //Validacion numero de personas    

        const num = Number(validacionNumero);

        if (isNaN(num) || num < 1 || num > 20) {
            console.error("El numero debe ser entre 1 y 20")
            validado = false;
        } else {
            console.log("El numero es valido")
        }
        
        //validacion de fecha

        if (!validacionFecha) {
            console.error("la fecha es requirida");
            validado = false;
        } 
        
        const fechaSeleccionada = new Date(validacionFecha);

            // <-- para tener una fecha en concreto -->

        const fechaRecorte = new Date("2025-10-01");

        if (fechaSeleccionada <= fechaRecorte) {
            console.error("la fecha no puede ser elegida")
                validado = false;
        } else {
            console.log("la fecha es valida")
        }


        if (validado || !errorValidacion) {
            console.log("validacion correcta!")
        } else {
            console.error("No se puede validar")
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValidacion(event.target.value)
    };

    const handleFechaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValidacionFecha(event.target.value);
    };

    const handleNumeroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValidacionNumero(event.target.value);
    };

    return (
        <form className="ComponenteBusquedaPrincipal" onSubmit={handleSubmit}>
            <input type="text" placeholder="Lugar" value={validacion} onChange={handleChange}></input>
            <input type="date" placeholder="Fecha" value={validacionFecha} onChange={handleFechaChange}></input>
            <input type="number" placeholder="Personas" value={validacionNumero} onChange={handleNumeroChange}></input>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 -960 960 960" 
                    fill="currentColor">
                    <path d="M762.69-160.92 524.46-399.16q-30 22.77-65.79 35.27-35.79 12.5-73.87 12.5-93.58 0-159.11-65.51-65.53-65.51-65.53-159.04 0-93.52 65.51-159.1 65.51-65.57 159.04-65.57 93.52 0 159.1 65.53 65.57 65.53 65.57 159.11 0 39.23-12.88 75.02-12.89 35.8-34.89 64.64l238.23 238.23-37.15 37.16ZM384.77-403.38q72.31 0 122.46-50.16 50.16-50.15 50.16-122.46t-50.16-122.46q-50.15-50.16-122.46-50.16t-122.46 50.16Q212.15-648.31 212.15-576t50.16 122.46q50.15 50.16 122.46 50.16Z"/>
                </svg>
            </button>
        </form>
    );
}

export default ValidacionTop;