// archivos-data.ts
export interface IArchivo {
    id: number;
    titulo: string;
    linkDescargar: string;
}

export interface ICategoriaArchivos {
    categoria: string;
    archivos: IArchivo[];
}

export const archivosData: ICategoriaArchivos[] = [
    {
        categoria: 'DIRECTIVAS',
        archivos: [
            {
                id: 1,
                titulo: 'DIRECTIVA 001-2024-ONRP-AP AFILIACIONES',
                linkDescargar: 'oficina-nacional-de-registro-partidario/directivas/DIRECTIVA 001-2024-ONRP-AP AFILIACIONES.pdf'
            },
        ],
    },
    {
        categoria: 'SOLICITUDES DE AFILIACIÓN',
        archivos: [
            {
                id: 2,
                titulo: 'LISTA DE SOLICITUDES DE AFILIACIÓN 01.06.24',
                linkDescargar: 'oficina-nacional-de-registro-partidario/solicitudes-afiliacion/LISTA DE SOLICITUDES DE AFILIACIÓN 01.06.24.pdf'
            },
            {
                id: 3,
                titulo: 'LISTA DE SOLICITUDES DE AFILIACIÓN 01.08.2024',
                linkDescargar: 'oficina-nacional-de-registro-partidario/solicitudes-afiliacion/LISTA DE SOLICITUDES DE AFILIACIÓN 01.08.2024.pdf'
            },
            {
                id: 4,
                titulo: 'LISTA DE SOLICITUDES DE AFILIACIÓN 07.05.24',
                linkDescargar: 'oficina-nacional-de-registro-partidario/solicitudes-afiliacion/LISTA DE SOLICITUDES DE AFILIACIÓN 07.05.24.pdf'
            },
            {
                id: 5,
                titulo: 'LISTA DE SOLICITUDES DE AFILIACIÓN 12.04.24',
                linkDescargar: 'oficina-nacional-de-registro-partidario/solicitudes-afiliacion/LISTA DE SOLICITUDES DE AFILIACIÓN 12.04.24.pdf'
            },
            {
                id: 6,
                titulo: 'LISTA DE SOLICITUDES DE AFILIACIÓN 15.08.2024',
                linkDescargar: 'oficina-nacional-de-registro-partidario/solicitudes-afiliacion/LISTA DE SOLICITUDES DE AFILIACIÓN 15.08.2024.pdf'
            },
            {
                id: 7,
                titulo: 'LISTA DE SOLICITUDES DE AFILIACIÓN 31.07.24',
                linkDescargar: 'oficina-nacional-de-registro-partidario/solicitudes-afiliacion/LISTA DE SOLICITUDES DE AFILIACIÓN 31.07.24.pdf'
            },
            {
                id: 8,
                titulo: 'LISTA DE SOLICITUDES DE AFILIACIÓN AL 12.04.24',
                linkDescargar: 'oficina-nacional-de-registro-partidario/solicitudes-afiliacion/LISTA DE SOLICITUDES DE AFILIACIÓN AL 12.04.24.pdf'
            },
            {
                id: 9,
                titulo: 'LISTA DE SOLICITUDES DE AFILIACIÓN',
                linkDescargar: 'oficina-nacional-de-registro-partidario/solicitudes-afiliacion/LISTA DE SOLICITUDES DE AFILIACIÓN.pdf'
            },
        ],
    },
    {
        categoria: 'COMUNICADOS',
        archivos: [
            {
                id: 10,
                titulo: 'COMUNICADO 1',
                linkDescargar: 'oficina-nacional-de-registro-partidario/comunicados/COMUNICADO 1.jpg'
            },
            {
                id: 11,
                titulo: 'COMUNICADO 2',
                linkDescargar: 'oficina-nacional-de-registro-partidario/comunicados/COMUNICADO 2.jpg'
            },
        ],
    },
];
