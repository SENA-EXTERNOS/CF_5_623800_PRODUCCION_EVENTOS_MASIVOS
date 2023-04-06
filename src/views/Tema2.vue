<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 El <em>render</em> y el <em>raider</em> de un evento

    .row
      .col-lg-12
        .bloque-texto-b.color-primario-tema2.p-4
          .bloque-texto-b__texto
            p.mb-0 El <em>render</em> es una imagen o maqueta digital en tercera dimensión, que presenta de manera realista el <em>stand</em> o escenario que tendrá el evento. Permite proponer opciones de diseño, recursos viables a usar y un resultado final; varía dependiendo del presupuesto, las herramientas técnicas existentes y el tiempo con el que cuente el cliente. Es un perfecto aliado para tomar decisiones y realizar un proceso colaborativo entre el organizador y la empresa contratante.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/componentes/ej-07.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Como ejemplo, se le invita a visualizar el siguiente video: fuente: #[i Render] para eventos-3D
                .col-sm-auto
                  a.boton.color-acento-contenido.text-white(:href="('https://www.youtube.com/watch?v=l4F7zUQ9-K4')" target="_blank")
                    span Ver video
                    i.fas.fa-video    
    
    .row
      .col-lg-12
        .bloque-texto-b.color-primario-tema21.p-4
          .bloque-texto-b__texto
            p.mb-0 Por su parte, el <em>rider</em> se puede definir como un documento que especifica los requerimientos técnicos y la logística necesaria para poder llevar a cabo <em>shows</em> especiales dentro de los eventos, los cuales son fundamentales en algunos de ellos, ya que funcionan como parte de la comunicación o entretenimiento. Por ejemplo, una ambientación musical para una reunión, un <em>show</em> de danza, teatro, un concierto, entre otros.
            <br>
            <br>
            p.mb-0 Los siguientes aspectos se deben especificar  en este documento, teniendo en cuenta información  suministrada por el cliente y por el organizador del evento.

    .row
      .col-lg-5
        img(src="@/assets/curso/temas/tema2/img1_tema_2.svg", alt="alt")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta-tarjeta--azul")
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
              p Datos técnicos con respecto a las necesidades de sistemas de proyección, pantallas LED, <em>displays,</em> monitores, controles etc.  
         
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
