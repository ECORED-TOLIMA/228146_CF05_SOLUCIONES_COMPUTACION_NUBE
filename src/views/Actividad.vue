<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<br><b> Objetivo:</b> evaluar de manera integral los conocimientos en lógica, algoritmia, bases de datos relacionales, SQL y NoSQL, fortaleciendo el pensamiento analítico y la comprensión de los conceptos fundamentales relacionados con el diseño y la gestión de sistemas de información modernos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de un algoritmo dentro de un sistema?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolver un problema mediante pasos ordenados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Almacenar información en tablas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear relaciones entre datos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Gestionar usuarios.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Un algoritmo siempre busca resolver un problema mediante una secuencia lógica de pasos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una característica clave de las bases de datos NoSQL?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso exclusivo de tablas.', esCorrecta: false },
            { id: 'b', texto: 'Esquema rígido.', esCorrecta: false },
            { id: 'c', texto: 'Flexibilidad en los datos.', esCorrecta: true },
            { id: 'd', texto: 'Dependencia de SQL.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! NoSQL se caracteriza por manejar estructuras flexibles y datos no estructurados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué problema busca reducir la normalización en bases de datos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seguridad.', esCorrecta: false },
            { id: 'b', texto: 'Redundancia.', esCorrecta: true },
            { id: 'c', texto: 'Velocidad.', esCorrecta: false },
            { id: 'd', texto: 'Acceso.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La normalización elimina duplicidad de datos y mejora la integridad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento permite identificar de forma única un registro?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Clave foránea.', esCorrecta: false },
            { id: 'b', texto: 'Índice.', esCorrecta: false },
            { id: 'c', texto: 'Campo.', esCorrecta: false },
            { id: 'd', texto: 'Clave primaria.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La clave primaria garantiza unicidad dentro de la tabla.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué tipo de entidad depende de otra para existir?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entidad fuerte.', esCorrecta: false },
            { id: 'b', texto: 'Entidad independiente.', esCorrecta: false },
            { id: 'c', texto: 'Entidad débil.', esCorrecta: true },
            { id: 'd', texto: 'Entidad lógica.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las entidades débiles dependen de una fuerte para su identificación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué lenguaje permite crear tablas en una base de datos?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DML', esCorrecta: false },
            { id: 'b', texto: 'DDL', esCorrecta: true },
            { id: 'c', texto: 'DCL', esCorrecta: false },
            { id: 'd', texto: 'VDL', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! DDL se utiliza para definir estructuras como tablas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué comando se usa para consultar datos?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'INSERT.', esCorrecta: false },
            { id: 'b', texto: 'DELET.', esCorrecta: false },
            { id: 'c', texto: 'UPDATE.', esCorrecta: false },
            { id: 'd', texto: 'SELECT.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! SELECT es el comando principal para recuperar información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Qué lenguaje controla permisos en una base de datos?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DDL', esCorrecta: false },
            { id: 'b', texto: 'DML', esCorrecta: false },
            { id: 'c', texto: 'DCL', esCorrecta: true },
            { id: 'd', texto: 'TCL', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! DCL gestiona accesos mediante GRANT y REVOKE.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué es una vista en una base de datos?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tabla física.', esCorrecta: false },
            { id: 'b', texto: 'Copia de datos.', esCorrecta: false },
            { id: 'c', texto: 'Índice.', esCorrecta: false },
            { id: 'd', texto: 'Tabla virtual.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las vistas no almacenan datos, solo los muestran.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué modelo NoSQL usa nodos y relaciones?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Documental.', esCorrecta: false },
            { id: 'b', texto: 'Clave-valor.', esCorrecta: false },
            { id: 'c', texto: 'Columnar.', esCorrecta: false },
            { id: 'd', texto: 'Grafos.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Los grafos son ideales para relaciones complejas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué modelo almacena datos en formato JSON?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Columnar.', esCorrecta: false },
            { id: 'b', texto: 'Documental.', esCorrecta: true },
            { id: 'c', texto: 'Grafos.', esCorrecta: false },
            { id: 'd', texto: 'Relacional.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las bases documentales usan JSON o BSON.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué permite la clave foránea?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eliminar datos.', esCorrecta: false },
            { id: 'b', texto: 'Crear tablas.', esCorrecta: false },
            { id: 'c', texto: 'Relacionar tablas.', esCorrecta: true },
            { id: 'd', texto: 'Ordenar datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La clave foránea conecta tablas mediante relaciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué modelo de diseño representa entidades y relaciones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Físico.', esCorrecta: false },
            { id: 'b', texto: 'Lógico.', esCorrecta: false },
            { id: 'c', texto: 'Conceptual.', esCorrecta: true },
            { id: 'd', texto: 'Estructural.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El modelo conceptual usa diagramas entidad-relación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué problema genera datos contradictorios?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Redundancia.', esCorrecta: false },
            { id: 'b', texto: 'Inconsistencia.', esCorrecta: true },
            { id: 'c', texto: 'Integridad.', esCorrecta: false },
            { id: 'd', texto: 'Relación.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! La inconsistencia ocurre cuando los datos no coinciden.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué tipo de base de datos prioriza velocidad en memoria?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Relacional.', esCorrecta: false },
            { id: 'b', texto: 'NoSQL.', esCorrecta: false },
            { id: 'c', texto: 'NewSQL.', esCorrecta: false },
            { id: 'd', texto: 'In-Memory.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las bases In-Memory trabajan directamente en RAM.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué describe cómo se consultan los datos en NoSQL?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Claves.', esCorrecta: false },
            { id: 'b', texto: 'Tablas.', esCorrecta: false },
            { id: 'c', texto: 'Patrones de acceso.', esCorrecta: true },
            { id: 'd', texto: 'Índices.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! El diseño NoSQL se basa en patrones de consulta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué técnica guarda datos relacionados en un mismo documento?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Referencia.', esCorrecta: false },
            { id: 'b', texto: 'Normalización.', esCorrecta: false },
            { id: 'c', texto: 'Indexación.', esCorrecta: false },
            { id: 'd', texto: 'Incrustación.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Incrustación reduce consultas complejas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué tipo de base de datos organiza datos por columnas?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Grafos.', esCorrecta: false },
            { id: 'b', texto: 'Columnar.', esCorrecta: true },
            { id: 'c', texto: 'Documental.', esCorrecta: false },
            { id: 'd', texto: 'Relacional.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Las bases columnares optimizan análisis de datos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué garantiza la integridad referencial?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Índices.', esCorrecta: false },
            { id: 'b', texto: 'Tablas.', esCorrecta: false },
            { id: 'c', texto: 'Claves foráneas.', esCorrecta: true },
            { id: 'd', texto: 'Vistas.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Asegura que los datos relacionados existan.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué define la estructura de la base de datos?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DML.', esCorrecta: false },
            { id: 'b', texto: 'DCL.', esCorrecta: false },
            { id: 'c', texto: 'VDL.', esCorrecta: false },
            { id: 'd', texto: 'DDL.', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! DDL define tablas, columnas y restricciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
