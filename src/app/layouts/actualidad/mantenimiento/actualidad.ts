  export interface Noticia {
      titulo: string;
      contenido: string;
      fecha: string;
      enlace: string;
      imagen: string; // Nueva propiedad para la URL de la imagen
    }  

  export const noticias: Noticia[] = [
      {
        titulo: "Elecciones 2026: Conoce cuáles son los partidos políticos inscritos y los que están en proceso de inscripción",
        fecha: "03/10/2024",
        contenido: "Infórmate sobre los partidos políticos que ya se han inscrito para participar en las próximas elecciones y aquellos que están en proceso de registro.",
        enlace: "https://rpp.pe/politica/elecciones/elecciones-2026-conoce-cuales-son-los-partidos-politicos-inscritos-y-los-que-estan-en-proceso-de-inscripcion-noticia-1572877",
        imagen: "noticias/elecciones-2026-conoce-cuales-son-los-partidos-politicos.png"
      },
      {
        titulo: "Estado de Emergencia por 60 días EN VIVO: últimas noticias de la medida dictada por el Gobierno",
        fecha: "01/10/2024",
        contenido: "La medida busca enfrentar la creciente ola de violencia y crimen en diversos distritos de Lima y Callao.",
        enlace: "https://elcomercio.pe/lima/sucesos/estado-de-emergencia-hoy-en-vivo-paro-de-transportistas-y-ultimas-noticias-por-las-medidas-restrictivas-en-14-distritos-de-lima-y-callao-sicariato-extorsion-dina-boluarte-lbposting-noticia/",
        imagen: "noticias/estado-de-emergencia-por-60-dias-en-vivo.png"
      },
      {
        titulo: "Wilson Soto dijo que “no tendría sentido” una even...",
        fecha: "28/09/2024",
        contenido: "Expertos analizan la situación actual del partido y sus oportunidades de mejorar su presencia en el Congreso en las próximas elecciones.",
        enlace: "https://rpp.pe/politica/congreso/wilson-soto-dijo-que-no-tendria-sentido-una-eventual-creacion-del-ministerio-de-infraestructura-noticia-1576990",
        imagen: "noticias/wilson-soto-dijo-que-no-tendria-sentido.png"
      },
      {
        titulo: "Acción Popular plantea elevar penas para sancionar delitos que atentan contra bosques",
        fecha: "25/09/2024",
        contenido: "La propuesta busca fortalecer la protección de los recursos forestales y castigar con mayor severidad a quienes cometan delitos ambientales.",
        enlace: "https://gestion.pe/peru/accion-popular-plantea-elevar-penas-para-sancionar-delitos-que-atentan-contra-bosques-noticia/",
        imagen: "noticias/accion-popular-plantea-elevar-penas-para-sanciona.png"
      },
      {
        titulo: "Julio Chávez: Invitamos a varios para que regreses a Acción Popular",
        fecha: "18/09/2024",
        contenido: "El presidente del partido hizo un llamado a los exmiembros para que consideren regresar a las filas de Acción Popular, resaltando la importancia de la unidad.",
        enlace: "https://canaln.pe/video/n-portada/julio-chavez-invitamos-varios-que-regreses-accion-popular-n4134",
        imagen: "noticias/julio-chavez-invitamos-a-varios-para-que-regreses.png"
      },
      {
        titulo: "Acción Popular tras diálogo con Dina Boluarte: “Esperábamos algunas cosas más concretas, más aterrizadas”",
        fecha: "15/08/2024",
        contenido: "Luego de la reunión con la presidenta, los representantes de Acción Popular expresaron su deseo de recibir propuestas más claras y ejecutables.",
        enlace: "https://elcomercio.pe/politica/actualidad/accion-popular-tras-dialogo-con-dina-boluarte-esperabamos-algunas-cosas-mas-concretas-mas-aterrizadas-julio-chavez-ultimas-noticia/",
        imagen: "noticias/accion-popular-tras-dialogo-con-dina-boluarte.png"
      },
      {
        titulo: "Marleny Portero asume la presidencia de la Comisión de Transportes y Comunicaciones",
        fecha: "18/08/2024",
        contenido: "Marleny Portero asumió oficialmente el cargo y prometió trabajar en proyectos que beneficien la movilidad en el país.",
        enlace: "https://gestion.pe/peru/marleny-portero-asume-la-presidencia-de-la-comision-de-transportes-y-comunicaciones-peru-comision-de-transportes-y-comunicaciones-congreso-del-peru-accion-popular-noticia/",
        imagen: "noticias/marleny-portero-asume-la-presidencia-de-la-comision.png"
      },
      {
        titulo: "Acción Popular anuncia que irá con candidato propio en las elecciones 2026",
        fecha: "25/08/2024",
        contenido: "La dirigencia de Acción Popular anunció que participará en las elecciones con un candidato propio, reafirmando su independencia política.",
        enlace: "https://diariocorreo.pe/politica/accion-popular-ira-con-candidato-propio-en-elecciones-2026-noticia/?ref=dcr",
        imagen: "noticias/accion-popular-anuncia-que-ira-con-candidato.png"
      },
      {
        titulo: "Pdte. de Acción Popular cuestionó avances en Gobierno de Boluarte",
        fecha: "05/09/2024",
        contenido: "El presidente del partido Acción Popular expresó su preocupación por la falta de avances en diversas áreas del gobierno actual.",
        enlace: "https://canaln.pe/actualidad/pdte-accion-popular-cuestiono-avances-gobierno-boluarte-n476423",
        imagen: "noticias/pdte-de-accion-popular-cuestiono-avances.png"
      },
      {
        titulo: "García Belaúnde sobre Fujimori: 'Murió un adversario'",
        fecha: "12/09/2024",
        contenido: "La reciente declaración del excongresista García Belaúnde sobre el fallecimiento de Alberto Fujimori ha generado controversia en la opinión pública.",
        enlace: "https://canaln.pe/actualidad/garcia-belaunde-sobre-fujimori-murio-adversario-n476586",
        imagen: "noticias/garcia-belaunde-sobre-fujimori-murio-un-adversario.png"
      },
      {
        titulo: "Congresista Soto pide declarar en emergencia a Lima ante ola de inseguridad",
        fecha: "03/09/2024",
        contenido: "El congresista Wilson Soto solicitó al gobierno que declare en emergencia la ciudad de Lima debido al aumento de la inseguridad ciudadana.",
        enlace: "https://diariocorreo.pe/edicion/lima/congresista-wilson-soto-pide-declarar-en-emergencia-a-lima-ante-ola-de-inseguridad-peru-accion-popular-noticia/",
        imagen: "noticias/congresista-soto-pide-declarar-en-emergencia.png"
      },
      {
        titulo: "Jefa del Estado coordinó trabajo con Acción Popular en favor de la población",
        fecha: "30/07/2024",
        contenido: "Reunión se dio en Palacio de Gobierno con líderes del partido, donde se abordaron estrategias para mejorar la atención a la población.",
        enlace: "https://www.elperuano.pe/noticia/250443-jefa-del-estado-coordino-trabajo-con-accion-popular-en-favor-de-la-poblacion",
        imagen: "noticias/jefe-del-estado-coordino-trabajo-ap-poblacion.jpg"
      },
      {
        titulo: "Presidente de Acción Popular considera que su agrupación no debe formar alianzas con partidos políticos para las Elecciones 2026",
        fecha: "27/06/2024",
        contenido: "El presidente del partido Acción Popular (AP), Julio Chávez, señaló que la postura de la agrupación política debe estar orientada a generar 'entendimientos con movimientos o fuerzas' que están en regiones. En entrevista con el programa Nunca es Tarde, no descartó ser candidato del partido en las Elecciones 2026.",
        enlace: "https://rpp.pe/politica/elecciones/elecciones-2026-presidente-de-accion-popular-sostiene-que-su-agrupacion-no-debe-formar-alianzas-con-partidos-politicos-noticia-1565085?ref=rpp",
        imagen: "noticias/presidente-ap-no-alianzas-partidos-politicos-2026.webp"
      },
      {
        titulo: "Acción Popular realizará elecciones para elegir a su nuevo presidente después de 6 años",
        fecha: "18/06/2024",
        contenido: "Julio Chávez Chiong, candidato a la presidencia de Acción Popular, indicó que en los últimos cinco años el partido de la lampa no ha tenido una buena representación con su bancada en el Congreso. Considera que de cara a las Elecciones del 2026 su partido debe ir sin alianzas.",
        enlace: "https://rpp.pe/politica/elecciones/accion-popular-realizara-elecciones-para-elegir-a-su-nuevo-presidente-despues-de-6-anos-noticia-1562594?ref=rpp+",
        imagen: "noticias/ap-elecciones-elegir-nuevo-presidente-6.webp"
      },
      {
        titulo: "Eduardo Salhuana encabezará lista para la Mesa Directiva del Congreso",
        fecha: "25/07/2024",
        contenido: "El legislador, Elvis Vergara, confirmó que el integrante de Alianza Para el Progreso (APP) será el candidato de una lista multipartidaria que busca presidir el Congreso de la República.",
        enlace: "https://rpp.pe/politica/congreso/eduardo-salhuana-encabezara-lista-para-la-mesa-directiva-del-congreso-noticia-1571893?ref=rpp",
        imagen: "noticias/eduardo-salguana-mesa-directiva-congreso.webp"
      }
    ];