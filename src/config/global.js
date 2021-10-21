export default {
  global: {
    componenteFormativo: 'Tendencias pedagógicas contemporáneas',
    descripcionCurso:
      'Los diferentes sectores productivos están cambiando las dinámicas de sus requerimientos. La entrada de nuevos actores para la inversión y la innovación, demanda un personal cualificado que haya apropiado una serie de conocimientos y habilidades transversales propios del siglo XXI.<br>En este componente formativo, identificará conceptos sobre la reglamentación y políticas educativas, cuarta revolución industrial, vigilancia tecnológica, nuevas tendencias educativas y medios tecnológicos inmersos en el desempeño de la educación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.png'),
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
        titulo: 'Marco contextual de la educación contemporánea mundial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Generalidades de la educación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Descripción de las características del entorno educativo colombiano',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Normatividad y estructuras organizacionales del sistema educativo colombiano',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La gestión del conocimiento y la cuarta revolución industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'El desarrollo tecnológico y la gestión del conocimiento',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Historia e impacto social',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La educación STEM y el desarrollo de la economía circular',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'La planificación educativa y la educación STEM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Vigilancia tecnológica',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Sistemas de información y la vigilancia tecnológica ',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Plan Nacional de Desarrollo',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Innovación y creatividad educativa',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Desarrollo tecnológico',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Cantú-Martínez, P.C. (2017). Educación ambiental y la escuela como espacio educativo para la promoción de la sustentabilidad. Revista Electrónica Educare',
    },
    {
      referencia:
        'Constitución Política de Colombia, Art 67. 7 de julio de 1991.',
    },
    {
      referencia:
        'CPAN Ingenio 2010 (s.f.) El Gran Colisionador de Hadrones (LHC) ',
      link:
        'https://www.i-cpan.es/es/content/el-gran-colisionador-de-hadrones-lhc',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (2018) La Educación en Colombia. ',
      link:
        'https://www.dnp.gov.co/programas/desarrollo-social/subdireccion-de-educacion/Paginas/subdireccion-de-educacion.aspx ',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (2019) ¿Qué es el Plan Nacional de Desarrollo? ',
      link:
        'https://www.dnp.gov.co/DNPN/Paginas/Que-es-el-Plan-Nacional-de-Desarrollo.aspx',
    },
    {
      referencia:
        'Escudero Nahón, A. (2018). Redefinición del “aprendizaje en red” en la cuarta revolución industrial. Apertura, 10 (1), pp. 149-163. ',
      link: 'http://dx.doi.org/10.32870/Ap.v10n1.1140',
    },
    {
      referencia:
        'Ferrer, A. T. (2005). Historia de la educación (Edad Contemporánea). Francia.',
    },
    {
      referencia:
        'Helg, A. (2001). La educación en Colombia, 1918-1957. Una historia. Bogotá, D.C.: Universidad Pedagógica Nacional - Plaza & Janes.',
    },
    {
      referencia:
        'Ley 115 de 1994. Por la cual se expide la ley general de educación. Febrero 8 de 1994 DO. N°41214.8',
    },
    {
      referencia:
        'Ley 1620 de 2013. Por la cual se crea el Sistema Nacional de Convivencia Escolar y Formación para el Ejercicio de los Derechos Humanos, la Educación para la Sexualidad y la Prevención y Mitigación de la Violencia Escolar. Marzo 20 de 2013 DO N°48733',
    },
    {
      referencia:
        'Ley 30 de 1992. Por la cual se organiza el servicio público de la Educación Superior. Diciembre 29 de 1992 DO. N°40.700 ',
    },
    {
      referencia:
        'Ley 749 de 2002. Por la cual se organiza el servicio público de la educación superior en las modalidades de formación técnica profesional y tecnológica, y se dictan otras disposiciones. Julio 19 de 2002 DO. N°44.872',
    },
    {
      referencia:
        'Lundvall, B. A., Johnson, B. (1994). The Learning Economy. En Journal of Industry Studies, 1(2), p. 23-42.',
    },
    {
      referencia:
        'Martínez, F. (2013). Evaluación de plataformas web para su implementación en el Sistema de Vigilancia Tecnológica de la Consultoría Biomundi. Revista Cubana de Información en Ciencias de la Salud. 25. ',
      link:
        'http://eprints.rclis.org/21173/1/Evaluaci%C3%B3n%20de%20plataformas%20web%20para%20la%20vigilancia%20tecnol%C3%B3gica%20en%20la%20Consultor%C3%ADa%20Biomundi.pdf',
    },
    {
      referencia:
        'Oliván, R. (2016). La Cuarta Revolución Industrial, un relato desde el materialismo cultural. URBS. Revista de Estudios Urbanos y Ciencias Sociales, 6(2), 101-111.	 ',
      link: 'http://www2.ual.es/urbs/index.php/%20urbs/article/view/olivan',
    },
    {
      referencia:
        'Powell, W.W. y Snellman, K. (2004). The knowledge economy. Annual Review of Sociology, 30, 199–220. Recuperado de ',
      link: 'https://scholar.harvard.edu/',
    },
    {
      referencia:
        'Purzer, S. C. (2014). Apoyar la implementación de ngss a través de la investigación: ingeniería. Obtenido de ',
      link: 'https://narst.org/blog/ngss-engineering',
    },
    {
      referencia:
        'Sánchez, C. y Ríos, H. (2011). La economía del conocimiento como base del crecimiento económico en México. Enl@ce Revista Venezolana de Información, Tecnología y Conocimiento, 8 (2), 43-60. Recuperado de ',
      link: 'http://www.redalyc.org/pdf/823/82319126004.pdf',
    },
    {
      referencia: 'T&E innovate develop (2018) La 4ª revolución Industrial. ',
      link: 'https://www.tye-solutions.com/post?id=4',
    },
    {
      referencia:
        'Vilaseca, J., Torrent, J. y Díaz, A. (2002). La economía del conocimiento: paradigma tecnológico y cambio estructural. España: UOC. Recuperado de ',
      link: 'http://www.uoc.edu/in3/dt/20007/20007.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Big Data',
      terminoHTML: '<em>Big Data</em>',
      significado:
        'Procesamiento y organización de grandes cantidades de datos, estructurados y no estructurados en una empresa y la importancia de la destinación de estos datos en términos económicos.',
    },
    {
      termino: 'Contemporánea',
      significado: 'Persona o sujeto que vive en la misma época actual.',
    },
    {
      termino: 'Cloud Computing',
      terminoHTML: '<em>Cloud Computing</em>',
      significado:
        'Cloud Computing o computación en la nube, consiste en la capacidad de aprovechamiento del internet, softwares remotos y procesamiento de datos.',
    },
    {
      termino: 'Consolidador de Hadrones ',
      significado:
        'Es el mayor acelerador de partículas del mundo. En este experimento, los físicos del Laboratorio Europeo de Física de Partículas (CERN) hacen chocar entre sí partículas subatómicas (principalmente protones, uno de los constituyentes del núcleo del átomo) en puntos seleccionados donde se ubican grandes detectores. Estos registran las partículas resultantes de las colisiones para estudiar los elementos que componen la materia de la que está hecha el Universo, incluidos nosotros mismos, y sus interacciones. ',
    },
    {
      termino: 'Dualización',
      significado:
        'Acción de dualidad, existencia de dos caracteres o fenómenos distintos en una misma persona o cosa.',
    },
    {
      termino: 'Internet de las cosas',
      significado:
        'Conexión de internet entre equipos electrónicos de la vida diaria, entre ellas y a estas con las personas, a través de sensores y otros dispositivos con capacidad de enlazar en mundo físico con las conexiones digitales.',
    },
    {
      termino: 'Tecnología disruptiva',
      significado:
        'Es aquella innovación tecnológica que se consolida rápidamente en el mercado al generar productos o servicios en cualquier sector y genera un cambio radical frente a una tecnología existente.',
    },
  ],
  complementario: [
    {
      texto: 'Canal Salesiano. (2012). Educación para el siglo XXI',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=L6MNTXi82GM',
    },
    {
      texto:
        'Escudero, A. (2018). Redefinición del “aprendizaje en red” en la cuarta revolución industrial.',
      tipo: 'PDF',
      descarga:
        '/downloads/Redefinicion_arendizaje_en_red_cuarta_revolucion_industrial.pdf',
    },
    {
      texto:
        'Pérez Betancur, N. (2016). El SENA a la vanguardia de la cuarta revolución industrial.',
      tipo: 'PDF',
      descarga:
        '/downloads/El_sena_a_la_vanguardia_ de_cuarta_revolucion_industrial.pdf',
    },
    {
      texto: 'Coleman, D. (2009). El espíritu creativo.',
      tipo: 'PDF',
      link:
        'https://clea.edu.mx/biblioteca/files/original/d4bf6abe41d826c54a5fc661aaafb5cf.pdf',
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
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Iván Mauricio González O.',
        cargo: 'Instructor',
        centro:
          'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
      },
      {
        nombre: 'Vilma Lucía Perilla Méndez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Correctora de estilo',
        centro:
          'Centro para la Industria y la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Experta Temática',
        centro:
          'Centro de Diseño Tecnológico Industrial (DCTI) – Regional Valle',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro Agropecuario La Granja – Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      /*{
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
