type Precios = {
    estudiante: number;
    adulto: number;
    mayor: number;
};

type Resena = {
    comentario: string;
    estrellas: number;
    usuario: string;
};

type Calendario = {
    fechas: string[];
    horas: string[];
};

type Rango = {
    minimo: number;
    maximo: number;
};

type Producto = {
    id: string;
    titulo: string;
    ubicacion: string;
    categorias: string[];
    imagenes: string[];
    descripcion: string;
    anunciante: string;
    fotografia: string;
    precios: Precios;
    resenas: Resena[];
    calendarizacion: Calendario;
    etiquetas: string[];
    caracteristicas: string;
    informacion: string;
    cancelacion: string;
    incluye: string;
    excluye: string;
    personas: Rango;
    registro: string;
    disponibilidad: boolean;
    oferta: boolean;
};

export type { Producto };