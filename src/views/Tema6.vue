<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Condiciones de escenarios

    .row.mt-5
      .col-lg-8
        .bloque-texto-b.color-primario-tema6.p-4
          .bloque-texto-b__texto
            p.mb-0 El escenario en espacios abiertos estará conformado por una plataforma, elevada del suelo, donde se desarrolla la escena. También se pueden implementar otras estructuras como torres, muros o contrafuertes, alas y la cubierta, y de ser necesario, se crean estructuras específicas para la ubicación de equipos de vídeo, prensa, cañoneros, equipos de control de sonido o incluso zonas VIP.
      .col-lg-4.mb-5.mb-lg-0
        figure
        img(src="@/assets/curso/temas/tema6/img1_tema_6.svg", alt="alt") 

    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1 Trabajo en alturas

    .row
      .col-lg-12
          p Dentro de las estructuras más usadas en eventos se encuentran:: 

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row  
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema6/img2_tema_6.svg', alt='Texto que describa la imagen')
        .row
          .col-md-12
            figure
              img(src='@/assets/curso/temas/tema6/img3_tema_6.svg', alt='Texto que describa la imagen')
        .row
          .col-md-12  
            figure
              img(src='@/assets/curso/temas/tema6/img4_tema_6.svg', alt='Texto que describa la imagen')
        .row
          .col-md-12  
            figure
              img(src='@/assets/curso/temas/tema6/img5_tema_6.svg', alt='Texto que describa la imagen')
                         


  
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
