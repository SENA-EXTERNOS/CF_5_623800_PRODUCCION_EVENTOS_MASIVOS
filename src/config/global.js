export default {
  global: {
    componenteFormativo: 'Montajes y normatividad de los eventos',
    descripcionCurso:
      'Todo evento requiere de una correcta planificación y organización a fin de evitar cualquier inconveniente durante y después del mismo. Una de las actividades esenciales es el montaje de todas las estructuras necesarias para la realización de lo planeado, por lo cual una buena gestión es clave para poder llevar a cabo las actividades de una manera correcta',
    //imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Tipos de montajes para eventos presenciales, híbridos y digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Titulo de segundo nivel',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El render y el raider de un evento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normas de seguridad y trabajo en eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Documentación legal',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Personal logístico',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Riesgos en los eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Trabajo en alturas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Trabajo en alturas.',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Implementos de protección y dotación.',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Documentación requerida seguridad social',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Restricciones y Normatividad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Condiciones de escenarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Trabajo en alturas',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo:
              'Instalaciones eléctricas, sustancias inflamables y normativa de uso.',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Uso de Drones en los eventos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Pirotecnia y efectos especiales en los eventos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aeronave pilotada a distancia - RPA',
      significado:
        'aeronave dirigida por un ‘piloto remoto’, emplazado en una "estación de piloto remoto" ubicada fuera de la aeronave (es decir en tierra, en barco, en otra aeronave, en el espacio, etc.), quien monitorea la aeronave en todo momento y tiene responsabilidad directa en la conducción segura durante su vuelo.',
    },
    {
      termino: 'Altura',
      significado:
        'medida de un cuerpo o una figura considerada verticalmente desde su punto más elevado hasta su base (RAE, sf)',
    },
    {
      termino: 'Artículo pirotécnico',
      significado:
        'todo artículo que contenga materia reglamentada destinada a producir un efecto calorífico, luminoso, sonoro, gaseoso o fumígeno o una combinación de tales efectos, como consecuencia de reacciones químicas exotérmicas autosostenidas.',
    },
    {
      termino: 'Desastre',
      significado:
        'interrupción grave del funcionamiento de una comunidad o sociedad en cualquier escala, debido a la ocurrencia de fenómenos peligrosos que interaccionan con las condiciones de exposición, vulnerabilidad y capacidad, ocasionando impactos y pérdidas de vida, salud, materiales, económicos y ambientales.',
    },
    {
      termino: 'Emergencia',
      significado:
        'escenario o situación de afectación a una comunidad, sus bienes, medios de vida, servicios y su entorno, causado por un evento peligroso de origen natural y antrópico, que puede ser resuelto por los recursos locales.',
    },
    {
      termino: 'Escenario',
      significado: 'lugar en que ocurre o se desarrolla un suceso (RAE, sf).',
    },
    {
      termino: 'Evacuación',
      significado:
        'retirar a personas y bienes de un lugar determinado con el fin de protegerlos, antes, durante o después de una emergencia.',
    },
    {
      termino: 'Factor de Riesgo',
      significado:
        '“Puede considerarse como toda circunstancia, condición o situación presentes en el ambiente de trabajo, que de no ser eliminados y/o controlados podrán desencadenar como consecuencia accidentes de trabajo y/o enfermedades laborales” (Ministerio de Salud y Protección Social, 2021).',
    },
    {
      termino: 'Implemento de protección',
      significado:
        '“Se denomina así a cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o su salud en el trabajo, así como cualquier complemento o accesorio destinado a tal fin. Los EPP no evitan el accidente o el contacto con elementos agresivos pero ayudan a que la lesión sea menos grave” (Ministerio de Salud y Protección Social, 2021)',
    },
    {
      termino: 'Plan de Emergencias',
      significado:
        'documento elaborado según normatividad vigente, estableciendo los procesos, procedimientos, recursos y capacidad de respuesta, necesarios para la atención de desastres.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía de Medellín (2022). Protocolo normas de prevención para la quema de juegos pirotécnicos. ',
      link:
        'https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=contenido/4913-Protocolo-normas-de-prevencion-para-la-quema-de-juegos-pirotecnicos',
    },
    {
      referencia:
        'Acosta Argote, C. (2021). Conozca la regulación y normas legales vigentes para vuelo de drones en Colombia',
      link:
        'https://www.asuntoslegales.com.co/consumidor/conozca-la-regulacion-y-normas-legales-para-el-vuelo-de-drones-en-colombia-3248829',
    },
    {
      referencia:
        'Decreto 1276 de 2020. [Presidencia de la República] Reglamenta la simplificación de trámites y requisitos para la realización de espectáculos públicos de las artes escénicas, y se dictan otras disposiciones. Septiembre 23 de 2020 Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), O.A., M.P (2020). Eventos y espectáculos públicos MANUAL DE BUENAS PRÁCTICAS: Planificación para el montaje y desmontaje Instituto Nacional de Seguridad y Salud en el Trabajo.',
      link:
        'https://www.insst.es/documentacion/catalogo-de-publicaciones/eventos-y-espect%C3%A1culos-p%C3%BAblicos-manual-de-buenas-pr%C3%A1cticas-planificaci%C3%B3n-para-el-montaje-y-desmontaje',
    },
    {
      referencia:
        'Ministerio de trabajo Colombia (sf). ¿Qué es la seguridad social?',
      link:
        'https://www.mintrabajo.gov.co/empleo-y-pensiones/empleo/subdireccion-de-formalizacion-y-proteccion-del-empleo/que-es-la-seguridad-social',
    },
    {
      referencia:
        'Real Academia Española. (2021). Diccionario de la lengua española.',
      link: 'https://www.rae.es/',
    },
    {
      referencia:
        'Resolución 569 de 2014. [Secretaría distrital de gobierno] Por la cual se implementan y desarrollan algunos de los aspectos relevantes establecidos en el Decreto 599 de 2013 y se dictan otras disposiciones. 17 de octubre de 2014',
      link: '',
    },
    {
      referencia:
        'Resolución 0627 de 2006. [Ministerio de Ambiente, vivienda y desarrollo territorial] Adopta y unifica valores límites permisibles para la exposición ocupacional al ruido, para su correcta aplicación en todo el territorio nacional. Abril 07 de 2006',
      link: '',
    },
    {
      referencia:
        'Resolución 1409 de 2012 [Ministerio del Trabajo] Por la cual se establece el Reglamento de Seguridad para protección contra caídas en trabajo en alturas. 23 de julio de 2012',
      link: '',
    },
    {
      referencia: 'Seguridad Global (2021). EPP para Trabajos en Altura.',
      link: 'https://seguridadglobal.com.ar/epp-trabajos-altura/',
    },
    {
      referencia:
        'Sumatec (2019). ¿Cuáles son los EPP para trabajo en alturas?',
      link: 'https://sumatec.co/epp-para-trabajo-en-alturas/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
