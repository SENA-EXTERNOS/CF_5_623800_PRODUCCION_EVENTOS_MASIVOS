<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Pirotecnia y efectos especiales en los eventos

    .row
      .col-lg-7
          p La pirotecnia y efectos especiales puede ser usada bajo la normatividad pertinente en Colombia para crear espectáculos en espacios abiertos o cerrados. Usualmente se usa para el cierre de matrimonios, eventos deportivos, cumpleaños, aniversarios, bautizos, graduaciones y quince años; lanzamientos de producto, fiestas de fin de año, eventos corporativos, entregas de premios, ferias, entre otros.
          p.mb-3 Antes de implementarse, se debe consultar la normatividad exigida por el municipio donde está localizado el recinto de eventos. 
          p.mb-3 De manera general se pueden mencionar algunos aspectos a tener en cuenta como:
      .col-lg-5
        figure
        img(src="@/assets/curso/temas/tema8/img1_tema_8.png", alt="alt")

    .row.mt-5
      .col.lg-12
        .bloque-texto-g.color-secundario2.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img2_tema_8.png')})`}"
          )
          .bloque-texto-g__texto-t1.p-4
            p.mb-0 Para ampliar más la información se pueden consultar las siguientes referencias normativas:
            ul.lista-ul--color
              li.mt-3 
                i.fas.fa-check
                | Incrementar la asistencia de participantes y ponentes que pueden estar ubicados en diferentes partes del mundo.
              li 
                i.fas.fa-check
                | Reduce la incompatibilidad de horario y posibilita ver el evento en diferido.
              li 
                i.fas.fa-check
                | Reducción de costos y valor de venta del evento.

    .row.mt-5
      .col-lg-12
        p.mb-3 Ahora bien, la pirotecnia se puede clasificar así:

    .row.mt-5
      .col-lg-12
        figure.img3_t8
          img(src='@/assets/curso/temas/tema8/img3_tema_8.svg', alt='Texto que describa la imagen') 
    
    

    .row.mt-5
      .col-lg-10  
        .cajon.color_anexo2.p-4
          p.mb-0 Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros. 
          
    .row.mt-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.p-4(titulo="Efectos especiales pirotécnicos: ")
            p.mb-0 <b>Efectos especiales pirotécnicos: </b>
            p.mb-3 se usan en espacios donde la distancia de seguridad es limitada. Estos efectos se pueden aplicar en todo tipo de evento ya que cuenta con altos requisitos de seguridad y su combustión es limpia.

          .tarjeta.clr--gris.p-4(titulo="Fuegos artificiales")
            p.mb-0 <b>Efectos especiales pirotécnicos: </b>
            p.mb-3 se usan en espacios donde la distancia de seguridad es limitada. Estos efectos se pueden aplicar en todo tipo de evento ya que cuenta con altos requisitos de seguridad y su combustión es limpia.

          .tarjeta.clr--gris.p-4(titulo="Fuegos grandes artificiales")
            p.mb-0 <b>Efectos especiales pirotécnicos: </b>
            p.mb-3 se usan en espacios donde la distancia de seguridad es limitada. Estos efectos se pueden aplicar en todo tipo de evento ya que cuenta con altos requisitos de seguridad y su combustión es limpia.



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
