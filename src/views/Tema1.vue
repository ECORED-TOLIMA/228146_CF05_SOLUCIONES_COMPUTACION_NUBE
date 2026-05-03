<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de lógica y algoritmia
    p.mb-4(data-aos="fade-down") Constituyen la base esencial para el diseño, análisis y desarrollo de soluciones informáticas, especialmente en el diseño y modelado de bases de datos. Este enfoque permite comprender cómo estructurar problemas, representar información y construir soluciones de manera ordenada, coherente y eficiente.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") En el ámbito de los sistemas de información, la lógica y la algoritmia no solo permiten resolver problemas computacionales, sino que también facilitan la organización de datos, la definición de procesos y la toma de decisiones estructuradas, aspectos fundamentales en el diseño de bases de datos.
        .row.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Este apartado aborda los principios básicos relacionados con la representación de la información, la clasificación de las bases de datos y el análisis de sus usos, diferencias y ventajas, proporcionando una visión integral del manejo de datos en diferentes entornos tecnológicos.     
    .row.justify-content-center.mb-4
      .col-lg-4.col-6.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img03.svg', alt='Imagen decorativa')
      .col-lg-8.col-12
        .row.justify-content-center.mb-0
          .col.col-12
            .row.align-items-center.mb-4(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-2
                  h3.mb-0.ms-lg-1.ms-md-3.ms-1 Importancia de la lógica y algoritmia en bases de datos
        p.mb-3(data-aos="fade-down") Su importancia radica en:
        .row.justify-content-center
          .col-xl-6.col-lg-6.col-md-10.col-12.mb-xl-0
            .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
              .indicador--hover(v-if="mostrarIndicador")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/img04.jpg", alt="Imagen decorativa")
              .crd_hover_txt--body
                h5.t1.mb-3 Lógica
                h5.t2.mb-2 Lógica
                p Permite estructurar el pensamiento de manera ordenada.
          .col-xl-6.col-lg-6.col-md-10.col-12.mb-xl-0
            .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
              .indicador--hover(v-if="mostrarIndicador")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema1/img05.jpg", alt="Imagen decorativa")
              .crd_hover_txt--body
                h5.t1.mb-3 Algoritmia
                h5.t2.mb-2 Algoritmia
                p Facilita la definición de pasos necesarios para resolver un problema. 
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") En el contexto de bases de datos, estos fundamentos permiten:
        ul.lista-ul--color.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Organizar la información de manera estructurada.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Definir relaciones entre datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Diseñar esquemas eficientes.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Garantizar integridad y consistencia de la información.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Optimizar procesos de consulta y almacenamiento.
        p.mb-0(data-aos="fade-down") La siguiente imagen da una relación explicitica al respeto entre estos procesos:
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema1/img06.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Relación entre lógica, algoritmia y bases de datos
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img07.svg', alt='Figura 1 que presenta un esquema comparativo de los niveles de diseño de datos, mostrando la evolución desde un modelo conceptual hasta un modelo lógico y físico, a partir de las entidades de tiempo, producto, tienda y ventas, así como sus relaciones y estructura progresiva para el análisis de información.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img07_.svg', alt='Figura 1 que presenta un esquema comparativo de los niveles de diseño de datos, mostrando la evolución desde un modelo conceptual hasta un modelo lógico y físico, a partir de las entidades de tiempo, producto, tienda y ventas, así como sus relaciones y estructura progresiva para el análisis de información.')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center.mb-0(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Componentes fundamentales de la lógica y algoritmia
    p.mb-4(data-aos="fade-down") Para comprender la lógica y la algoritmia, es necesario identificar los elementos que las conforman y su función dentro del proceso de resolución de problemas. A continuación, se presentan los componentes fundamentales y su descripción general:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Enfoques metodológicos para el análisis y diseño de algoritmos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Componente
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Lógica
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite estructurar el pensamiento y establecer relaciones coherentes.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Evaluar una condición si–entonces para decidir si un estudiante aprueba o no una asignatura.
              tr
                td(data-aos="fade-down") Algoritmo
                td(data-aos="fade-down") Secuencia de pasos para resolver un problema.
                td(data-aos="fade-down") Pasos ordenados para calcular el promedio de varias calificaciones.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Datos
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Información que se procesa.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Lista de notas registradas en un sistema académico.
              tr
                td(data-aos="fade-down") Procesos
                td(data-aos="fade-down") Transformación de datos en resultados.
                td(data-aos="fade-down") Operaciones matemáticas que calculan el promedio a partir de las notas.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Resultados
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Salida generada por el sistema.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Promedio final mostrado en pantalla o almacenado en el sistema.
    p.mb-0(data-aos="fade-down") La lógica y la algoritmia son fundamentales para:
    .row
      .col-12
        .px-5.py-4
          .row.align-items-center.BG01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-3
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema1/img13.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-4
              SlyderF.custom.color-acento-botones.px-4.py-0(columnas="col-lg-4 col-xl-4")
                .tarjeta.tarjeta--slyder.px-3.py-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img08.svg", alt="Imagen decorativa").img100.m-auto
                  p Definir estructuras de almacenamiento de datos.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img09.svg", alt="Imagen decorativa").img100.m-auto
                  p Identificar relaciones entre entidades.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img10.svg", alt="Imagen decorativa").img100.m-auto
                  p Evitar redundancia e inconsistencias.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img11.svg", alt="Imagen decorativa").img100.m-auto
                  p Diseñar modelos eficientes.
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema1/img12.svg", alt="Imagen decorativa").img100.m-auto
                  p Optimizar consultas.
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-7.col-12.order-lg-2.order-2
        .row.justify-content-center.mb-4
          .col.col-12
            .row.align-items-center(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-2
                  h3.mb-0.ms-lg-0.ms-md-3.ms-1 Características de una solución basada en lógica y algoritmia
        p.mb-4(data-aos="fade-down") A continuación, se presentan las principales características que orientan el desarrollo de soluciones lógicas y eficientes:
        ul.lista-ul--color.mt-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Claridad en la definición del problema.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Estructuración ordenada de pasos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Coherencia en el procesamiento de datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Capacidad de adaptación a diferentes escenarios.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Optimización de recursos.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema1/img14.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") El siguiente es el proceso lógico en la solución de problemas:
    .row.mb-0
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center Comprender el problema
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5.text-center Realizar un plan
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5.text-center Ejecutar el plan
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.C01.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h5.text-center Analizar la solución
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Formatos de representación de la información
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img15.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La representación de los datos es un aspecto fundamental en los sistemas de información y en el diseño de bases de datos, ya que permite organizarlos y estructurarlos de forma comprensible y funcional. Los distintos formatos de representación definen el modelado de los datos y facilitan su análisis, almacenamiento y procesamiento dentro de un sistema.
    p.mb-4(data-aos="fade-down") En el contexto del diseño y modelado de bases de datos, la representación de la información permite transformar datos del mundo real en estructuras formales que pueden ser interpretadas por sistemas computacionales. Esto es esencial para garantizar que la información sea consistente, accesible y útil para la toma de decisiones.
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-6.col-12.order-lg-2.order-2
        .row.justify-content-center.mb-4
          .col.col-12
            .row.align-items-center(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-2
                  h3.mb-0.ms-lg-0.ms-md-3.ms-1 Importancia de la representación de la información
        p.mb-4(data-aos="fade-down") La adecuada representación de la información permite:
        ul.lista-ul--color.mt-4.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Comprender la estructura de los datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Facilitar el diseño de sistemas de información.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Mejorar la organización y almacenamiento de datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Reducir errores e inconsistencias.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Optimizar el acceso y procesamiento de la información.
        p.mb-0(data-aos="fade-down") A continuación, se detalla un ejemplo sobre el proceso de la información:
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema1/img16.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Proceso de representación de la información
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img17.svg', alt='Figura 2 que ilustra el proceso de representación de datos en un sistema académico, mostrando cómo se organizan y relacionan entidades como alumnos, tutores, profesores y asignaturas. El esquema incluye atributos personales, académicos y administrativos, así como procesos de matriculación, asignación e importación, evidenciando la estructura necesaria para el modelado de bases de datos.')
      //- .col-12
      //-   figure.movil
      //-     img(src='@/assets/curso/tema1/img18.svg', alt='Figura 2 que ilustra el proceso de representación de datos en un sistema académico, mostrando cómo se organizan y relacionan entidades como alumnos, tutores, profesores y asignaturas. El esquema incluye atributos personales, académicos y administrativos, así como procesos de matriculación, asignación e importación, evidenciando la estructura necesaria para el modelado de bases de datos.')
    .row.justify-content-center.mb-3
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Tipos de formatos de representación de la información
        p.mb-0(data-aos="fade-down") La información puede representarse en diferentes formatos dependiendo del contexto, el propósito y el tipo de sistema en el que se utilice:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Tipos de formatos de representación de la información
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Formato
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Textual
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Representación mediante palabras o caracteres.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Documentos, registros.
              tr
                td(data-aos="fade-down") Numérico
                td(data-aos="fade-down") Representación mediante números.
                td(data-aos="fade-down") Edad, salario.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Gráfico
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Representación visual de la información.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Diagramas, gráficos.
              tr
                td(data-aos="fade-down") Tabular
                td(data-aos="fade-down") Organización en filas y columnas.
                td(data-aos="fade-down") Tablas de datos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Estructurado
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Organización con reglas definidas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Bases de datos.
              tr
                td(data-aos="fade-down") Multimedia
                td(data-aos="fade-down") Uso de imágenes, audio o video.
                td(data-aos="fade-down") Archivos digitales.
    p.mb-4(data-aos="fade-down") En el diseño de bases de datos, la información se representa en tres niveles principales:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img18.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Conceptual
            p.mb-0(data-aos="fade-down") Describe la información del mundo real a través de entidades, atributos y relaciones, permitiendo comprender el problema sin considerar aspectos técnicos. Facilita la comunicación entre usuarios y diseñadores del sistema.
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img19.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Lógico
            p.mb-0(data-aos="fade-down") Establece la estructura de los datos de manera formal, definiendo tablas, campos y relaciones, sin tener en cuenta aún el tipo de gestor de bases de datos o los detalles de almacenamiento.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema1/img20.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Físico
            p.mb-0(data-aos="fade-down") Especifica cómo se almacenan realmente los datos en el sistema, incluyendo archivos, índices, métodos de acceso y consideraciones de rendimiento según la tecnología utilizada.
    p.mb-4(data-aos="fade-down") Igualmente, para representar la información de manera estructurada, se utilizan diferentes modelos:
    .row.mb-4
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center Modelo entidad-relación (ER)
          p.text-center Representa entidades, atributos y relaciones.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h5.text-center Modelo relacional
          p.text-center Organiza la información en tablas.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h5.text-center Modelo orientado a objetos
          p.text-center Representa datos como objetos.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.C01.p-5.h-100
          .tarjeta-numerada__numero
            .h2 4
          h5.text-center Modelo NoSQL
          p.text-center Permite estructuras flexibles para grandes volúmenes de datos.
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-4.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        p.text-bold.mb-0(data-aos="fade-down") Ejemplo aplicado
        p.mb-4(data-aos="fade-down") Supóngase un sistema de estudiantes:
        p.mb-0(data-aos="fade-down") Nombre: Juan
        p.mb-0(data-aos="fade-down") Edad: 20
        p(data-aos="fade-down") Curso: Programación
        p.mb-0.text-bold(data-aos="fade-down") Representación:
        .row.justify-content-center
          .col-lg-3.col-12
            p.text-bold ID_Estudiante
            p 1
          .col-lg-3.col-12
            p.text-bold Nombre
            p Juan
          .col-lg-3.col-12
            p.text-bold Edad
            p 20
          .col-lg-3.col-12
            p.text-bold Curso
            p Programación
        p.text-bold.mb-0(data-aos="fade-down") Modelo de base de datos
        ul.lista-ul.mb-0
          li.mb-0
            i.lista-ul__vineta
            p.mb-0 <b>Entidad</b>: Estudiante
          li.mb-0
            i.lista-ul__vineta
            p <b>Atributos</b>: ID_Estudiante, Nombre, Edad, Curso
      .col-lg-6.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img21.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-strench.mb-4
      .col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Los siguientes son los errores comunes en la representación de la información, por ello es importante tenerlos en cuenta para no cometerlos:
        ul.lista-ul--color.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Redundancia de datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Falta de normalización.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Ambigüedad en la definición de atributos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Mala estructuración de tablas.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Inconsistencias en los datos.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema1/img22.svg', alt='Imagen decorativa')
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Clasificación de las bases de datos
    p.mb-4(data-aos="fade-down") La clasificación de las bases de datos responde a la necesidad de organizar, almacenar y gestionar la información de acuerdo con diferentes modelos, arquitecturas y requerimientos tecnológicos. A medida que evolucionan los sistemas de información, han surgido distintos tipos de bases de datos que permiten adaptarse a escenarios específicos, como grandes volúmenes de datos, alta velocidad de procesamiento o flexibilidad en la estructura de la información.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img23.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") En este contexto, las bases de datos se clasifican principalmente en relacionales, NoSQL, in memory y NewSQL, cada una con características particulares que determinan su uso, ventajas y limitaciones. Esta clasificación permite seleccionar el tipo de base de datos más adecuado, según las necesidades del sistema, el tipo de información a manejar y el entorno tecnológico. 
    p.mb-4(data-aos="fade-down") Aunque el enfoque principal se centra en los cuatro tipos mencionados, resulta fundamental comprender su clasificación general, teniendo en cuenta que estas denominaciones se mantienen en inglés por tratarse de términos técnicos estandarizados:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Representación de la Clasificación general de las bases de datos
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img24.svg', alt='Figura 3 que representa la clasificación general de las bases de datos, agrupando los principales modelos según su estructura y forma de almacenamiento.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img25.svg', alt='Figura 3 que representa la clasificación general de las bases de datos, agrupando los principales modelos según su estructura y forma de almacenamiento.')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Bases de datos relacionales (<em>relational</em>)
    p.mb-4(data-aos="fade-down") Las bases de datos relacionales constituyen el modelo tradicional más utilizado en el diseño de sistemas de información. Estas se fundamentan en el modelo relacional, en el cual la información se organiza en tablas compuestas por filas y columnas, estableciendo relaciones entre los datos mediante claves primarias y foráneas.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-4(data-aos="fade-down") Este tipo de bases de datos se caracteriza por garantizar la integridad, consistencia y estructuración de la información, lo que las hace ideales para sistemas que requieren alta precisión, como sistemas financieros, administrativos y empresariales. Además, utilizan el lenguaje SQL (Structured Query Language) para la manipulación y consulta de datos.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema1/img27.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Desde el punto de vista conceptual, las bases de datos relacionales permiten representar entidades del mundo real mediante tablas, donde cada registro corresponde a una instancia de la entidad y cada atributo define sus características.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema1/img26.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Bases de datos NoSQL
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img28.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Las bases de datos NoSQL (Not Only SQL) surgen en respuesta a la evolución de las aplicaciones digitales modernas, las cuales requieren gestionar información diversa y cambiante. Este enfoque se aparta de las estructuras tradicionales al permitir una mayor adaptación del almacenamiento de datos según las necesidades específicas de cada sistema.
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Estas bases de datos se orientan a entornos dinámicos donde la agilidad en el manejo de la información es prioritaria, facilitando la integración con aplicaciones distribuidas y plataformas tecnológicas actuales. Su diseño favorece la rapidez en el acceso a los datos y la capacidad de respuesta ante grandes volúmenes de información generados de forma continua.
        p(data-aos="fade-down") Desde una perspectiva general, NoSQL propone una forma alternativa de organizar y gestionar los datos, enfocándose en la flexibilidad y en la adecuación del modelo de almacenamiento al uso real de la información, más que en estructuras estrictamente predefinidas.
        p.mb-0(data-aos="fade-down") A continuación, se presentan los principales tipos de bases de datos NoSQL y algunos ejemplos representativos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Tipos de bases de datos NoSQL
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Clave-valor
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Almacena datos en pares clave-valor.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Redis.
              tr
                td(data-aos="fade-down") Documentales
                td(data-aos="fade-down") Manejan datos en formato JSON o similar.
                td(data-aos="fade-down") MongoDB.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Columnar
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Organizan datos por columnas.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Cassandra.
              tr
                td(data-aos="fade-down") Grafos
                td(data-aos="fade-down") Representan relaciones complejas.
                td(data-aos="fade-down") Neo4j.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img29.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Estas bases de datos se caracterizan por almacenar la información directamente en la memoria RAM en lugar de hacerlo en disco, lo que permite un acceso extremadamente rápido a los datos. Este tipo de bases de datos es ideal para aplicaciones que requieren procesamiento en tiempo real, como sistemas financieros, análisis de datos en vivo o plataformas de alta concurrencia.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") El uso de memoria principal reduce significativamente los tiempos de lectura y escritura, mejorando el rendimiento del sistema. Sin embargo, este enfoque requiere mecanismos adicionales para garantizar la persistencia de los datos, ya que la memoria RAM es volátil.
        p.mb-0(data-aos="fade-down") La siguiente es una comparación de este tipo de bases de datos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Comparación de bases de datos In-Memory
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 17%") Acción
                th(data-aos="fade-down")(style= "width: 26%") Base de datos en memoria
                th(data-aos="fade-down")(style= "width: 26%") Base de datos que prioriza la memoria
                th(data-aos="fade-down")(style= "width: 26%") Base de datos en disco

            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Rendimiento
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Suele ser el más rápido debido al acceso directo a la memoria que reduce la latencia de E/S del disco.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Más rápido que el basado en disco, pero puede no ser tan rápido como el puramente en memoria debido a la posible latencia de E/S del disco.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Normalmente más lento debido a la latencia de E/S del disco.

              tr
                td(data-aos="fade-down") Coste
                td(data-aos="fade-down") Suele ser más costosa debido al elevado coste de la RAM. (La RAM suele ser sólo una parte del coste total).
                td(data-aos="fade-down") Coste medio. Se puede aumentar la RAM con almacenamiento en disco más económico.
                td(data-aos="fade-down") Suelen ser menos costosas debido a su dependencia del almacenamiento en disco.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Persistencia de datos
                td(data-aos="fade-down")(style="background-color: #F0F8FF") A menudo volátiles. Los datos pueden perderse en caso de reinicio o fallo si no se utilizan las funciones de durabilidad.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Proporciona persistencia, lo que reduce el riesgo de pérdida de datos a pesar de depender principalmente de la memoria.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alta persistencia. Los datos se almacenan, aunque el sistema se apague.

              tr
                td(data-aos="fade-down") Escalabilidad
                td(data-aos="fade-down") Limitado por la RAM disponible a menos que sea posible el escalado horizontal.
                td(data-aos="fade-down") Mayor escalabilidad, ya que puede utilizar almacenamiento en disco para conjuntos de datos más grandes.
                td(data-aos="fade-down") Puede almacenar datos en discos de gran tamaño, pero es posible que no pueda mantener el ritmo de las demandas de E/S.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Patrones de acceso a los datos
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Lo mejor para cargas de trabajo con altas tasas de operación y baja latencia. La mayoría están optimizados para el almacenamiento transitorio de datos.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Adecuado para cargas de trabajo con una combinación de operaciones de lectura y escritura. Requisitos de latencia de bajos a moderados.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") La mejor opción para cargas de trabajo analíticas, de almacenamiento a largo plazo o que requieran mucha escritura, o si el rendimiento no es un problema.

              tr
                td(data-aos="fade-down") Casos prácticos
                td(data-aos="fade-down") Análisis en tiempo real, almacenamiento en caché, almacenamiento de sesiones o cualquier cosa transitoria.
                td(data-aos="fade-down") Uso general, incluidas aplicaciones en tiempo real y casi real, almacenamiento en caché y cargas de trabajo mixtas.
                td(data-aos="fade-down") Almacenamiento de datos a gran escala y aplicaciones con requisitos que no cambian con frecuencia.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Ejemplos
                td(data-aos="fade-down")(style="background-color: #F0F8FF") 
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Couchbase Capella, solo memoria.
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Servidor Couchbase, efímero.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") CouchStore o Magma (disponible tanto en Couchbase Capella como en Couchbase Server).
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Despliegues típicos de SQL Server, Oracle, Postgres, MySQL, etc. (Estos pueden utilizar memoria para almacenar en búfer y caché los planes de consulta y algunos pueden tener complementos para aumentar el almacenamiento en caché). Comparar con NoSQL.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Bases de datos NewSQL
    p.mb-4(data-aos="fade-down") Estas bases de datos representan una evolución del modelo relacional, combinando las ventajas de las bases de datos tradicionales (consistencia e integridad) con las capacidades de escalabilidad y alto rendimiento de los sistemas NoSQL.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-auto.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img30.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") Este tipo de bases de datos está diseñado para soportar aplicaciones modernas que requieren grandes volúmenes de datos y transacciones en tiempo real, sin sacrificar la estructura y confiabilidad del modelo relacional.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img31.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C02.color-secundario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Las bases de datos NewSQL utilizan arquitecturas distribuidas que permiten escalar horizontalmente, manteniendo al mismo tiempo las propiedades ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad).
        p(data-aos="fade-down") Basado en lo anterior, a continuación, se presenta una comparación general de estos tipos de bases de datos abordados, destacando sus características en cuanto a estructura, escalabilidad, velocidad y principales casos de uso, con el fin de facilitar la comprensión de sus diferencias y aplicaciones más comunes:
    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col.col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Comparación de bases de datos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo
                th(data-aos="fade-down")(style= "width: 20%") Estructura
                th(data-aos="fade-down")(style= "width: 20%") Escalabilidad
                th(data-aos="fade-down")(style= "width: 20%") Velocidad
                th(data-aos="fade-down")(style= "width: 20%") Uso principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Relacional (<em>relational</em>)
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Tablas
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Media
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Media
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Sistemas empresariales.
              tr
                td(data-aos="fade-down") NoSQL
                td(data-aos="fade-down") Flexible
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") <em><em>Big data</em>, apps <em>web</em></em>.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") In-Memory
                td(data-aos="fade-down")(style="background-color: #F0F8FF") En RAM
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alta
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Muy alta
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Tiempo real.
              tr
                td(data-aos="fade-down") NewSQL
                td(data-aos="fade-down") Tablas distribuidas
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") Alta
                td(data-aos="fade-down") Sistemas modernos.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Usos, diferencias y ventajas de los distintos tipos de bases de datos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img32.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") El análisis de los usos, diferencias y ventajas de los distintos tipos de bases de datos constituye un aspecto fundamental en el diseño de sistemas de información, ya que permite seleccionar la tecnología más adecuada según las necesidades del entorno, el volumen de datos, la velocidad requerida y el tipo de aplicación a desarrollar. En la actualidad, la diversidad de modelos de bases de datos responde a la evolución de los sistemas digitales, los cuales demandan soluciones más flexibles, escalables y eficientes.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Cada tipo de base de datos —relacional, NoSQL, in memory y NewSQL— presenta características particulares que influyen directamente en su uso, comportamiento y desempeño. Por ello, comprender sus diferencias no solo facilita su implementación, sino que también permite optimizar recursos y garantizar soluciones tecnológicas adecuadas.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Usos
    p.mb-4(data-aos="fade-down") Los usos de los distintos tipos de bases de datos son:
    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta tarjeta--C03" data-aos="zoom-in")
      .row.justify-content-center(titulo="Relacionales (<em>relational</em>)")
        .col-12.col-lg-6.order-lg-1.order-2
          p Son ampliamente utilizadas en sistemas empresariales tradicionales, como aplicaciones contables, sistemas de gestión administrativa, plataformas bancarias y sistemas de inventario. Su principal fortaleza radica en la estructura organizada de los datos y en la capacidad de mantener relaciones claras entre ellos, lo que permite garantizar la integridad y consistencia de la información. Estas bases de datos son especialmente útiles en entornos donde las transacciones deben ser seguras y confiables.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema1/img33.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="NoSQL")
        .col-12.col-lg-6.order-lg-1.order-2
          p Han ganado relevancia en aplicaciones modernas, especialmente en sistemas <em>web</em>, redes sociales, plataformas de comercio electrónico y sistemas de análisis de grandes volúmenes de datos (<em>Big data</em>). Su uso se orienta a escenarios donde la flexibilidad en la estructura de los datos y la capacidad de escalar horizontalmente son fundamentales. Este tipo de bases de datos permite manejar datos no estructurados o semiestructurados, lo que resulta clave en entornos dinámicos.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema1/img34.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="In-Memory")
        .col-12.col-lg-6.order-lg-1.order-2
          p Se emplean principalmente en aplicaciones que requieren alta velocidad de procesamiento, como sistemas financieros en tiempo real, análisis de datos en vivo, videojuegos en línea y sistemas de recomendación. Al trabajar directamente en memoria RAM, reducen significativamente los tiempos de acceso a la información, lo que las hace ideales para entornos donde la latencia debe ser mínima.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema1/img35.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="NewSQL")
        .col-12.col-lg-6.order-lg-1.order-2
          p Se utilizan en sistemas que requieren combinar la consistencia del modelo relacional con la escalabilidad de los sistemas distribuidos. Son comunes en aplicaciones modernas de alta concurrencia, como plataformas digitales globales, servicios financieros y sistemas que requieren procesamiento de grandes volúmenes de transacciones sin perder integridad.
        .col-12.col-lg-6.order-lg-2.order-1
          figure
            img(src='@/assets/curso/tema1/img36.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Diferencias
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema1/img37.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Las diferencias entre estos tipos de bases de datos se evidencian principalmente en su estructura, forma de almacenamiento, escalabilidad y consistencia de los datos. Mientras las bases de datos relacionales utilizan esquemas rígidos basados en tablas, las NoSQL permiten estructuras flexibles que se adaptan a diferentes tipos de información.
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema1/img38.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Otra diferencia importante radica en el enfoque de consistencia. Las bases de datos relacionales priorizan la integridad de los datos mediante el cumplimiento de las propiedades ACID, lo que garantiza transacciones seguras. En contraste, muchas bases de datos NoSQL adoptan un enfoque basado en la disponibilidad y la tolerancia a fallos, sacrificando en algunos casos la consistencia inmediata.
        .cajon.cajon.C01.color-primario.px-4.py-4.mb-4
          p.mb-0(data-aos="fade-down") Las bases de datos In-Memory se diferencian por su ubicación de almacenamiento, ya que operan en memoria principal en lugar de disco, lo que les permite alcanzar altos niveles de rendimiento. Por su parte, las bases de datos NewSQL integran características de los sistemas relacionales tradicionales con arquitecturas distribuidas, logrando un equilibrio entre consistencia y escalabilidad.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Ventajas
    p.mb-4(data-aos="fade-down") Cada tipo de base de datos ofrece ventajas específicas que responden a distintos requerimientos tecnológicos:
    .row.BG03.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-5.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Relacionales (<em>relational</em>)")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se destacan por su robustez, confiabilidad y facilidad para mantener la integridad de los datos, lo que las convierte en una opción segura para sistemas críticos. Además, su uso de SQL facilita la gestión y consulta de la información.
          .row(numero="2" titulo="NoSQL")
            .col-12.mb-4.mb-md-0
              p.mb-0 Ofrecen una gran ventaja en términos de flexibilidad y escalabilidad, permitiendo manejar grandes volúmenes de datos distribuidos en múltiples servidores. Esta característica es especialmente útil en aplicaciones que requieren adaptarse rápidamente a cambios en la estructura de la información.
          .row(numero="3" titulo="In-Memory")
            .col-12.mb-4.mb-md-0
              p.mb-0 Su principal ventaja es la velocidad, ya que permiten acceder a los datos de manera casi inmediata. Esto mejora significativamente el rendimiento de las aplicaciones y reduce los tiempos de respuesta.
          .row(numero="4" titulo="NewSQL")
            .col-12.mb-4.mb-md-0
              p.mb-0 Combinan lo mejor de los dos mundos: la consistencia de las bases de datos relacionales y la escalabilidad de los sistemas NoSQL. Esto las convierte en una opción ideal para aplicaciones modernas que requieren alto rendimiento sin sacrificar la integridad de los datos.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img39.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .row.align-items-center.mb-4(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Criterios para seleccionar un tipo de base de datos
        p.mb-0(data-aos="fade-down") La elección del tipo de base de datos depende de múltiples factores, entre los que se destacan el volumen de datos, la velocidad de procesamiento requerida, el nivel de consistencia necesario, la estructura de la información y la capacidad de escalabilidad del sistema. En sistemas tradicionales, donde la precisión y la integridad son prioritarias, las bases de datos relacionales suelen ser la mejor opción. En entornos donde se manejan grandes volúmenes de datos y se requiere flexibilidad, las bases de datos NoSQL resultan más adecuadas. Para aplicaciones en tiempo real, las bases de datos In-Memory ofrecen un rendimiento superior, mientras que las bases de datos NewSQL son ideales para sistemas modernos que requieren equilibrio entre rendimiento y consistencia.
</template>

<script>
export default {
  name: 'Tema1',
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
