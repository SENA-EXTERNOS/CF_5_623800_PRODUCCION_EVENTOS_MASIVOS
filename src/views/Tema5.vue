<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Restricciones y Normatividad

    .row
      .col-lg-8
          p  La Resolución 0627 de 2006 es la norma nacional de emisión de ruido para todo el territorio nacional, emitida por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2006). Allí se dan diferentes disposiciones con respecto a los niveles de ruido aceptado según el espacio donde se vaya a realizar el evento. Estos niveles son dados en decibeles y se pueden consultar en el siguiente documento anexo 3: Tabla restricciones de ruido. 
      .col-lg-4
        figure
        img(src="@/assets/curso/temas/tema5/img1_tema_5.svg", alt="alt").imagen-decorativa-6  

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/componentes/ej-02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Tabla restricciones de ruido. 
                .col-sm-auto
                  a.boton.color-acento-contenido.text-white(:href="obtenerLink('/downloads/Anexo 3_tabla_restricciones_de_ruido.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  

    .row.mt-5
      .col-lg-12
          p.mb-5 <b>Normativa emitida por el Ministerio de Ambiente, Vivienda y Desarrollo Territorial</b>    


    .row.mt-3
      .col-lg-4
        figure
        img(src="@/assets/curso/temas/tema5/img2_tema_5.svg", alt="alt").imagen-decorativa-7  
      .col-lg-8
          p.mb-3 El Ministerio del Medio Ambiente, constantemente monitorea los niveles de ruido generados por los eventos masivos o de alta convocatoria, en específico, aquellos que requieren de sistemas de amplificación y se realizan en espacios abiertos o semiabiertos. En el 2006, el Ministerio del Medio Ambiente lanzó la Resolución 0627, con el fin de orientar a los organizadores de eventos para minimizar o mitigar el impacto de sus espectáculos.
  
    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/componentes/ej-02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para complementar este tema por favor descargar y leer el anexo 4: Resolución 627 de 2006.
                .col-sm-auto
                  a.boton.color-acento-contenido.text-white(:href="obtenerLink('/downloads/Resolucion-627-de-2006.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
