
export interface IComitePolitico {
    imagen: string,
    nombre: string,
    cargo?:string,   
}

export const comitePoliticoData:IComitePolitico[] = [ 
    {
        imagen: 'comite-politico/hombre-peruano.png',
        nombre: 'DEL ÁGUILA MOROTE, Ricardo Edmundo',
    },
    {
        imagen: 'comite-politico/chavez-abraham.png',
        nombre: 'CHÁVEZ CHIONG, Julio Abraham',
        cargo: 'PRESIDENTE DEL PARTIDO',
    },
   
    {
        imagen: 'comite-politico/hombre-peruano.png',
        nombre: 'GÁLVEZ DE LA PUENTE, Luis Enrique Felipe Miguel',
    },
    {
        imagen: 'comite-politico/hombre-peruano.png',
        nombre: 'GARCIA BELAUNDE, Víctor Andrés',
    },
    {
        imagen: 'comite-politico/hombre-peruano.png',
        nombre: 'KESSEL DEL RÍO, Allen Helmut',
    },
    {
        imagen: 'comite-politico/mujer-peruana.png',
        nombre: 'ARROYO BERTHA',
    },
    {
        imagen: 'comite-politico/mujer-peruana.png',
        nombre: 'NIEVA MARIA EUGENIA',
    },
    {
        imagen: 'comite-politico/hombre-peruano.png',
        nombre: 'VELARDE YÁÑEZ, Luis Alberto',
    },
]
