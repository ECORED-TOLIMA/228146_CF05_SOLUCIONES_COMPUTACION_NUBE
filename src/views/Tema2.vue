<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fundamentos de bases de datos relacionales
    p.mb-4(data-aos="fade-down") Los fundamentos de las bases de datos relacionales constituyen el eje central para el diseño, implementación y gestión de sistemas de información estructurados. Este modelo, ampliamente adoptado en entornos empresariales y académicos, permite organizar la información de manera lógica mediante estructuras tabulares que garantizan la integridad, consistencia y accesibilidad de los datos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") El modelo relacional se basa en la representación de la información a través de relaciones, comúnmente conocidas como tablas, en las cuales los datos se organizan en filas y columnas. Cada fila representa un registro o instancia de una entidad, mientras que cada columna corresponde a un atributo que describe una característica específica de dicha entidad.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Desde una perspectiva conceptual, este modelo permite abstraer la realidad en estructuras organizadas, facilitando la comprensión del sistema y la manipulación de la información mediante operaciones definidas. Su importancia radica en que proporciona una base sólida para el diseño de bases de datos eficientes, evitando redundancias y asegurando la coherencia de los datos.
    .row.BG03.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-5.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Tabla")
            .col-12.mb-4.mb-md-0
              p.mb-0 Estructura que almacena datos organizados.
          .row(numero="2" titulo="Fila (registro)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Representa una instancia de la entidad.
          .row(numero="3" titulo="Columna (atributo)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Define una característica del dato.
          .row(numero="4" titulo="Clave primaria")
            .col-12.mb-4.mb-md-0
              p.mb-0 Identifica de manera única cada registro.
          .row(numero="5" titulo="Clave foránea")
            .col-12.mb-4.mb-md-0
              p.mb-0 Relaciona una tabla con otra.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img02.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Para mayor claridad, se relaciona la representación de esta base de datos con la siguiente imagen:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Representación de una estructura básica de una base de datos relacional
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img03.svg', alt='Figura 4 que muestra la estructura básica de una base de datos relacional, donde se representan las tablas de clientes, productos y ventas. El esquema evidencia el uso de llaves primarias para identificar registros y llaves secundarias o foráneas para establecer relaciones entre las tablas, permitiendo la integridad y coherencia de los datos dentro del sistema.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img04.svg', alt='Figura 4 que muestra la estructura básica de una base de datos relacional, donde se representan las tablas de clientes, productos y ventas. El esquema evidencia el uso de llaves primarias para identificar registros y llaves secundarias o foráneas para establecer relaciones entre las tablas, permitiendo la integridad y coherencia de los datos dentro del sistema.')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Principios del modelo relacional
    p.mb-4(data-aos="fade-down") El modelo relacional se fundamenta en principios matemáticos derivados de la teoría de conjuntos y la lógica formal, lo que permite definir estructuras precisas y operaciones consistentes sobre los datos. Este enfoque garantiza que la información pueda ser manipulada de manera estructurada, permitiendo realizar consultas, actualizaciones y eliminaciones sin comprometer la integridad del sistema.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-4(data-aos="fade-down") Uno de los principios clave es la independencia lógica de los datos, que permite modificar la estructura de la base de datos sin afectar las aplicaciones que la utilizan. Asimismo, el modelo relacional promueve la eliminación de redundancia, lo que reduce inconsistencias y mejora la calidad de la información.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img07.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Otro aspecto fundamental es la integridad de los datos, la cual se garantiza mediante restricciones que aseguran que la información almacenada sea válida, coherente y completa. Estas restricciones incluyen claves primarias, claves foráneas y reglas de dominio.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img05.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Concepto de relación entre datos
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img06.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") En el modelo relacional, las relaciones permiten vincular información entre diferentes tablas. Estas relaciones se establecen mediante claves, lo que permite mantener la coherencia de los datos y evitar duplicidad de información.
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Existen diferentes tipos de relaciones, como uno a uno, uno a muchos y muchos a muchos, las cuales determinan cómo se conectan las entidades dentro del sistema. Estas relaciones son fundamentales para estructurar correctamente la base de datos y facilitar la recuperación de información.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Teoría de bases de datos relacionales
    p.mb-4(data-aos="fade-down") Esta teoría constituye el fundamento conceptual y matemático sobre el cual se construyen los sistemas de gestión de datos modernos. Este modelo fue propuesto por Edgar F. Codd en la década de 1970 y se basa en principios de la teoría de conjuntos y la lógica de predicados, lo que permite estructurar la información de manera formal, consistente y manipulable mediante operaciones bien definidas.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img08.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.p-4
          p.mb-0(data-aos="fade-down") Desde esta perspectiva, una base de datos relacional no se concibe únicamente como un conjunto de tablas, sino como un sistema estructurado de relaciones matemáticas que permiten representar entidades del mundo real y sus interacciones. Esta formalización facilita la manipulación de los datos mediante lenguajes como SQL, garantizando coherencia, integridad y flexibilidad en su gestión.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Concepto de relación en el modelo relacional
    p.mb-4(data-aos="fade-down") En la teoría relacional, una relación corresponde a una tabla que contiene un conjunto de tuplas (filas), donde cada tupla representa una instancia única de una entidad. Cada columna de la tabla corresponde a un atributo, el cual define una propiedad específica de dicha entidad.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img07.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") Una característica esencial de las relaciones es que no deben contener duplicados, lo que implica que cada fila debe ser única. Además, el orden de las filas y columnas no afecta el significado de la relación, lo que refuerza el carácter abstracto del modelo.
    p.mb-4(data-aos="fade-down") El modelo relacional se compone de varios elementos clave que permiten estructurar la información de manera lógica y coherente. Entre estos se encuentran:
    .row.BG03.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-5.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Relación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conjunto de datos organizados en forma de tabla.
          .row(numero="2" titulo="Tupla")
            .col-12.mb-4.mb-md-0
              p.mb-0 Fila de la tabla que representa un registro.
          .row(numero="3" titulo="Atributo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Columna que define una característica del dato.
          .row(numero="4" titulo="Dominio")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conjunto de valores permitidos para un atributo.
          .row(numero="5" titulo="Clave")
            .col-12.mb-4.mb-md-0
              p.mb-0 Identificador único de cada tupla.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img09.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Asimismo, su representación se puede ejemplificar de la siguiente manera:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Representación conceptual de una relación
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img10.svg', alt='Figura 5 que representa el modelo conceptual de una base de datos, mostrando las entidades autor, libro, ejemplar y usuario, junto con sus atributos principales. El diagrama ilustra las relaciones entre dichas entidades, indicando las cardinalidades uno a uno, uno a muchos y muchos a muchos, así como los procesos de escritura, préstamo y asociación dentro de un sistema bibliográfico.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img11.svg', alt='Figura 5 que representa el modelo conceptual de una base de datos, mostrando las entidades autor, libro, ejemplar y usuario, junto con sus atributos principales. El diagrama ilustra las relaciones entre dichas entidades, indicando las cardinalidades uno a uno, uno a muchos y muchos a muchos, así como los procesos de escritura, préstamo y asociación dentro de un sistema bibliográfico.')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Fundamentos de la teoría relacional
    p.mb-4(data-aos="fade-down") La teoría relacional establece los principios que permiten organizar y garantizar la calidad de los datos dentro de una base de datos. Entre estos principios se encuentran los conceptos de dominio y restricciones, que definen los valores válidos para cada atributo y evitan el ingreso de información incorrecta. Asimismo, las claves cumplen un papel central al permitir la identificación única de los registros y la correcta relación entre tablas, asegurando la integridad de entidad y la integridad referencial.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img12.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Estos mecanismos trabajan de manera conjunta para preservar la consistencia de la información, reducir errores y evitar redundancias. Además, la teoría relacional proporciona las bases conceptuales para la normalización de datos, proceso orientado a estructurar la información de forma lógica y eficiente, facilitando su mantenimiento y actualización en sistemas complejos.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Manipulación y aplicación de los datos relacionales
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img13.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La manipulación de la información en bases de datos relacionales se sustenta en el álgebra y el cálculo relacional, los cuales permiten definir consultas y operaciones sobre los datos. Mientras el álgebra relacional describe cómo obtener los resultados mediante operaciones formales, el cálculo relacional se centra en especificar qué información se desea recuperar, enfoque que da origen a lenguajes de consulta como SQL.
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") En la práctica, estos fundamentos permiten desarrollar sistemas confiables y escalables, capaces de gestionar grandes volúmenes de datos en entornos empresariales, educativos y financieros. La aplicación adecuada de la teoría relacional contribuye a la creación de soluciones tecnológicas robustas, con información coherente, segura y fácil de administrar.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Componentes de una base de datos
    p.mb-4(data-aos="fade-down") El adecuado funcionamiento de una base de datos relacional no depende únicamente de su estructura, sino también de la forma en que se gestionan aspectos clave como la redundancia, la inconsistencia y la integridad de los datos. Estos componentes representan factores críticos en la calidad de la información, ya que influyen directamente en la confiabilidad, eficiencia y mantenimiento del sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") En el diseño de bases de datos, estos elementos deben ser cuidadosamente analizados y controlados, debido a que una mala gestión puede generar errores, duplicidad de información y dificultades en la toma de decisiones. Por ello, comprender su naturaleza, causas y efectos permite diseñar sistemas más robustos y eficientes.
        p.mb-0(data-aos="fade-down") A continuación, se explica en qué consiste cada uno de estos componentes:
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Redundancia de datos")
        .col-12.col-lg-6.order-lg-1.order-2
          p Se refiere a la duplicación innecesaria de información dentro de una base de datos. Este fenómeno ocurre cuando un mismo dato se almacena en múltiples lugares sin una justificación válida, lo que puede generar problemas de almacenamiento, mantenimiento y actualización.
          p Desde una perspectiva técnica, la redundancia puede surgir por un diseño inadecuado de la base de datos, donde no se han aplicado correctamente principios como la normalización. Aunque en algunos casos la redundancia puede ser intencional para mejorar el rendimiento, en la mayoría de los escenarios representa una debilidad en la estructura del sistema.
          p Por ejemplo, si en varias tablas se almacena repetidamente la información de un cliente (nombre, dirección, teléfono), se genera redundancia que puede afectar la eficiencia del sistema. 
          .row
            .col.col-lg-4.col-12
              h5 ID Cliente
              p 1
              p 2
              p 3
            .col.col-lg-4.col-12
              h5 Nombre
              p Juan
              p Ana
              p Pedro
            .col.col-lg-4.col-12
              h5 Ciudad
              p Ibagué
              p Ibagué
              p Ibagué
          p En este caso, el valor "Ibagué" se repite innecesariamente, lo que podría optimizarse mediante una estructura relacional más adecuada.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema2/img14.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Inconsistencia de datos")
        .col-12.col-lg-6.order-lg-1.order-2
          p Se presenta cuando existen discrepancias en la información almacenada; es decir, cuando un mismo dato presenta diferentes valores en distintas partes de la base de datos. Este problema está directamente relacionado con la redundancia, ya que la duplicación de datos aumenta la probabilidad de inconsistencias.
          p Cuando los datos no son coherentes, se pierde la confiabilidad del sistema, afectando procesos como consultas, reportes y toma de decisiones. Por ejemplo, si un cliente tiene dos direcciones diferentes registradas en distintas tablas, el sistema no podrá determinar cuál es la correcta.
          p La inconsistencia suele originarse por actualizaciones parciales, errores humanos o falta de mecanismos de control en la base de datos.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema2/img15.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Integridad de los datos")
        .col-12.col-lg-6.order-lg-1.order-2
          p Hace referencia a la precisión, coherencia y validez de la información almacenada en una base de datos. Es uno de los pilares fundamentales del modelo relacional, ya que garantiza que los datos sean correctos y confiables en todo momento.
          p Para asegurar la integridad, se establecen diferentes tipos de restricciones que regulan el comportamiento de los datos dentro del sistema. Estas restricciones permiten evitar errores, mantener relaciones válidas entre tablas y asegurar que la información cumpla con reglas definidas.
          p Aunque existen diferentes enfoques, los principales tipos de integridad en bases de datos relacionales son los siguientes:
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 <b>Integridad de entidad</b>: garantiza que cada registro tenga una clave primaria única y no nula.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 <b>Integridad referencial</b>: asegura que las relaciones entre tablas sean válidas.
            li.mb-0
              i.lista-ul__vineta
              p.mb-0 <b>Integridad de dominio</b>: define valores permitidos para cada atributo.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema2/img16.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Relación entre redundancia, inconsistencia e integridad
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img17.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Estos tres componentes están estrechamente relacionados dentro del diseño de bases de datos. La redundancia excesiva puede generar inconsistencias, y estas a su vez afectan la integridad de los datos. Por esta razón, es fundamental aplicar buenas prácticas de diseño, como la normalización, para reducir la duplicidad de información y garantizar la coherencia del sistema. Un sistema bien diseñado busca minimizar la redundancia, controlar la inconsistencia y asegurar la integridad, logrando así una base de datos eficiente y confiable.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img18.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p El control de la redundancia, la inconsistencia y la integridad se logra mediante el uso de técnicas y herramientas propias del diseño de bases de datos. Entre ellas se destacan la normalización, el uso de claves primarias y foráneas, la definición de restricciones y la implementación de reglas de negocio. Asimismo, los sistemas gestores de bases de datos (DBMS) incorporan mecanismos automáticos que ayudan a mantener la integridad de los datos, evitando operaciones que puedan comprometer la coherencia del sistema.
    p.mb-0(data-aos="fade-down") En sistemas reales, estos componentes son fundamentales para garantizar la calidad de la información. En sectores como el financiero, la salud o la educación, una inconsistencia o error en los datos puede generar consecuencias graves, lo que hace indispensable contar con bases de datos bien estructuradas. El control de estos aspectos permite desarrollar sistemas confiables, reducir errores y mejorar la toma de decisiones basada en datos.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Sistema gestor de bases de datos
    p.mb-4(data-aos="fade-down") El sistema gestor de bases de datos, conocido como DBMS (Database Management System), es un conjunto de programas que permite crear, administrar, manipular y controlar el acceso a una base de datos. Este sistema actúa como intermediario entre los usuarios o aplicaciones y los datos almacenados, garantizando que la información sea gestionada de manera eficiente, segura y organizada.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img19.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.p-4
          p.mb-0(data-aos="fade-down") En el contexto del diseño y modelado de bases de datos, el DBMS desempeña un papel fundamental, ya que proporciona las herramientas necesarias para implementar las estructuras diseñadas, ejecutar consultas, asegurar la integridad de los datos y controlar el acceso a la información.
    .row.justify-content-center.mb-3
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Funcionamiento de un DBMS
        p.mb-0(data-aos="fade-down") Un sistema gestor de bases de datos cumple diversas funciones que permiten el manejo integral de la información:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img20.svg' alt='AvatarTop')
          h4.text-center Definición de datos
          p Permite crear estructuras como tablas, índices y relaciones mediante lenguajes como SQL.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img21.svg' alt='AvatarTop')
          h4.text-center Manipulación de datos
          p Facilita la inserción, actualización, eliminación y consulta de información.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img22.svg' alt='AvatarTop')
          h4.text-center Control de acceso
          p Gestiona permisos y roles de usuarios para proteger la información.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
          h4.text-center Gestión de transacciones
          p Asegura que las operaciones se realicen de manera segura y consistente.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img24.svg' alt='AvatarTop')
          h4.text-center Recuperación ante fallos
          p Permite restaurar la base de datos en caso de errores o fallos del sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img25.svg' alt='AvatarTop')
          h4.text-center Optimización de consultas
          p Mejora el rendimiento en la recuperación de información.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La siguiente imagen explica cómo está estructurada la arquitectura de un DBMS.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Arquitectura de un DBMS
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img26.svg', alt='Figura 6 que representa la arquitectura general de un sistema gestor de bases de datos (DBMS), organizada en niveles lógico y físico, mostrando la estructura jerárquica de la base de datos, los grupos de archivos y los componentes internos de almacenamiento como archivos de datos, extensiones, páginas y registros de log.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img27.svg', alt='Figura 6 que representa la arquitectura general de un sistema gestor de bases de datos (DBMS), organizada en niveles lógico y físico, mostrando la estructura jerárquica de la base de datos, los grupos de archivos y los componentes internos de almacenamiento como archivos de datos, extensiones, páginas y registros de log.')
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img28.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Un sistema gestor de bases de datos (DBMS) está compuesto por diversos elementos que permiten su funcionamiento, entre los que se encuentran el motor de base de datos, encargado del almacenamiento y la recuperación de la información; el lenguaje de consulta, como SQL, que permite interactuar con los datos; el administrador de transacciones, responsable de garantizar la consistencia de las operaciones; el gestor de almacenamiento, que define cómo se guardan los datos en disco o memoria; y el diccionario de datos, que contiene la definición de la estructura de la base de datos. Según el modelo de datos que utilizan, los DBMS pueden clasificarse en relacionales, orientados a tablas y relaciones; NoSQL, basados en estructuras flexibles; distribuidos, que gestionan datos en múltiples ubicaciones; y en memoria, que almacenan la información en RAM para ofrecer mayor velocidad de acceso.
        p.mb-0(data-aos="fade-down") Igualmente, se destacan algunos procesos positivos y negativo como son:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img29.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Ventajas
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Permite la <b>centralización de datos</b>, evitando duplicidad innecesaria.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Mejora la <b>seguridad</b>, controlando accesos y permisos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Garantiza la <b>integridad y consistencia</b> de la información.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Facilita la <b>recuperación de datos</b> ante fallos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Optimiza el rendimiento en consultas.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Permite la <b>concurrencia</b>, es decir, múltiples usuarios accediendo simultáneamente.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img30.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Desventajas
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Requieren <b>recursos computacionales elevados</b>.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Su implementación puede ser <b>compleja</b>.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Necesitan <b>personal capacitado</b> para su administración.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Pueden generar <b>costos de licencia</b> en algunos casos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Es importante conocer los diferentes lenguajes que utiliza DBMS para interactuar con la base de datos:   
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img31.svg' alt='AvatarTop')
          h4.text-center DDL (Data Definition Language)
          p Permite definir y modificar la estructura de la base de datos, incluyendo la creación, alteración y eliminación de tablas, vistas e índices.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img32.svg' alt='AvatarTop')
          h4.text-center DML (Data Manipulation Language)
          p Se utiliza para gestionar los datos almacenados, permitiendo insertar nuevos registros, actualizar información existente y eliminar datos cuando sea necesario.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img33.svg' alt='AvatarTop')
          h4.text-center DCL (Data Control Language)
          p Controla el acceso a la base de datos mediante la asignación y revocación de permisos, garantizando la seguridad y el uso adecuado de la información.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema2/img34.svg' alt='AvatarTop')
          h4.text-center TCL (Transaction Control Language)
          p Gestiona las transacciones dentro de la base de datos, permitiendo confirmar, deshacer o agrupar operaciones para asegurar la consistencia e integridad de los datos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Para complementar lo anterior y terne mayor claridad sobre los DBMS, se presenta el siguiente esquema:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span Interacción usuario – DBMS – base de datos
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img35.svg', alt='Figura 7 que muestra un diagrama de flujo del proceso de interacción entre el usuario, el sistema y la base de datos, describiendo las etapas de inicio de sesión, validación de credenciales, recuperación de contraseña y ejecución de operaciones como consulta y pago, hasta la confirmación y finalización del proceso.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img36.svg', alt='Figura 7 que muestra un diagrama de flujo del proceso de interacción entre el usuario, el sistema y la base de datos, describiendo las etapas de inicio de sesión, validación de credenciales, recuperación de contraseña y ejecución de operaciones como consulta y pago, hasta la confirmación y finalización del proceso.')
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Modelos de diseño de bases de datos
    p.mb-4(data-aos="fade-down") En el contexto del diseño y modelado de bases de datos, la representación de la información permite transformar datos del mundo real en estructuras formales que pueden ser interpretadas por sistemas computacionales. Esto es esencial para garantizar que la información sea consistente, accesible y útil para la toma de decisiones.
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Estos modelos se clasifican en tres niveles principales: conceptual, lógico y físico. Cada uno cumple una función específica dentro del proceso de diseño, permitiendo pasar de una visión general del problema a una implementación técnica concreta.
        p.mb-4(data-aos="fade-down") El uso de modelos de diseño permite:
        ul.lista-ul--color.mt-4.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Comprender la estructura de los datos antes de implementarlos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Identificar relaciones entre entidades.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Evitar errores en el diseño de la base de datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Optimizar el almacenamiento y acceso a la información.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Facilitar la comunicación entre analistas, desarrolladores y usuarios.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema2/img37.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Modelo conceptual
    p.mb-4(data-aos="fade-down") Representa el nivel más abstracto del diseño de bases de datos. En esta etapa, se identifican las entidades, sus atributos y las relaciones entre ellas, sin considerar aspectos técnicos de implementación. Su propósito es describir la realidad del problema de manera clara y comprensible para todos los actores involucrados.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img38.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") Este modelo se enfoca en responder qué información se necesita y cómo se relaciona, sin preocuparse por cómo será almacenada. Es utilizado principalmente en la fase de análisis de requerimientos.
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Los elementos del modelo conceptual son:
        ul.lista-ul--color.mt-4.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Entidades</b>: representan objetos o elementos del mundo real (cliente, producto).
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Atributos</b>: características de las entidades (nombre, precio).
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Relaciones</b>: asociaciones entre entidades (un cliente compra un producto).
        p.mb-4(data-aos="fade-down") Como características tiene:
        ul.lista-ul--color.mt-4.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Es independiente de cualquier DBMS.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Se enfoca en la comprensión del negocio.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 No incluye detalles técnicos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Facilita la comunicación con usuarios no técnicos.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema2/img39.svg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Este modelo puede ejemplificarse de la siguiente manera:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Ejemplo modelo entidad-relación
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img40.svg', alt='Figura 8 que representa un ejemplo de modelo entidad-relación, donde se muestra la entidad cliente identificada por su DNI, relacionada con la entidad pedido mediante una relación uno a muchos. El esquema incluye además la entidad artículo, vinculada al pedido a través de una relación muchos a muchos, incorporando atributos como fecha, cantidad y número de serie para describir las interacciones entre las entidades.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img41.svg', alt='Figura 8 que representa un ejemplo de modelo entidad-relación, donde se muestra la entidad cliente identificada por su DNI, relacionada con la entidad pedido mediante una relación uno a muchos. El esquema incluye además la entidad artículo, vinculada al pedido a través de una relación muchos a muchos, incorporando atributos como fecha, cantidad y número de serie para describir las interacciones entre las entidades.')
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img42.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El modelo lógico representa un nivel intermedio entre el modelo conceptual y el físico. En esta etapa, la información se estructura en tablas, definiendo atributos, tipos de datos y relaciones, pero aún sin considerar detalles específicos del sistema gestor de bases de datos.
        br
        br
        p.mb-0(data-aos="fade-down") Aquí se traduce el modelo conceptual a una estructura más formal, basada en el modelo relacional, donde se definen claves primarias, claves foráneas y restricciones.
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Los elementos del modelo lógico son:
        ul.lista-ul--color.mt-4.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Tablas</b>: representan entidades.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Campos</b>: atributos de las tablas.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Claves</b> primarias: identifican registros.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Claves</b> foráneas: establecen relaciones.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Restricciones</b>: garantizan integridad.
        p.mb-4(data-aos="fade-down") Como características tiene:
        ul.lista-ul--color.mt-4.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Representa la estructura de datos de forma organizada.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Es independiente del DBMS específico.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Permite validar relaciones entre datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Define reglas de integridad.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema2/img43.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Este modelo igualmente se puede ejemplificar basado en lo siguiente:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span Ejemplo modelo lógico
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img44.svg', alt='Figura 9 que muestra un ejemplo de modelo lógico de base de datos, donde se representan las tablas Cliente, Pedido y Artículo con sus respectivos atributos, claves primarias y claves foráneas, así como las relaciones entre ellas. El diagrama evidencia una relación uno a muchos entre Cliente y Pedido, y una relación muchos a muchos entre Pedido y Artículo, resuelta mediante una tabla intermedia.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img45.svg', alt='Figura 9 que muestra un ejemplo de modelo lógico de base de datos, donde se representan las tablas Cliente, Pedido y Artículo con sus respectivos atributos, claves primarias y claves foráneas, así como las relaciones entre ellas. El diagrama evidencia una relación uno a muchos entre Cliente y Pedido, y una relación muchos a muchos entre Pedido y Artículo, resuelta mediante una tabla intermedia.')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Modelo físico
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img46.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .row.justify-content-center.mb-3
          .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img47.svg', alt='Imagen decorativa')
          .col.col-lg-10.col-12.order-lg-2.order-2
            p.mb-4(data-aos="fade-down") Corresponde al nivel más detallado del diseño, donde se define cómo se implementará la base de datos en un sistema gestor específico. En esta etapa se consideran aspectos como almacenamiento, índices, rendimiento y optimización.
        .cajon.cajon.C01.p-4.mb-4
          p.mb-0(data-aos="fade-down") Este modelo traduce el diseño lógico a estructuras reales dentro del DBMS, incluyendo tipos de datos específicos, creación de tablas y definición de índices.
        p.mb-4(data-aos="fade-down") Los elementos del modelo conceptual son:
        ul.lista-ul--color.mt-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Tablas físicas</b>: estructuras reales creadas en el DBMS donde se almacenan los datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Tipos de datos específicos</b>: definen el formato y tamaño de cada campo (INT, VARCHAR, DATE, etc.).
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Índices</b>: mecanismos que mejoran la velocidad de acceso y consulta de la información.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 <b>Restricciones de integridad</b>: reglas que garantizan la validez y consistencia de los datos.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img48.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Sus características destacan lo siguiente:
        ul.lista-ul--color.mt-4.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Depende del DBMS utilizado.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Considera el rendimiento y la optimización del sistema.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Define cómo se almacenan físicamente los datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Permite una implementación eficiente y segura de la base de datos.
        p.mb-0(data-aos="fade-down") Su ejemplificación puede darse como lo que se relaciona en la siguiente imagen:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span Ejemplo modelo físico (SQL)
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img49.svg', alt='Figura 10 que representa un modelo físico de una base de datos relacional para la gestión de eventos deportivos y venta de entradas. En la imagen se detallan tablas como person, ticket, sporting_event, sporting_team, sport_location, city y ticket_purchase_hist, cada una con sus claves primarias y foráneas. El diagrama muestra las relaciones entre personas, equipos, eventos, ubicaciones y compras de tickets, evidenciando cómo se estructuran los datos, se definen las dependencias entre tablas y se garantiza la integridad referencial dentro del sistema.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img50.svg', alt='Figura 10 que representa un modelo físico de una base de datos relacional para la gestión de eventos deportivos y venta de entradas. En la imagen se detallan tablas como person, ticket, sporting_event, sporting_team, sport_location, city y ticket_purchase_hist, cada una con sus claves primarias y foráneas. El diagrama muestra las relaciones entre personas, equipos, eventos, ubicaciones y compras de tickets, evidenciando cómo se estructuran los datos, se definen las dependencias entre tablas y se garantiza la integridad referencial dentro del sistema.')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .row.justify-content-center.cajon.cajon.C01.p-4
          .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img51.jpg', alt='Imagen decorativa')
          .col.col-lg-7.col-12.order-lg-1.order-2
            .tarjeta.tarjeta--C06.px-4.py-3.mb-3
              .row.justify-content-center.align-items-center.mb-4
                .col.col-lg-5.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/tema2/img52.svg', alt='Imagen decorativa')
                .col.col-lg-7.col-12.order-lg-2.order-2
                  p.mb-4.text-bold(data-aos="fade-down") Ejemplo de implementación física
                  p.mb-0 CREATE TABLE Cliente (
                  p.mb-0 ID_Cliente INT PRIMARY KEY,
                  p.mb-0 Nombre VARCHAR(50),
                  p.mb-0 Ciudad VARCHAR(50)
                  p.mb-0 );
            p.mb-0.order-lg-3.order-3(data-aos="fade-down") Este ejemplo muestra cómo el modelo lógico se transforma en una estructura implementada en un DBMS.
    p.mb-4(data-aos="fade-down") Para finalizar, se detallan los niveles del diseño de bases de datos. Los modelos y conceptos que se incluyen en el esquema, se mantienen en idioma inglés, ya que corresponden a la denominación original utilizada en la literatura técnica y en los estándares internacionales del área:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span Niveles de diseño de bases de datos
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema2/img53.svg', alt='Figura 11 que relaciona los niveles del diseño de bases de datos, iniciando con la definición de los procesos y requerimientos de información, continuando con la estructuración técnica orientada al rendimiento y la implementación, y finalizando con el manejo operativo de los datos para su creación, actualización y uso en el contexto del negocio.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema2/img54.svg', alt='Figura 11 que relaciona los niveles del diseño de bases de datos, iniciando con la definición de los procesos y requerimientos de información, continuando con la estructuración técnica orientada al rendimiento y la implementación, y finalizando con el manejo operativo de los datos para su creación, actualización y uso en el contexto del negocio.')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
