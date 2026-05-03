<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo desarrolla de manera progresiva los fundamentos de la lógica, la algoritmia y los sistemas de bases de datos, iniciando con los formatos de representación de la información y la clasificación de los distintos tipos de bases de datos, así como sus usos, diferencias y ventajas. Posteriormente, se abordan los principios de las bases de datos relacionales, incluyendo su teoría, componentes, sistemas gestores y modelos de diseño, profundizando en el proceso de normalización, el modelo relacional, los tipos de claves y las relaciones entre entidades. Asimismo, se estudian los lenguajes de los sistemas gestores de bases de datos, comprendiendo los lenguajes de definición, manipulación, control de datos y definición de vistas. Finalmente, el componente incorpora el estudio de las bases de datos NoSQL, sus conceptos, principios, modelos, arquitecturas y criterios de diseño, permitiendo comprender enfoques modernos de almacenamiento y gestión de información en entornos distribuidos, escalables y de alta demanda.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza de manera jerárquica y relacional los fundamentos de las bases de datos, iniciando con la lógica y la representación de la información como base para la comprensión de los sistemas de datos. Se integran los principios de las bases de datos relacionales, sus componentes, modelos de diseño y procesos de normalización, así como el uso de claves, entidades y relaciones. Además, se incorporan los lenguajes de los sistemas gestores de bases de datos para la definición, manipulación y control de la información. Finalmente, se aborda el enfoque de las bases de datos NoSQL, sus modelos, arquitecturas y criterios de diseño, permitiendo comprender la evolución de los sistemas de almacenamiento y su aplicación en entornos modernos y distribuidos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
