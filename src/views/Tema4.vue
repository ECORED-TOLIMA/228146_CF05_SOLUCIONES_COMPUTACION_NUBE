<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Lenguajes de sistemas gestores de bases de datos (DBMS)
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-3(data-aos="fade-down") Los lenguajes de sistemas gestores de bases de datos constituyen el conjunto de instrucciones que permiten interactuar con una base de datos, definiendo su estructura, manipulando la información, controlando el acceso y gestionando las transacciones. Estos lenguajes son fundamentales para el funcionamiento de los sistemas de información, ya que permiten a los usuarios y aplicaciones comunicarse con el sistema gestor de bases de datos (DBMS) de manera estructurada y eficiente.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema4/img02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") En el contexto del modelo relacional, el lenguaje más utilizado es SQL (Structured Query Language), el cual se ha consolidado como el estándar para la gestión de bases de datos. A través de SQL, es posible crear, consultar, modificar y controlar los datos, garantizando su integridad y consistencia.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img01.jpg', alt='Imagen decorativa')
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Lenguaje de definición de datos (DDL)
    p.mb-4(data-aos="fade-down") El lenguaje de definición de datos, conocido como DDL (Data Definition Language), es el conjunto de instrucciones utilizado en los sistemas gestores de bases de datos para definir, modificar y eliminar la estructura de los datos. Este lenguaje constituye la base sobre la cual se construyen las bases de datos, ya que permite establecer las tablas, atributos, relaciones y restricciones necesarias para organizar la información.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4.mb-0
          p.mb-0(data-aos="fade-down") En el contexto del modelo relacional, el DDL permite crear las estructuras que soportan el almacenamiento de datos, asegurando que la base de datos cumpla con los requerimientos del sistema y garantice la integridad de la información.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") El DDL cumple un papel fundamental en la creación y mantenimiento de la base de datos, permitiendo definir su arquitectura y garantizar su correcto funcionamiento, basado en las siguientes funciones principales:
        ul.lista-ul--color.mb-4(data-aos="fade-down")
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Crear estructuras de datos como tablas, índices y esquemas.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Modificar estructuras existentes.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Eliminar objetos de la base de datos.
          li.mb-3
            i.fas.fa-cloud-arrow-down
            p.mb-0 Definir restricciones de integridad.
          li.mb-0
            i.fas.fa-cloud-arrow-down
            p.mb-0 Establecer relaciones entre tablas.
        .row.justify-content-center.mb-4
          .col.col-12
            .row.align-items-center(data-aos="flip-down")
              .col-auto.pe-0(style="z-index:2")
                figure
                  img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
              .col-lg-auto.col-9.titulo01(style="z-index:1")
                .p-2
                  h3.mb-0.ms-lg-0.ms-md-3.ms-1 Comandos principales del DDL
        .row.justify-content-center.mb-0
          .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img04.svg', alt='Imagen decorativa')
          .col.col-lg-10.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") El DDL está compuesto por un conjunto de comandos que permiten gestionar la estructura de la base de datos. Estos comandos son fundamentales para la creación y administración de los objetos dentro del sistema. La siguiente es su explicación y ejemplificación:
    .tarjeta.tarjeta--BG04.p-md-5.p-4.mb-4(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 CREATE
              p El comando CREATE permite crear nuevos objetos dentro de la base de datos, como tablas, bases de datos, vistas o índices.
              p.mb-0 CREATE TABLE Estudiante (
              p.mb-0 ID_Estudiante INT PRIMARY KEY,
              p.mb-0 Nombre VARCHAR(50),
              p.mb-0 Edad INT
              p.mb-0 );
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img05.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 ALTER
              p El comando ALTER permite modificar la estructura de una tabla existente, ya sea agregando, eliminando o modificando columnas.
              p.mb-0 ALTER TABLE Estudiante
              p.mb-0 ADD Correo VARCHAR(100);
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img06.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 DROP
              p El comando DROP se utiliza para eliminar completamente un objeto de la base de datos, como una tabla o una base de datos.
              p.mb-0 DROP TABLE Estudiante;
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img07.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-6.order-lg-2.order-2
              h4 TRUNCATE
              p El comando TRUNCATE elimina todos los registros de una tabla sin eliminar su estructura.
              p.mb-0 TRUNCATE TABLE Estudiante;
            .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema4/img08.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Restricciones con DDL
    p.mb-4(data-aos="fade-down") El DDL permite establecer restricciones que garantizan la integridad de los datos dentro de la base de datos. Estas restricciones controlan qué tipo de datos pueden almacenarse y cómo se relacionan entre sí. Los siguientes son los tipos existentes:
    .row.BG03.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-5.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="PRIMARY KEY")
            .col-12.mb-4.mb-md-0
              p.mb-0 Identifica registros únicos.
          .row(numero="2" titulo="FOREIGN KEY")
            .col-12.mb-4.mb-md-0
              p.mb-0 Establece relaciones entre tablas.
          .row(numero="3" titulo="NOT NULL")
            .col-12.mb-4.mb-md-0
              p.mb-0 Evita valores nulos.
          .row(numero="4" titulo="UNIQUE")
            .col-12.mb-4.mb-md-0
              p.mb-0 Evita duplicados.
          .row(numero="5" titulo="CHECK")
            .col-12.mb-4.mb-md-0
              p.mb-0 Valida condiciones específicas.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img09.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .row.justify-content-center.cajon.cajon.C01.p-4
          .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img10.jpg', alt='Imagen decorativa')
          .col.col-lg-7.col-12.order-lg-1.order-2
            .tarjeta.tarjeta--C06.px-4.py-3.mb-4
              .row.justify-content-center.align-items-center.mb-0
                .col.col-lg-5.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/tema4/img11.svg', alt='Imagen decorativa')
                .col.col-lg-7.col-12.order-lg-2.order-2
                  p.mb-0 CREATE TABLE Pedido (
                  p.mb-0 ID_Pedido INT PRIMARY KEY,
                  p.mb-0 ID_Cliente INT,
                  p.mb-0 Total DECIMAL(10,2),
                  p.mb-0 FOREIGN KEY (ID_Cliente) REFERENCES Cliente(ID_Cliente)
                  p.mb-0 );
            p.mb-0.order-lg-3.order-3(data-aos="fade-down") Para entender de mejor manera el tema de las restricciones, se detalla el siguiente esquema explicativo:
    .row.justify-content-center.mb-4.desktop
      .col.col-lg-10.col-12
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img12.svg', alt='Imagen decorativa')
          .tarjeta.color-acento-contenido.p-3(x="73%" y="15%" numero="+")
            p.mb-0 Restricción de valor único, permite que solo se permitan valores únicos sobre este campo.
          .tarjeta.color-acento-contenido.p-3(x="73%" y="25.5%" numero="+")
            p.mb-0 Restricción de predeterminado, permite que de no llenarse el campo el asigne de manera automática un valor.
          .tarjeta.color-acento-contenido.p-3(x="73%" y="36%" numero="+")
            p.mb-0 Restricción de llave primaria, garantiza que este campo no permita duplicados y será el identificador único de cada fil.
          .tarjeta.color-acento-contenido.p-3(x="73%" y="46.5%" numero="+")
            p.mb-0 Una restricción de llave foránea hace que este campo guarde relación con un campo de otra tabla, al que hace referencia y no permite ingresar un valor si no existe en el campo de la otra tabla.
          .tarjeta.color-acento-contenido.p-3(x="73%" y="57%" numero="+")
            p.mb-0 Restricción de regla de validación, no permite ingresar un valor al campo si este no cumple con la condición especificada.
          .tarjeta.color-acento-contenido.p-3(x="73%" y="68%" numero="+")
            p.mb-0 Asigna la fecha actual automáticamente si no se proporciona un valor.
    .row.justify-content-center.col-12.mb-4
        figure.movil
          img(src='@/assets/curso/tema4/img13.svg', alt='Imagen decorativa')
    .tarjeta.tarjeta--C11.px-4.py-3.d-inline-block.mb-4
      ul.lista-ul.mb-0
        li.mb-0
          i.lista-ul__vineta
          h3.mb-0 Importancia del DDL en el diseño de bases de datos y su aplicación en entornos reales
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .col-lg-2.d-none.d-lg-block.mb-3
            figure
              img(src='@/assets/curso/tema4/img14.svg', alt='Imagen decorativa')
          p(data-aos="fade-down") El DDL es esencial en el proceso de diseño, ya que permite materializar el modelo lógico en una estructura implementada dentro del DBMS. A través de este lenguaje, se definen las tablas, relaciones y restricciones que garantizan el correcto funcionamiento del sistema.
          p.mb-0(data-aos="fade-down") El DDL es utilizado en la creación de bases de datos en sistemas empresariales, plataformas <em>web</em>, sistemas académicos y aplicaciones financieras. Su correcta aplicación permite construir estructuras sólidas que soportan grandes volúmenes de información.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema4/img13.jpg', alt='Imagen decorativa')
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Lenguaje de manipulación de datos (DML)
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img15.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") El lenguaje de manipulación de datos, conocido como DML (Data Manipulation Language), es el conjunto de instrucciones que permite gestionar la información almacenada en una base de datos. A través de este lenguaje, es posible realizar operaciones fundamentales como la inserción, consulta, actualización y eliminación de datos.
        p.mb-3(data-aos="fade-down") El DML cumple un papel clave en la manipulación de la información dentro del sistema:
        ul.lista-ul--color.mb-4(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Insertar nuevos registros en las tablas.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Consultar datos almacenados.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Modificar información existente.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Eliminar registros cuando sea necesario.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Comandos principales del DML
    p.mb-4(data-aos="fade-down") A continuación, se presentan los principales comandos del DML, utilizados para ejecutar las operaciones básicas de gestión de datos dentro de una base de datos, junto con ejemplos que ilustran su uso:
    .row.BG03.justify-content-center.align-items-center.px-3.mb-0(data-aos="flip-up")
      .col-lg-5.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="INSERT")
            .col-12.mb-4.mb-md-0
              p Permite agregar nuevos registros a una tabla.
              h5.mb-0 INSERT INTO Cliente (ID, Nombre)
              h5.mb-0 VALUES (1, 'Juan');
          .row(numero="2" titulo="SELECT")
            .col-12.mb-4.mb-md-0
              p Permite consultar información almacenada en una o varias tablas.
              h5.mb-0 SELECT * FROM Cliente;
          .row(numero="3" titulo="UPDATE")
            .col-12.mb-4.mb-md-0
              p Permite modificar datos existentes dentro de una tabla.
              h5.mb-0 UPDATE Cliente
              h5.mb-0 SET Nombre = 'Carlos'
              h5.mb-0 WHERE ID = 1;
          .row(numero="4" titulo="DELETE")
            .col-12.mb-4.mb-md-0
              p Permite eliminar registros de una tabla.
              h5.mb-0 DELETE FROM Cliente
              h5.mb-0 WHERE ID = 1;
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img16.png', alt='Imagen decorativa')
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Lenguaje de control de datos (DCL)
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img17.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") El Lenguaje de control de datos, conocido como DCL (Data Control Language), es el conjunto de instrucciones utilizadas para gestionar la seguridad y el acceso a la información dentro de un sistema gestor de bases de datos. Este lenguaje permite definir qué usuarios pueden acceder a la base de datos y qué tipo de operaciones pueden realizar sobre ella.
        p.mb-4(data-aos="fade-down") El DCL permite administrar los permisos y privilegios dentro del sistema para:
        ul.lista-ul--color.mb-0(data-aos="fade-down")
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Asignar permisos a usuarios o roles.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Restringir accesos a determinadas operaciones.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Controlar la seguridad de la base de datos.
          li
            i.fas.fa-cloud-arrow-down
            p.mb-0 Garantizar la confidencialidad de la información.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Comandos principales del DCL
    p.mb-4(data-aos="fade-down") A continuación, se presentan los comandos de este tipo de lenguaje y un ejemplo puntual, los cuales permiten gestionar los permisos y niveles de acceso de los usuarios dentro de la base de datos:
    .row.justify-content-center.mb-4
      .col.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema4/img18.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 GRANT
              p.mb-4 Permite otorgar permisos a un usuario o rol para realizar operaciones sobre la base de datos.
              h5.mb-0 GRANT SELECT, INSERT ON Cliente TO usuario;
      .col.col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .col-lg-12(data-aos="flip-up")
              img(src='@/assets/curso/tema4/img20.svg' alt="Imagen decorativa")
          .tarjeta.tarjeta--C04.px-5.py-3
            .p-4
              h4 REVOKE
              p.mb-4 Permite retirar permisos previamente otorgados a un usuario o rol.
              h5.mb-0 REVOKE INSERT ON Cliente FROM usuario;
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img19.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") El DCL es esencial en entornos donde múltiples usuarios acceden a la base de datos, ya que permite establecer niveles de acceso diferenciados según el rol de cada usuario.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Lenguaje de definición de vistas (VDL)
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img21.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") El Lenguaje de definición de vistas, conocido como VDL (View Definition Language), es el conjunto de instrucciones utilizado para crear, modificar y eliminar vistas dentro de una base de datos. Una vista es una representación virtual de los datos que se obtiene a partir de una consulta, sin almacenar físicamente la información; es una tabla virtual que se construye a partir de una o varias tablas reales mediante una consulta SQL. Aunque se presenta como una tabla, no almacena datos propios, sino que muestra información derivada de otras estructuras.
        p.mb-3(data-aos="fade-down") El VDL permite gestionar las vistas dentro del sistema para:
        .row.justify-content-center.mb-0
          .col.col-lg-4.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema4/img22.svg', alt='Imagen decorativa')
          .col.col-lg-8.col-12.order-lg-2.order-2
            ul.lista-ul--color.mb-4(data-aos="fade-down")
              li.mb-3
                i.fas.fa-cloud-arrow-down
                p.mb-0 Crear vistas a partir de consultas.
              li.mb-3
                i.fas.fa-cloud-arrow-down
                p.mb-0 Modificar vistas existentes.
              li.mb-3
                i.fas.fa-cloud-arrow-down
                p.mb-0 Eliminar vistas cuando ya no se requieren.
              li.mb-3
                i.fas.fa-cloud-arrow-down
                p.mb-0 Simplificar consultas complejas.
              li.mb-0
                i.fas.fa-cloud-arrow-down
                p.mb-0 Restringir acceso a ciertos datos.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-lg-2.ms-md-3.ms-1 Comandos principales del VDL
    p.mb-4(data-aos="fade-down") A continuación, se presentan los comandos del lenguaje de definición de vistas y un ejemplo representativo, los cuales permiten crear, modificar y eliminar vistas para facilitar el acceso y la organización de la información almacenada en la base de datos:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img23.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center CREATE VIEW
            p(data-aos="fade-down") Permite crear una vista basada en una consulta.
            p.text-bold.mb-0(data-aos="fade-down") CREATE VIEW Vista_Clientes AS
            p.text-bold.mb-0(data-aos="fade-down") SELECT Nombre, Ciudad
            p.text-bold.mb-0(data-aos="fade-down") FROM Cliente;
          .col-xl.col-lg-6.tarjeta.tarjeta--C06.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img24.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center ALTER VIEW
            p(data-aos="fade-down") Permite modificar una vista existente.
            p.text-bold.mb-0(data-aos="fade-down") ALTER VIEW Vista_Clientes AS
            p.text-bold.mb-0(data-aos="fade-down") SELECT Nombre
            p.text-bold.mb-0(data-aos="fade-down") FROM Cliente;
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema4/img25.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center DROP VIEW
            p(data-aos="fade-down") Permite eliminar una vista de la base de datos.
            p.text-bold.mb-0(data-aos="fade-down") DROP VIEW Vista_Clientes;
    p.mb-4(data-aos="fade-down") Para interpretar de manera precisa lo explicado en los anteriores lenguajes, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/DL5w_hyqA4w?si=HxS0hOaywnEm-l5v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema4',
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
