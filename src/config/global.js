export default {
  global: {
    Name: 'Diseño y modelado de bases de datos',
    Description:
      'Este componente aborda los fundamentos necesarios para comprender, estructurar y gestionar sistemas de información, iniciando con conceptos básicos de lógica y clasificación de bases de datos. Profundiza en los principios de las bases de datos relacionales, su diseño mediante modelos conceptual, lógico y físico, así como la aplicación de procesos como la normalización y definición de claves.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de lógica y algoritmia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Formatos de representación de la información',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de las bases de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Usos, diferencias y ventajas de los distintos tipos de bases de datos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de bases de datos relacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Teoría de bases de datos relacionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes de una base de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Sistema gestor de bases de datos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Modelos de diseño de bases de datos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Diseño de bases de datos relacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normalización de bases de datos',
            hash: 't_3_1',
          },
          { numero: '3.2', titulo: 'Modelo relacional', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Tipos de claves', hash: 't_3_3' },
          {
            numero: '3.4',
            titulo: 'Entidades fuertes y débiles',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Campos relacionales y dependencia de existencia',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Lenguajes de sistemas gestores de bases de datos (DBMS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Lenguaje de definición de datos (DDL)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Lenguaje de manipulación de datos (DML)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Lenguaje de control de datos (DCL)',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Lenguaje de definición de vistas (VDL)',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Bases de datos NoSQL y su diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conceptos, principios y terminología NoSQL',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Modelos de bases de datos NoSQL',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos de bases de datos NoSQL',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Arquitecturas y esquemas de datos',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Diseño de bases de datos NoSQL',
            hash: 't_5_5',
          },
        ],
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
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA5_228146_DU.pdf',
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
      tipo: 'Sitio <em>web</em>',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'conjunto ordenado y finito de pasos que permite resolver un problema o realizar una tarea específica, garantizando un resultado determinado a partir de datos de entrada.',
    },
    {
      termino: 'Base de datos relacional',
      significado:
        'sistema de almacenamiento de información organizado en tablas relacionadas entre sí mediante claves, que permite gestionar datos estructurados de forma consistente.',
    },
    {
      termino: 'Lenguaje SQL',
      significado:
        'lenguaje estándar utilizado para gestionar bases de datos relacionales, permitiendo definir estructuras, manipular datos y controlar accesos mediante comandos como DDL, DML y DCL.',
    },
    {
      termino: 'Normalización',
      significado:
        'proceso de organización de los datos en una base de datos relacional para reducir redundancias y mejorar la integridad, mediante la división en tablas relacionadas.',
    },
    {
      termino: 'NoSQL',
      significado:
        'tipo de base de datos no relacional que permite almacenar datos no estructurados o semiestructurados, caracterizándose por su flexibilidad, escalabilidad y alto rendimiento en entornos distribuidos.',
    },
    {
      termino: 'Patrón de acceso',
      significado:
        'forma en que los datos son consultados o utilizados dentro de un sistema, elemento clave en el diseño de bases de datos NoSQL para optimizar el rendimiento.',
    },
    {
      termino: 'Sistema gestor de bases de datos (DBMS)',
      significado:
        '<em>software</em> que permite crear, administrar y manipular bases de datos, garantizando la seguridad, integridad y acceso eficiente a la información.',
    },
    {
      termino: 'Vista (<em>view</em>)',
      significado:
        'estructura virtual basada en una consulta que permite visualizar datos de una o varias tablas sin almacenarlos físicamente, facilitando la seguridad y simplificación de consultas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asaad, C. & Baïna, K. (2020). NoSQL <em>Databases: Yearning for Disambiguation</em>. arXiv.',
      link: 'https://arxiv.org',
    },
    {
      referencia:
        'Beaulieu, A. (2020). <em>Learning SQL</em> (3rd ed.). O’Reilly Media.',
      link: '',
    },
    {
      referencia:
        'Codd, E. F. (1970). <em>A Relational Model of Data for Large Shared Data Banks</em>. Communications of the ACM.',
      link: '',
    },
    {
      referencia:
        'Coronel, C. & Morris, S. (2018). <em>Database Systems: Design, Implementation, & Management</em> (13th ed.). Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Date, C. J. (2004). <em>An Introduction to Database Systems (8th ed.). Addison-Wesley</em>.',
      link: '',
    },
    {
      referencia:
        'Elmasri, R. & Navathe, S. (2016). <em>Fundamentals of Database Systems</em> (7th ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Sabharwal, N. & Gupta, S. (2015). <em>Practical MongoDB</em>. Apress.',
      link: '',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H., & Sudarshan, S. (2019). <em>Database System Concepts</em> (7th ed.). McGraw-Hill.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
