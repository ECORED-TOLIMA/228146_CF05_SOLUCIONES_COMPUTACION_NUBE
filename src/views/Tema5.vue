<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Bases de datos NoSQL y su diseño
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las bases de datos NoSQL (Not Only SQL) representan un enfoque moderno para el almacenamiento y gestión de información, diseñado para manejar grandes volúmenes de datos, alta escalabilidad y estructuras flexibles. A diferencia de las bases de datos relacionales, las NoSQL no se basan exclusivamente en tablas, sino que permiten almacenar información en diversos formatos como documentos, pares clave-valor, columnas o grafos.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img02.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Las bases de datos NoSQL se diferencian por su enfoque flexible y orientado a rendimiento, destacándose porque:
        ul.lista-ul--color.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 No requieren esquemas rígidos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Permiten manejar grandes volúmenes de datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Son altamente escalables (horizontalmente).
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Soportan datos no estructurados.
          li.mb-0
            i.fas.fa-cloud-arrow-down
            p.mb-0 Ofrecen alto rendimiento en sistemas distribuidos.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Conceptos, principios y terminología NoSQL
    p.mb-4(data-aos="fade-down") Las bases de datos NoSQL surgen como una alternativa al modelo relacional tradicional, orientadas a gestionar grandes volúmenes de datos en entornos donde la flexibilidad, el rendimiento y la escalabilidad son fundamentales. Este enfoque permite almacenar información no estructurada o semiestructurada, adaptándose a las necesidades de aplicaciones modernas y sistemas distribuidos.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Conceptos de NoSQL
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") Desde el punto de vista conceptual, las bases de datos NoSQL se diferencian del modelo relacional al no depender de esquemas rígidos ni de estructuras basadas exclusivamente en tablas. En su lugar, emplean modelos de almacenamiento más flexibles que permiten gestionar distintos tipos de información. Entre sus principales características se encuentran:
        ul.lista-ul--color.mb-4(data-aos="fade-down")
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Datos no estructurados o semiestructurados.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Almacenamiento flexible sin esquema fijo.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Distribución de datos en múltiples nodos.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Escalabilidad horizontal.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Principios de NoSQL
    p.mb-4(data-aos="fade-down") El diseño de las bases de datos NoSQL se fundamenta en principios que priorizan el rendimiento y la disponibilidad del sistema frente a la rigidez estructural. Estos principios permiten un funcionamiento eficiente en entornos de alta demanda y sistemas distribuidos, incluyendo:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Escalabilidad horizontal")
            .col-12.mb-0.mb-md-0
              p Capacidad del sistema para distribuir y replicar los datos en múltiples servidores, permitiendo aumentar el rendimiento y la capacidad de almacenamiento mediante la incorporación de nuevos nodos sin afectar la operación del sistema.
          .row(titulo="Alta disponibilidad")
            .col-12.mb-0.mb-md-0
              p Garantiza el acceso continuo a la información, incluso cuando uno o varios componentes del sistema presentan fallos, asegurando que los servicios permanezcan operativos y accesibles para los usuarios.
          .row(titulo="Tolerancia a fallos")
            .col-12.mb-0.mb-md-0
              p Permite que el sistema continúe funcionando de manera adecuada aun cuando se produzcan errores en algunos nodos o componentes, gracias a mecanismos de redundancia y replicación de datos.
          .row(titulo="Flexibilidad de datos")
            .col-12.mb-0.mb-md-0
              p Facilita la adaptación del modelo de datos a diferentes estructuras y formatos de información, permitiendo almacenar y modificar datos sin necesidad de definir esquemas rígidos, lo que favorece la evolución de las aplicaciones.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img04.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Un principio teórico clave en los sistemas NoSQL es el teorema CAP, el cual establece que un sistema distribuido no puede garantizar simultáneamente la consistencia, la disponibilidad y la tolerancia a particiones.
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Terminología NoSQL
        p.mb-0(data-aos="fade-down") Las bases de datos NoSQL utilizan una terminología específica asociada a su arquitectura distribuida y a su forma de gestionar los datos. Algunos de los términos más relevantes son:
    .row.BG03.justify-content-center.align-items-center.px-3.mb-0(data-aos="flip-up")
      .col-lg-5.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Nodo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Servidor individual que forma parte del sistema distribuido.
          .row(numero="2" titulo="Clúster")
            .col-12.mb-4.mb-md-0
              p.mb-0 Conjunto de nodos que trabajan de manera coordinada.
          .row(numero="3" titulo="Partición")
            .col-12.mb-4.mb-md-0
              p.mb-0 División de los datos para su distribución entre nodos.
          .row(numero="4" titulo="Replicación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Copia de datos en varios nodos para garantizar disponibilidad.
          .row(numero="5" titulo="Sharding")
            .col-12.mb-4.mb-md-0
              p.mb-0 Técnica de particionado horizontal para distribuir grandes volúmenes de datos.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema5/img05.png', alt='Imagen decorativa')
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Modelos de bases de datos NoSQL
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img06.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Las bases de datos NoSQL implementan distintos modelos de almacenamiento que definen la forma en que la información es organizada y gestionada dentro del sistema. Cada modelo responde a necesidades específicas de las aplicaciones, permitiendo optimizar el acceso a los datos, el rendimiento y la escalabilidad en entornos distribuidos.
        p.mb-0 Los modelos de bases de datos NoSQL se agrupan según la manera en que almacenan y estructuran la información. Esta clasificación facilita la selección del modelo más adecuado de acuerdo con el tipo de datos y los requerimientos del sistema. Al respecto, se debe tener en cuenta la siguiente clasificación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Modelos de bases de datos NoSQL
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Modelo
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Uso principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Clave-valor.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Almacena la información como pares clave-valor.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Caché, gestión de sesiones.
              tr
                td(data-aos="fade-down") Documental.
                td(data-aos="fade-down") Utiliza documentos estructurados tipo JSON o BSON.
                td(data-aos="fade-down") Aplicaciones <em>web</em>.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Columnar.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Organiza los datos por columnas en lugar de filas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") <em>Big data</em>, análisis.
              tr
                td(data-aos="fade-down") Grafos.
                td(data-aos="fade-down") Representa los datos mediante nodos y relaciones.
                td(data-aos="fade-down") Redes sociales.
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4
          p.mb-0(data-aos="fade-down") El uso de estos modelos permite seleccionar la estructura más adecuada según el tipo de aplicación, optimizando el rendimiento y facilitando el manejo de grandes volúmenes de datos.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Tipos de bases de datos NoSQL
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img07.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Las bases de datos NoSQL se clasifican en distintos tipos de acuerdo con la forma en que almacenan, organizan y gestionan la información. Esta clasificación permite seleccionar el modelo más adecuado según las características de los datos y los requerimientos de la aplicación, optimizando aspectos como el rendimiento, la escalabilidad y la flexibilidad del sistema.
    p.mb-4(data-aos="fade-down") Cada una de estas bases se explica a continuación y se ejemplifica para tener mayor claridad y utilización en acciones reales:
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Bases de datos clave-valor")
        .col-12.col-lg-6.order-lg-1.order-2
          p Almacenan la información mediante pares formados por una clave única y un valor asociado. Este modelo se caracteriza por su simplicidad y rapidez en el acceso a los datos, ya que la recuperación de la información se realiza directamente a través de la clave. Son ampliamente utilizadas en sistemas que requieren respuestas rápidas, como el manejo de sesiones de usuario, caché de datos y configuraciones temporales.
          p.mb-0 Un ejemplo representativo de este tipo es Redis, una base de datos utilizada principalmente para el manejo de caché y sesiones de usuario. Redis almacena la información como pares clave-valor en memoria, lo que permite accesos extremadamente rápidos y es ideal para aplicaciones que requieren alto rendimiento y baja latencia.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema5/img08.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Bases de datos documentales")
        .col-12.col-lg-6.order-lg-1.order-2
          p Gestionan la información en documentos estructurados, comúnmente en formatos como JSON o BSON. Cada documento puede contener datos complejos y estructuras anidadas, lo que permite una representación más flexible de la información. Este modelo es especialmente adecuado para aplicaciones <em>web</em> y sistemas donde los datos presentan variabilidad en su estructura.
          p.mb-0 Un ejemplo ampliamente utilizado es MongoDB, una base de datos documental que almacena la información en documentos con formato JSON/BSON. Este modelo es común en aplicaciones <em>web</em> modernas, ya que permite manejar estructuras de datos flexibles y cambiantes sin necesidad de esquemas rígidos.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema5/img09.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Bases de datos en columna")
        .col-12.col-lg-6.order-lg-1.order-2
          p Organizan la información por columnas en lugar de filas, lo que facilita la ejecución de consultas analíticas sobre grandes volúmenes de datos. Este enfoque permite un acceso eficiente a conjuntos específicos de información y es ampliamente utilizado en entornos de análisis de datos, inteligencia de negocios y procesamiento masivo de información.
          p.mb-0 Un ejemplo destacado es Apache Cassandra, una base de datos diseñada para gestionar grandes volúmenes de datos distribuidos en múltiples nodos. Cassandra es utilizada en sistemas de <em>Big data</em> y análisis masivo de información, donde se requiere alta disponibilidad y escalabilidad horizontal.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema5/img10.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Bases de datos orientadas a grafos")
        .col-12.col-lg-6.order-lg-1.order-2
          p Orientadas a grafos se enfocan en representar relaciones complejas entre los datos mediante nodos y enlaces. Este modelo permite analizar de manera eficiente las conexiones entre entidades, siendo ideal para aplicaciones donde las relaciones son fundamentales, como redes sociales, sistemas de recomendación y análisis de vínculos.
          p.mb-0 Un ejemplo representativo es Neo4j, una base de datos orientada a grafos que modela la información mediante nodos y relaciones. Este sistema es ideal para aplicaciones donde las conexiones entre los datos son fundamentales, como redes sociales, sistemas de recomendación y análisis de relaciones complejas.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema5/img11.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12.mb-4
        .tarjeta.tarjeta--C11.px-4.py-3.d-inline-block
          ul.lista-ul.mb-0
            li.mb-0
              i.lista-ul__vineta
              h3.mb-0 Importancia de la clasificación NoSQL
      .row.justify-content-center.align-items-center.mb-0
        .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/tema5/img12.svg', alt='Imagen decorativa')
        .col.col-lg-8.col-12.order-lg-2.order-2
          .cajon.cajon.C05.p-4
            p.mb-0(data-aos="fade-down") La clasificación de las bases de datos NoSQL facilita la selección de la tecnología más adecuada según el tipo de aplicación y los datos que se desean gestionar, contribuyendo a mejorar el rendimiento, la escalabilidad y la eficiencia general del sistema.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Arquitecturas y esquemas de datos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img13.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Las bases de datos NoSQL se caracterizan por implementar arquitecturas distribuidas y esquemas de datos flexibles que permiten gestionar grandes volúmenes de información de manera eficiente. Dentro de estos enfoques, las bases de datos en columna y las orientadas a grafos representan dos modelos ampliamente utilizados en entornos de alto rendimiento y análisis de datos complejos.
        p.mb-3(data-aos="fade-down") Las bases de datos NoSQL suelen operar bajo arquitecturas distribuidas, en las cuales la información se almacena en múltiples servidores interconectados; además, se destacan por su:
        ul.lista-ul--color.mb-0(data-aos="fade-down")
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Distribución de datos en nodos.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Escalabilidad horizontal.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Alta disponibilidad.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Tolerancia a fallos.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img14.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") El diseño de la arquitectura y del esquema en bases de datos NoSQL es fundamental para garantizar el rendimiento, la escalabilidad y la eficiencia del sistema.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Diseño de bases de datos NoSQL
    p.mb-4(data-aos="fade-down") El diseño de bases de datos NoSQL se fundamenta en un enfoque orientado al uso y al rendimiento, donde la estructura de los datos se define a partir de la forma en que serán consultados. A diferencia del modelo relacional, en NoSQL no se prioriza la normalización, sino la optimización de las consultas y el acceso eficiente a la información mediante estructuras flexibles adaptadas a las necesidades de la aplicación.
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Patrones de acceso
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img15.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-2(data-aos="fade-down") Describen la manera en que los datos serán consultados dentro del sistema y constituyen uno de los elementos más importantes en el diseño de bases de datos NoSQL. A partir de estos patrones se define cómo se almacenará la información, qué datos se agrupan y cómo se optimizan las operaciones de lectura y escritura. Entre los aspectos más relevantes se encuentran:
        ul.lista-ul--color.mb-0(data-aos="fade-down")
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Frecuencia de las consultas realizadas.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Tipos de filtros y criterios de búsqueda utilizados.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Volumen de datos accedidos en cada operación.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Relación entre operaciones de lectura y escritura.
        .cajon.cajon.C02.p-4.mb-0
          p.mb-0(data-aos="fade-down") Un diseño adecuado basado en patrones de acceso permite mejorar el rendimiento del sistema y reducir la complejidad de las consultas.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Uso de claves en NoSQL
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img16.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Las claves en las bases de datos NoSQL cumplen un papel fundamental en la localización y acceso rápido a los datos. A diferencia del modelo relacional, donde las claves estructuran las relaciones entre tablas, en NoSQL las claves se utilizan principalmente para identificar y recuperar registros de forma eficiente. En este contexto, se emplean distintos tipos de claves, tales como:
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema5/img17.svg', alt='Imagen decorativa')
            .col-lg-9.col-12
              ul.lista-ul.mb-0
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Claves únicas para identificar registros de manera directa.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Claves compuestas diseñadas para responder a consultas específicas.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Claves optimizadas de acuerdo con los patrones de acceso definidos.
        p.mb-0(data-aos="fade-down") El uso adecuado de las claves permite minimizar el tiempo de respuesta y optimizar el rendimiento del sistema.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Análisis de relaciones en NoSQL
    p.mb-4(data-aos="fade-down") En las bases de datos NoSQL, las relaciones entre los datos no se gestionan mediante claves foráneas como en el modelo relacional. En su lugar, se utilizan enfoques alternativos que permiten mayor flexibilidad en la representación de la información. Los métodos más comunes son:
    .row.justify-content-center.mb-4
      .col.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img18.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Incrustación (<em>embedding</em>)
              p.mb-0 Los datos relacionados se almacenan dentro de un mismo documento, reduciendo la necesidad de consultas adicionales.
      .col.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema5/img19.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 Referencia (<em>linking</em>)
              p.mb-0 Los datos se relacionan mediante identificadores, permitiendo mantener estructuras más independientes.
              br
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema5/img20.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") La elección del enfoque adecuado depende del tipo de aplicación, del volumen de datos y de la frecuencia con que se consultan las relaciones.
</template>

<script>
export default {
  name: 'Tema5',
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
