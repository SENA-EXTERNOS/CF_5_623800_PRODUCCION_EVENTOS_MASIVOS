<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-8
        .color_anexo-intro.p-4
          p.mt-5 Bienvenido querido aprendiz, a través de los conceptos y documentos de apoyo de este componente, comprenderá los procesos asociados a los montajes y la normatividad en la organización de eventos, con la intención de desarrollar habilidades para una correcta gestión de estos. Se le invita a observar el siguiente video con el fin de conocer de una manera más amplia, el contenido que estudiará a continuación. Le deseamos éxitos en el desarrollo de este recurso educativo.
      .col-lg-4
        img(src='@/assets/curso/temas/introduccion/img_introduccion.svg', alt='Texto que describa la imagen').imagen-decorativa-1

    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video       


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
