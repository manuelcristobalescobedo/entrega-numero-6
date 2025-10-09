export type Precios = {
    estudiante: number;
    adulto: number;
    mayor: number;
};

export type Resena = {
    comentario: string;
    estrellas: number;
    usuario: string;
};

export type Calendario = {
    fechas: string[];
    horas: string[];
};

export type Rango = {
    minimo: number;
    maximo: number;
};

export type Producto = {
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

export type Usuario = {
    id: string;
    nombre: string;
    apellido: string;
    correo: string;
    telefono: string;
    fotografia: string;
    registro: string;
    activo: boolean;
    reservas?: string[];
};