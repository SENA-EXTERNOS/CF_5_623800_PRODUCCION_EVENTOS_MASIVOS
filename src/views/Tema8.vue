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

    .row.mt-3
      .col-sm-6.col-xl-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 
              p.text.small Delimitar las áreas donde no podrán acceder los asistentes del evento,
              p.text.small mientras se esté efectuando un espectáculo con pólvora.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img4_tema_8.svg')})`}")

      .col-sm-6.col-xl-2.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.abajo.color-secundario(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img5_tema_8.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 
              p.text.small El personal manipulador debe ser mayor de edad. 
      
      .col-sm-6.col-xl-2.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img6_tema_8.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 
              p.text.small La delimitación de zonas, fechas y horarios dentro de las cuales podrá 
              p.text.small realizarse el espectáculo. 
      .col-sm-6.col-xl-2.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img7_tema_8.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 
              p.text.small Se debe dejar limpio el sitio destinado para la pólvora.

      .col-sm-6.col-xl-2.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img8_tema_8.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 
              p.text.small En algunos municipios se exige un certificado de bomberos en el cual 
              p.text.small se especifican las condiciones que se deben tener en cuenta para 
              p.text.small la realización de la quema.
      .col-sm-6.col-xl-2.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.izquierda.color-acento-botones(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img9_tema_8.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 
              p.text.small No se debe hacer quemas en lugares cerca de una reserva forestal, 
              p.text.small ni junto a redes telefónicas o transformadores.
            
    .row.mt-5
      .col.lg-12
        .bloque-texto-g.color-secundario2.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img2_tema_8.png')})`}"
          )
          .bloque-texto-g__texto-t1.p-4
            p.mb-0 Para ampliar más la información se pueden consultar las siguientes referencias normativas:
            p
              ol.lista-ol--cuadro.mt-3
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Ley 670 del 2001.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Decreto 4481 de 2006.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Nfpa 1600.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Nfpa 704 marcación de vehículos

    .row.mt-5
      .col-lg-12
        p.mb-3 Ahora bien, la pirotecnia se puede clasificar así:

    .row.mt-5
      .col-lg-12
        figure.img3_t8
          img(src='@/assets/curso/temas/tema8/img3_tema_8.svg', alt='Texto que describa la imagen') 
         
    .row.mt-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Efectos especiales pirotécnicos: ")
            p.mb-0 <b>Efectos especiales pirotécnicos: </b>
            p.mb-3 se usan en espacios donde la distancia de seguridad es limitada. Estos efectos se pueden aplicar en todo tipo de evento ya que cuenta con altos requisitos de seguridad y su combustión es limpia.

          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Fuegos artificiales")
            p.mb-0 <b>Efectos especiales pirotécnicos: </b>
            p.mb-3 se usan en espacios donde la distancia de seguridad es limitada. Estos efectos se pueden aplicar en todo tipo de evento ya que cuenta con altos requisitos de seguridad y su combustión es limpia.

          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Fuegos grandes artificiales")
            p.mb-0 <b>Efectos especiales pirotécnicos: </b>
            p.mb-3 se usan en espacios donde la distancia de seguridad es limitada. Estos efectos se pueden aplicar en todo tipo de evento ya que cuenta con altos requisitos de seguridad y su combustión es limpia.
    
    .row.mt-5.justify-content-around.align-items-center
      .col-lg-10  
        .cajon.color_anexo2.p-4
          p.mb-0 Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros. 
     


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
