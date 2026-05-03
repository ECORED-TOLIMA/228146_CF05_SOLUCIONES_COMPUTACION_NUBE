<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-4(data-aos="fade-down") Este componente formativo se orienta al desarrollo de competencias fundamentales para la estructuración, organización y gestión eficiente de la información en entornos digitales. En un contexto donde los datos son un activo estratégico, este documento permite comprender cómo diseñar soluciones que garanticen integridad, disponibilidad y coherencia en el manejo de la información.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/intro/img02.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") El contenido inicia con los fundamentos de lógica y representación de la información, así como la clasificación de los diferentes tipos de bases de datos, incluyendo enfoques relacionales y no relacionales. Esto permite identificar las características, usos y ventajas de cada modelo según las necesidades del entorno.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/intro/img01.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Posteriormente, se abordan los principios de las bases de datos relacionales, profundizando en su teoría, componentes y en el uso de sistemas gestores de bases de datos. Se introduce el proceso de diseño mediante los modelos conceptual, lógico y físico, permitiendo estructurar soluciones de manera organizada y escalable.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.p-4
          p.mb-0(data-aos="fade-down") El componente continúa con el diseño de bases de datos relacionales, incluyendo conceptos clave como normalización, modelo relacional, tipos de claves, entidades y dependencias, los cuales son esenciales para garantizar la integridad y eficiencia de los datos.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/intro/img03.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Asimismo, se incorporan los lenguajes propios de los sistemas gestores de bases de datos (DDL, DML, DCL y VDL), que permiten definir, manipular, controlar y visualizar la información dentro de los sistemas.
        p.mb-0(data-aos="fade-down") Finalmente, se introduce el enfoque de bases de datos NoSQL, abordando sus conceptos, modelos, tipos y arquitecturas, así como las estrategias de diseño basadas en patrones de acceso y análisis de relaciones. Esto brinda una visión actualizada y flexible frente a las necesidades de almacenamiento de grandes volúmenes de datos y aplicaciones modernas.

</template>

<script>
export default {
  name: 'Introduccion',
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
