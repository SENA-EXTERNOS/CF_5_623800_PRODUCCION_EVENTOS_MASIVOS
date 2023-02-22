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
        p El escenario en espacios abiertos estará conformado por una plataforma, elevada del suelo, donde se desarrolla la escena. También se pueden implementar otras estructuras como torres, muros o contrafuertes, alas y la cubierta, y de ser necesario, se crean estructuras específicas para la ubicación de equipos de vídeo, prensa, cañoneros, equipos de control de sonido o incluso zonas VIP.
      .col-lg-4.mb-5.mb-lg-0
        figure
        img(src="@/assets/curso/temas/tema6/img1_tema_6.svg", alt="alt") 

    h3.mt-5 Estructuras para eventos

    p Dentro de las estructuras más usadas en eventos se encuentran:   
    
    SlyderA(tipo="b")
      .row.justify-content-center.align-items-center
        .col-12
          img.brad(src='@/assets/curso/temas/tema6/1.png')

      .row.justify-content-center.align-items-center
        .col-12
          img.brad(src='@/assets/curso/temas/tema6/2.png')


      .row.justify-content-center.align-items-center
        .col-12
          img.brad(src='@/assets/curso/temas/tema6/3.png')

      .row.justify-content-center.align-items-center
        .col-12
          img.brad(src='@/assets/curso/temas/tema6/4.png')

    h3.mt-5 Instalaciones eléctricas, sustancias inflamables y normativa de uso.                   

    .row.mt-3
      .col-lg-4
        figure
        img(src="@/assets/curso/temas/tema6/img6_tema_6.png", alt="alt").imagen-decorativa-8  
      .col-lg-8
          p.mb-3 Existen recintos que cuentan con instalaciones eléctricas certificadas y aptas para ser utilizadas en los eventos; sin embargo, hay otros, en los que se debe realizar una instalación temporal, ya que no cuentan con la misma en su interior. Éstas deben ser realizadas y verificadas por un técnico competente en el área, que se encuentre titulado en el campo o por un organismo de control. Dentro de los implementos que se pueden adecuar en un recinto que no cuente con una instalación eléctrica están: grupos electrógenos, cuadros de distribución, bancos de carga, SAI/UPS, transformadores, cableado, pasacables, depósito de combustible, iluminación, señalética y seguridad.

    .row.mt-5
      .col-lg-12
         p.mb-3 Con respecto a las sustancias inflamables, es importante mencionar que los eventos, bien sea al aire libre o en espacios cerrados, no están exentos de ser generadores de emergencias con sólidos inflamables (compuestos de carbón, alcanfor o celuloide); líquidos (gasolina, pentano, metanol, acetona, etanol, pinturas, barniz) y gases inflamables (hidrógeno, metano, etano). Todo dependerá de la temática y de lo que se use, tanto para su montaje o adecuación, como para el desarrollo de los espectáculos o actividades centrales.
      
    .row.mt-5
      .col-lg-12
          p.mb-3 Por ello es importante que se tomen precauciones como:

    .slyderB_bg_01.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-start.mt-5
          .col-lg-6          
            p Evaluar los riesgos existentes y peligros potenciales en el lugar del evento.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema6/img8_tema_6.svg')

        .row.justify-content-center.align-items-start.mt-5
          .col-lg-6          
            p Capacitar a los empleados frente al uso de materiales peligrosos, los cuales deben estar correctamente marcados y almacenados.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema6/img9_tema_6.svg')

        .row.justify-content-center.align-items-start.mt-5
          .col-lg-6          
            p Los materiales peligrosos deben tener su etiqueta para que los empleados la puedan leer y asegurarse de manipularlos correctamente. 
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema6/img10_tema_6.svg')

        .row.justify-content-center.align-items-start.mt-5
          .col-lg-6          
            p Los empleados deben dar cuenta de fugas, derrames o contenedores en mal estado.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema6/img11_tema_6.svg')
   

        .row.justify-content-center.align-items-start.mt-5
          .col-lg-6          
            p Las sustancias altamente inflamables deben almacenarse lejos de agentes oxidantes potentes y de materiales que puedan tener una combustión espontánea.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema6/img12_tema_6.svg')


        .row.justify-content-center.align-items-start.mt-5
          .col-lg-6          
            p Contar con extintores de incendios y materiales inertes absorbentes como arena y tierra seca, para su utilización en situaciones de emergencia.
          .col-6.col-lg-5
            figure
              img(src='@/assets/curso/temas/tema6/img13_tema_6.svg')



</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({}),
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
