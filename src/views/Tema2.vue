<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El render y el raider de un evento

    .row
      .col-lg-12
        p.mb-0 El render es una imagen o maqueta digital en tercera dimensión, que presenta de manera realista el stand o escenario que tendrá el evento. Permite proponer opciones de diseño, recursos viables a usar y un resultado final; varía dependiendo del presupuesto, las herramientas técnicas existentes y el tiempo con el que cuente el cliente. Es un perfecto aliado para tomar decisiones y realizar un proceso colaborativo entre el organizador y la empresa contratante.
        p.mt-3 Como ejemplo, se le invita a visualizar el siguiente video: fuente: Render para eventos-3D

    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

    .row.mt-5
      .col-lg-12
        p.mb-0 Por su parte, el rider se puede definir como un documento que especifica los requerimientos técnicos y la logística necesaria para poder llevar a cabo shows especiales dentro de los eventos, los cuales son fundamentales en algunos de ellos, ya que funcionan como parte de la comunicación o entretenimiento. Por ejemplo, una ambientación musical para una reunión, un show de danza, teatro, un concierto, entre otros.

    .row.mt-5
      .col-lg-12
        p.mb-0 Los siguientes aspectos se deben especificar  en este documento, teniendo en cuenta información  suministrada por el cliente y por el organizador del evento.

    .row
      .col-lg-5
        img(src="@/assets/curso/temas/tema2/img1_tema_2.svg", alt="alt")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Escenografía")
            .col-md-4
              figure.img_10_t3
                img(src='@/assets/curso/temas/tema2/icon1_tema_2.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              p Medidas mínimas del escenario, mobiliario necesario y elementos decorativos como telones y bambalinas
          
          .row(titulo="Audiovisuales")  
            .col-md-4
              figure.img_10_t3
                img(src='@/assets/curso/temas/tema2/icon2_tema_2.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              p Datos técnicos con respecto a las necesidades de sistemas de proyección, pantallas LED, displays, monitores, controles etc.  
         
          .row(titulo="Iluminación")
            .col-md-4
              figure.img_10_t3
                img(src='@/assets/curso/temas/tema2/icon3_tema_2.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              p Información detallada de los equipos necesarios y las conexiones que se requieren.

          .row(titulo="Sonido")
            .col-md-4
              figure.img_10_t3
                img(src='@/assets/curso/temas/tema2/icon4_tema_2.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              p Información sobre mesas de sonido, micrófonos, accesorios etc.

          .row(titulo="Backline")
            .col-md-4
              figure.img_10_t3
                img(src='@/assets/curso/temas/tema2/icon5_tema_2.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              p Instrumentos musicales y sus accesorios

          .row(titulo="Requisitos no técnicos")
            .col-md-4
              figure.img_10_t3
                img(src='@/assets/curso/temas/tema2/icon6_tema_2.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              p En caso de que el evento incluya artistas, en esta sección se debe indicar todo lo que éstos van a requerir como hotel, transporte, camerinos, etc.


</template>

<script>
export default {
  name: 'Tema2',
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
