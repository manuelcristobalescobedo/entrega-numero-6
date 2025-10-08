type Usuario = {
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

export type { Usuario };