import React from "react";
import { Outlet } from "react-router-dom";
import { type Producto } from "../types/product";
import productos from   "../data/productos";

export default function PaginaInicio() {

    const listaProductos: Producto[] = productos as Producto[];

    return (
        <>
            <h1>Pagina Inicial</h1>
            {
            <ul>
                listaProductos.map((Producto) => {

                }
            </ul>
            }
        </>
    )
};
