import type { Producto, Usuario } from "../types/Tipos";

export const productos: Producto[] = [
  {
    id: "1",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "2",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "3",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "4",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "5",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "6",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "7",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "8",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "9",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "10",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "11",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  },
  {
    id: "12",
    titulo: "Caminata por las lagunas altiplánicas de Piedras Rojas",
    ubicacion: "San Pedro de Atacama, Antofagasta",
    categorias: ["Categoría 1", "Categoría 2", "Categoría 3"],
    imagenes: [
      "https://i.postimg.cc/vTW31JSy/Piedras-Rojas-San-Pedro-de-Atacama-Chile-1.jpg",
      "https://i.postimg.cc/nrv0sywj/Piedras-Rojas-San-Pedro-de-Atacama-Chile-2.jpg",
      "https://i.postimg.cc/PJm2LgFr/Piedras-Rojas-San-Pedro-de-Atacama-Chile-3.jpg"
    ],
    descripcion: "Camina entre el viento, la sal y los volcanes...",
    anunciante: "Mauro Lima",
    fotografia: "https://drive.google.com/uc?export=view&id=1R98VaC-OT7vH_KHaUwO-KPh_chONkmy4",
    precios: { adulto: 19990, estudiante: 14990, mayor: 9990 },
    resenas: [
      { usuario: "Karla Robinson", comentario: "Nuestra hija quedó fascinada...", estrellas: 5 },
      { usuario: "Miranda Salzgeber", comentario: "Una caminata tranquila...", estrellas: 4 },
      { usuario: "Marek Piwnicki", comentario: "Salimos con toda la familia...", estrellas: 5 }
    ],
    calendarizacion: { fechas: ["2026-02-10","2026-02-11","2026-02-12"], horas: ["08:00","09:00","11:00"] },
    etiquetas: ["En familia","En pareja","En grupos pequeños"],
    caracteristicas: "La caminata está pensada para principiantes...",
    informacion: "La actividad tiene una duración aproximada de 3 horas...",
    cancelacion: "El anunciante asegura la devolución completa...",
    incluye: "El servicio incluye transporte...",
    excluye: "El servicio no incluye transporte hasta el punto de encuentro...",
    personas: { minimo: 10, maximo: 20 },
    registro: "2026-02-01T19:35:00.000Z",
    disponibilidad: true,
    oferta: false
  }
];

export const usuarios: Usuario[] = [
  {
    id: "de22e8f0-b773-47a7-aec0-7ef5687eae2d",
    nombre: "Karla",
    apellido: "Robinson",
    correo: "robinsonkarla@email.com",
    telefono: "+56 9 1234 5678",
    fotografia: "https://drive.google.com/uc?export=view&id=1CvHvZnLyWTyx7aKN9XRgg37cmxFJoVSL",
    registro: "2026-01-03T19:35:00.000Z",
    activo: true,
    reservas: ["bcdeeb62-8c9d-42b8-89a8-fd4e5fb69936"]
  }
];