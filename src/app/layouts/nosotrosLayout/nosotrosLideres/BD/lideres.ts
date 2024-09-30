
export interface ILideres {
    nombre: string;
    descripcion: string;
    img: string;
}

export const lideresJSON: ILideres[] = [
    {
        nombre: 'Fernando Belaúnde Terry',
        descripcion: 'Su liderazgo y visión democrática fueron  fundamentales en la modernización del país, marcando un camino hacia  el desarrollo a través de sus dos presidencias.',
        img: 'nosotros/fernando-belaunde-terry.png'
    },
    {
        nombre: 'Valentín Paniagua Corazao',
        descripcion: 'Fue presidente del Perú entre 2000 y 2001,  tras la caída del régimen de Alberto Fujimori. Líder histórico de Acción  Popular, es reconocido por su papel en la transición democrática y su  compromiso con elecciones libres, contribuyendo a la restauración de la  institucionalidad en el país.',
        img: 'nosotros/valentin-paniagua-corazao.png'
    },
    {
        nombre: 'Javier Alva Orlandini',
        descripcion: 'Un defensor de los derechos humanos, fue  fundador de Acción Popular y ocupó importantes cargos, como  expresidente de la Cámara de Senadores y del Tribunal Constitucional.  Postuló a la presidencia en 1985.',
        img: 'nosotros/javier-alva-orlandini.png'
    },
    {
        nombre: 'Sandro Mariátegui',
        descripcion: 'Como vicepresidente y primer ministro, se  comprometió a impulsar reformas sociales significativas.',
        img: 'nosotros/sandro-mariategui.png'
    },
    {
        nombre: 'Javier Arias Stella',
        descripcion: 'Reconocido médico y exministro de Salud, contribuyó  al fortalecimiento de la salud pública en el Perú.',
        img: 'nosotros/javier-arias-stella.png'
    },
    {
        nombre: 'Gastón Acurio Velarde',
        descripcion: 'Abogado y diplomático que, a través de su  trabajo en el servicio público, defendió la política exterior peruana y la  soberanía territorial.',
        img: 'nosotros/gaston-acurio-velarde.png'
    },
]