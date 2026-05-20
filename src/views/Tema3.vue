<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Diseño de bases de datos relacionales
    p.mb-4(data-aos="fade-down") Es un proceso fundamental en el desarrollo de sistemas de información, ya que permite estructurar los datos de manera organizada, coherente y eficiente, garantizando su integridad, consistencia y facilidad de acceso. Este proceso se basa en la transformación de los requerimientos del negocio en un modelo estructurado que permita almacenar y gestionar la información de forma óptima.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") A diferencia de otras etapas del desarrollo, el diseño de bases de datos no solo implica definir tablas, sino también establecer relaciones entre los datos, identificar restricciones y asegurar que la información sea manejada de manera adecuada dentro del sistema. Un diseño correcto permite evitar problemas como redundancia, inconsistencias y bajo rendimiento en las consultas.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-4(data-aos="fade-down") El proceso de diseño relacional inicia con la comprensión del problema y la identificación de las entidades principales que intervienen en el sistema. Posteriormente, estas entidades se transforman en tablas, definiendo sus atributos y estableciendo relaciones mediante claves primarias y foráneas. Este enfoque permite representar de manera estructurada la realidad del sistema.
        .cajon.cajon.C02.color-secundario.p-4.mb-0
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema3/img02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 Uno de los aspectos más importantes en el diseño de bases de datos relacionales es la organización de la información mediante el modelo relacional, el cual permite estructurar los datos en tablas interconectadas. Esta estructura facilita la manipulación de la información mediante lenguajes de consulta como SQL, permitiendo realizar operaciones de inserción, actualización, eliminación y consulta de datos.
    .row.justify-content-center.mb-0
      .col.col-lg-6.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Asimismo, el diseño relacional debe garantizar la integridad de los datos, lo que implica que la información almacenada sea válida, coherente y consistente. Para ello, se establecen restricciones que controlan el comportamiento de los datos, evitando errores y asegurando la calidad de la información.
        .row.justify-content-center.mb-0
          .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img04.svg', alt='Imagen decorativa')
          .col.col-lg-10.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") Otro elemento clave dentro de este proceso es la normalización, la cual permite organizar los datos de manera que se reduzca la redundancia y se eviten anomalías en la manipulación de la información. A través de este proceso, las tablas se estructuran en diferentes formas normales que optimizan el almacenamiento y mejoran la eficiencia del sistema.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Normalización de bases de datos
    p.mb-4(data-aos="fade-down") La normalización de bases de datos es un proceso fundamental dentro del diseño relacional, cuyo objetivo principal es organizar la información de manera eficiente, eliminando redundancias innecesarias y evitando problemas de inconsistencia en los datos. Este proceso permite estructurar las tablas de tal forma que cada dato se almacene una sola vez, garantizando integridad, coherencia y facilidad de mantenimiento en el sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img05.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C05.p-4
          p.mb-0(data-aos="fade-down") Desde una perspectiva teórica, la normalización se basa en un conjunto de reglas conocidas como formas normales, las cuales establecen criterios específicos para la organización de los datos. Estas reglas permiten transformar una base de datos inicial, generalmente desorganizada o redundante, en una estructura optimizada que facilita su gestión.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img06.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") La normalización es clave para garantizar la calidad de la información y evitar anomalías en las operaciones de inserción, actualización y eliminación.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Importancia de la normalización
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img07.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") En el diseño de bases de datos relacionales, la normalización permite mejorar significativamente la estructura del sistema. Un diseño no normalizado puede generar duplicidad de datos, inconsistencias y dificultades en la actualización de la información.
        p.mb-4(data-aos="fade-down") Entre sus principales beneficios se encuentra la capacidad de:
        ul.lista-ul--color(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Evitar la duplicación de datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Mantener la coherencia de la información.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Facilitar la actualización de registros.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Mejorar la organización de las tablas.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Reducir errores en el sistema.
    p.mb-4(data-aos="fade-down") Hay que tener presente que cuando una base de datos no está correctamente estructurada, pueden presentarse anomalías que afectan su funcionamiento. Estas anomalías se clasifican en tres tipos principales:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img08.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Anomalía de inserción
            p.mb-0(data-aos="fade-down") Ocurre cuando no es posible agregar nuevos datos a la base de datos sin incluir información adicional que no es necesaria en ese momento. Esto limita el registro de información independiente, obliga a completar campos irrelevantes y puede generar datos incompletos o inconsistentes.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img09.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Anomalía de actualización
            p.mb-0(data-aos="fade-down") Se presenta cuando un mismo dato debe modificarse en varios registros o tablas al mismo tiempo. Si la actualización no se realiza de manera uniforme, se producen inconsistencias que afectan la confiabilidad y exactitud de la información almacenada.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img10.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Anomalía de eliminación
            p.mb-0(data-aos="fade-down") Sucede cuando al eliminar un registro se pierde información relevante que está asociada a ese dato y que aún podría ser necesaria. Esto provoca pérdida de datos importantes y reduce la integridad de la base de datos.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Formas normales
    p.mb-4(data-aos="fade-down") La normalización se desarrolla a través de diferentes niveles llamados formas normales. Cada forma normal establece condiciones que deben cumplirse para mejorar la estructura de la base de datos:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img11.svg", alt="alt").img80.m-auto
          h5.text-center Primera Forma Normal (1FN)
          p La primera forma normal establece que todos los atributos de una tabla deben contener valores atómicos, es decir, que no se permiten valores repetidos ni grupos de datos dentro de un mismo campo.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img12.svg", alt="alt").img80.m-auto
          h5.text-center Segunda Forma Normal (2FN)
          p La segunda forma normal se alcanza cuando la tabla cumple con la 1FN y, además, todos los atributos dependen completamente de la clave primaria.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema3/img13.svg", alt="alt").img80.m-auto
          h5.text-center Tercera Forma Normal (3FN)
          p La tercera forma normal se cumple cuando la tabla está en 2FN y no existen dependencias transitivas, es decir, cuando los atributos no dependen de otros atributos que no sean la clave primaria.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img14.svg', alt='Imagen decorativa')
      .col.col-lg-5.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") El proceso de normalización se realiza de manera progresiva, partiendo de una estructura inicial y aplicando las reglas de cada forma normal. Este proceso implica:
        ul.lista-ul--color(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Identificar entidades y atributos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Definir claves primarias.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Analizar dependencias funcionales.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Dividir tablas cuando sea necesario.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Modelo relacional
    p.mb-4(data-aos="fade-down") El modelo relacional constituye uno de los pilares fundamentales en el diseño de bases de datos, ya que proporciona una estructura lógica que permite organizar la información en forma de tablas relacionadas entre sí. Este modelo, propuesto por Edgar F. Codd, se basa en principios matemáticos derivados de la teoría de conjuntos y la lógica formal, lo que garantiza un manejo consistente, preciso y estructurado de los datos.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img35.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En el contexto del diseño de bases de datos relacionales, el modelo relacional permite representar entidades del mundo real mediante relaciones (tablas), facilitando la manipulación de la información a través de operaciones bien definidas. Este enfoque ha sido ampliamente adoptado debido a su simplicidad conceptual, su robustez y su capacidad para mantener la integridad de los datos.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Estructura del modelo relacional
    p.mb-4(data-aos="fade-down") El modelo relacional se basa en la organización de los datos en tablas, también denominadas relaciones. Cada tabla está compuesta por filas y columnas, donde las filas representan registros y las columnas representan atributos.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img36.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-2
          p.mb-0(data-aos="fade-down") En este modelo, cada tabla posee una estructura definida que permite identificar de manera única cada registro y establecer relaciones con otras tablas. Esta estructura facilita la organización de la información y permite realizar consultas eficientes.
        p.mb-2(data-aos="fade-down") El modelo relacional está estrechamente relacionado con la normalización, ya que ambos buscan optimizar la estructura de la base de datos. Mientras el modelo relacional define la organización de los datos, la normalización se encarga de eliminar redundancias y mejorar la integridad.
        .row.justify-content-center.align-items-center.mb-0
          .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img16.svg', alt='Imagen decorativa')
          .col.col-lg-10.col-12.order-lg-2.order-2
            .cajon.cajon.C03.p-4
              p.mb-0(data-aos="fade-down") La combinación del modelo relacional y la normalización permite diseñar bases de datos eficientes y libres de inconsistencias.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Tipos de claves
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img17.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") En el modelo relacional, las claves representan uno de los elementos más importantes dentro del diseño de bases de datos, ya que permiten identificar registros de manera única y establecer relaciones entre tablas. Su correcta definición es fundamental para garantizar la integridad, coherencia y organización de la información dentro del sistema.
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Las claves no solo cumplen una función de identificación, sino que también permiten estructurar las relaciones entre los datos, evitando duplicidades y asegurando que la información se mantenga consistente en todo momento. En este contexto, los tipos de claves más relevantes son la clave primaria, la clave foránea y las claves candidatas.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-10.col-12.order-lg-2.order-2
        .cajon.cajon.C03.p-4.mb-0
          p.mb-0(data-aos="fade-down") Las claves son esenciales para garantizar la unicidad de los datos y la correcta relación entre las tablas dentro de una base de datos.
    p.mb-4(data-aos="fade-down") Basado en lo anterior, los tipos de claves son:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Clave primaria")
            .col-12.mb-0.mb-md-0
              p Es el atributo, o conjunto de atributos, que permite identificar de manera única cada registro dentro de una tabla. Esto significa que no puede existir más de un registro con el mismo valor en la clave primaria, ni tampoco se permiten valores nulos.
              p.mb-0 Desde el punto de vista del diseño, la clave primaria es el elemento central de cada tabla, ya que define la identidad de cada registro y permite diferenciarlo de los demás. Su correcta selección es fundamental para garantizar la integridad de los datos.
          .row(titulo="Clave foránea")
            .col-12.mb-0.mb-md-0
              p Es un atributo que permite establecer una relación entre dos tablas. Este tipo de clave hace referencia a la clave primaria de otra tabla, lo que permite vincular información y mantener la coherencia entre los datos.
              p.mb-0 La clave foránea es esencial para garantizar la integridad referencial, ya que asegura que los valores registrados en una tabla correspondan a datos existentes en otra. Esto evita la creación de relaciones inválidas o inconsistentes dentro de la base de datos.
          .row(titulo="Claves candidatas")
            .col-12.mb-0.mb-md-0
              p Son aquellos atributos, o conjuntos de atributos, que pueden identificar de manera única cada registro dentro de una tabla. En otras palabras, son posibles opciones para convertirse en clave primaria.
              p.mb-0 De todas las claves candidatas, se selecciona una como clave primaria, mientras que las demás permanecen como alternativas que podrían cumplir la misma función.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img18.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Importancia de las claves en el diseño de bases de datos
    p.mb-4(data-aos="fade-down") Las claves desempeñan un papel fundamental en la organización y funcionamiento de una base de datos relacional. Su uso permite estructurar la información de manera lógica, evitando duplicidad de datos y garantizando la integridad del sistema.
    .row.justify-content-center.mb-0
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img19.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Además, las claves facilitan la realización de consultas complejas, ya que permiten relacionar información de diferentes tablas de manera eficiente.
        p.mb-4(data-aos="fade-down") En el diseño de bases de datos, es importante considerar ciertos criterios al definir las claves:
        ul.lista-ul--color(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Seleccionar atributos que sean únicos y estables.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Evitar el uso de datos que puedan cambiar con el tiempo.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Definir correctamente las relaciones entre tablas.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Garantizar que las claves foráneas correspondan a valores existentes.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Entidades fuertes y débiles
    .row.justify-content-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img20.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") En el diseño de bases de datos relacionales, las entidades constituyen uno de los elementos fundamentales para representar la realidad dentro de un sistema de información. Estas permiten modelar objetos, conceptos o elementos del mundo real que poseen características propias y que pueden ser almacenados en una base de datos. Dentro de esta clasificación, se distinguen dos tipos principales y cuya correcta identificación es esencial para garantizar una estructura coherente y eficiente del modelo de datos:
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Entidad fuerte")
        .col-12.col-lg-6.order-lg-1.order-2
          p Es aquella que posee existencia propia dentro del sistema, es decir, puede ser identificada de manera única sin depender de otra entidad. Este tipo de entidad cuenta con una clave primaria que permite distinguir cada uno de sus registros.
          p.mb-0 Desde el punto de vista del diseño, las entidades fuertes representan los elementos principales del sistema, como clientes, productos, empleados o usuarios. Estas entidades contienen información relevante que puede ser gestionada de manera independiente.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema3/img21.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Entidad débil")
        .col-12.col-lg-6.order-lg-1.order-2
          p Es aquella que no puede identificarse de manera única por sí sola, ya que depende de otra entidad (generalmente una entidad fuerte) para su existencia. Este tipo de entidad no posee una clave primaria completa propia, sino que utiliza una clave parcial que, combinada con la clave primaria de la entidad fuerte, permite identificar sus registros.
          p.mb-0 Las entidades débiles suelen representar elementos que dependen directamente de otros, como detalles de pedidos, registros asociados o elementos subordinados dentro del sistema.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema3/img22.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Las anteriores entidades pueden verse representadas de la siguiente manera:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 12.
          span Relación entre entidad fuerte y entidad débil
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema3/img23.svg', alt='Figura 12 que representa la relación entre una entidad fuerte y una entidad débil, mostrando cómo la entidad fuerte se identifica mediante un identificador y atributos propios, mientras que la entidad débil depende de esta a través de una relación, incorporando un atributo compuesto para completar su identificación.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema3/img24.svg', alt='Figura 12 que representa la relación entre una entidad fuerte y una entidad débil, mostrando cómo la entidad fuerte se identifica mediante un identificador y atributos propios, mientras que la entidad débil depende de esta a través de una relación, incorporando un atributo compuesto para completar su identificación.')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img25.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") Las diferencias entre estos tipos de entidades radican principalmente en su independencia y forma de identificación, tal como se presenta en la siguiente tabla:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Comparación de entidades
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Característica
                th(data-aos="fade-down")(style= "width: 35%") Entidad fuerte
                th(data-aos="fade-down")(style= "width: 35%") Entidad débil
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Existencia
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Independiente
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Dependiente
              tr
                td(data-aos="fade-down") Identificación
                td(data-aos="fade-down") Clave primaria propia
                td(data-aos="fade-down") Clave parcial + clave foránea
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Relación
                td(data-aos="fade-down")(style="background-color: #F0F8FF") No depende de otras
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Depende de una entidad fuerte
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img26.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Esta relación se representa en los diagramas entidad-relación mediante símbolos específicos, como líneas dobles o rectángulos dobles para indicar la naturaleza dependiente de la entidad débil.
        br
        br
        p La identificación correcta de entidades fuertes y débiles es fundamental para construir modelos de datos adecuados, ya que permite representar correctamente la estructura del sistema y evitar errores en la implementación.
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img27.jpg', alt='Imagen decorativa')
      .col.col-lg-5.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Además, este concepto facilita la normalización de la base de datos, ya que ayuda a definir correctamente las relaciones entre tablas y evita redundancias innecesarias.
        p.mb-4(data-aos="fade-down") Las entidades fuertes y débiles están directamente relacionadas con:
        ul.lista-ul--color(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Las claves primarias y foráneas.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 La integridad referencial.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 El modelo entidad-relación.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 La normalización de bases de datos.
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Campos relacionales y dependencia de existencia
    p.mb-4(data-aos="fade-down") En el diseño de bases de datos relacionales, los campos relacionales y la dependencia de existencia constituyen elementos fundamentales para establecer la estructura y las relaciones entre las tablas. Estos conceptos permiten definir cómo se vinculan los datos entre sí y garantizan que la información mantenga coherencia, integridad y consistencia dentro del sistema.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-2.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img28.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.p-4
          p.mb-0(data-aos="fade-down") Los campos relacionales corresponden a aquellos atributos que permiten establecer relaciones entre tablas, mientras que la dependencia de existencia define el grado en que una entidad o registro depende de otro para existir dentro de la base de datos. Ambos conceptos están estrechamente relacionados con la integridad referencial y con la correcta estructuración del modelo relacional.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Para comprender la organización y coherencia de la información en una base de datos, es fundamental analizar el papel que cumplen los campos relacionales y su impacto en las relaciones, la dependencia de existencia y la integridad referencial:
    .tarjeta.tarjeta--BG04.p-md-5.p-4.mb-4(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Campos relacionales
              p Son atributos dentro de una tabla que establecen una conexión con otra tabla. Generalmente, estos campos corresponden a claves foráneas, las cuales hacen referencia a la clave primaria de otra tabla.
              p.mb-0 Desde el punto de vista del diseño, estos campos son esenciales para evitar la duplicación de datos y permitir la organización estructurada de la información. En lugar de repetir datos en múltiples tablas, se utiliza un campo relacional que referencia la información en otra tabla, lo que mejora la eficiencia y reduce la redundancia.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img29.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Relación entre campos relacionales
              p Permiten establecer distintos tipos de relaciones, dependiendo de la estructura de los datos. Estas relaciones determinan cómo interactúan las tablas entre sí y cómo se puede acceder a la información relacionada.
              p.mb-0 Las relaciones pueden ser de uno a uno, uno a muchos o muchos a muchos y su correcta implementación depende del uso adecuado de los campos relacionales.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img30.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Dependencia de existencia
              p Se refiere a la relación en la cual un registro o entidad no puede existir sin la presencia de otro. Este concepto es especialmente relevante en el caso de entidades débiles, donde la existencia de un registro depende directamente de otro registro en una entidad diferente.
              p.mb-0 Desde una perspectiva estructural, la dependencia de existencia implica que un registro en una tabla solo puede ser creado si existe previamente un registro relacionado en otra tabla. Esto garantiza la coherencia de los datos y evita la creación de registros huérfanos.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img31.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 Relación con la integridad referencial
              p Están directamente relacionados con la integridad referencial, la cual asegura que las relaciones entre tablas sean válidas.
              p.mb-0 Cuando se define una clave foránea, el sistema gestor de bases de datos garantiza que el valor ingresado corresponda a un registro existente en la tabla relacionada. Esto evita inconsistencias y asegura que los datos mantengan coherencia.
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img32.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        p.mb-0(data-aos="fade-down") Para finalizar se detallan las siguientes acciones positivas y negativas de estos campos:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img33.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Importancia en el diseño de bases de datos
            p La correcta definición de campos relacionales y dependencias de existencia permite:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Evitar registros inconsistentes.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Mantener la coherencia entre datos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Reducir redundancia.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Facilitar consultas complejas.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Mejorar la organización del sistema.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema3/img34.svg', alt='Imagen decorativa')(style="width: 85%")
            h4.text-center Errores comunes en su implementación
            p En el diseño de bases de datos, es frecuente encontrar errores relacionados con estos conceptos, como:
            ul.lista-ul.mb-0
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Definir campos relacionales sin restricciones adecuadas.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Permitir registros sin relación válida.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Crear dependencias innecesarias.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 No validar la existencia de datos relacionados.

</template>

<script>
export default {
  name: 'Tema3',
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
