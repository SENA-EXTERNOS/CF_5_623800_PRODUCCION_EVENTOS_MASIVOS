<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normas de seguridad y trabajo en eventos

    .row.img_10_t2
      .co-lg-12
        figure
        img(src="@/assets/curso/temas/tema3/img1_tema_3.svg", alt="alt")
    .row.mt-5
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Documentación legal

    .row.mt-5
      .col-lg-2
        img( width="50" height="100"  src="@/assets/curso/temas/tema3/icon1_tema_3.svg", alt="alt")

      .col-lg-10.parraf-t2  
        p.mb-3 Cada alcaldía municipal de Colombia cuenta con reglas para el desarrollo de espectáculos o eventos masivos al aire libre; igualmente, cada recinto cerrado tiene sus propias condiciones para los organizadores de eventos, por tanto, cuando se esté planeando el proceso, se deben revisar las condiciones pertinentes. 

    .row.mt-3
      .col-lg-12
        p De manera general, se pueden mencionar algunas como:  
    
    .row.mt-5.justify-content-center
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor  
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt1_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt1_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.text-small  Contrato del sitio del evento 

      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt2_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt2_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.text-small  Carta emitida por la empresa que genera la boletería, indicando el nombre de cada localidad, su aforo y el valor.

      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt3_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt3_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.text-small  Documentos de identificación del solicitante Certificado de existencia y representación legal y cédula de 
              p.text-small  ciudadanía del representante legal para personas jurídicas.
              p.text-small  Cédula de ciudadanía o de extranjería para personas naturales. 
              p.text-small  Registro de Información Tributaria - RIT



      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt4_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt4_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.mb-0.text-small Contar con un Plan de Gestión del Riesgo o plan de contingencia para la prevención y mitigación de riesgos, 
              p.mb-o.text-small que responda a las características particulares del escenario. 
              p.mb-0.text-small Este plan también debe incluir las medidas sanitarias requeridas según el espacio del evento (Decreto 1276 del 2020).
    
    .row.mt-5.justify-content-center
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor  
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt6_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt6_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.mt-2 Mapa del sitio con vías de evacuación.

      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt7_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt7_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.mt-2 Cumplir con las normas referentes a la intensidad auditiva, horario y ubicación, señalados por la entidad competente del respectivo municipio.
      
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt8_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt8_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.mt-2 Tener las constancias o comprobantes de pago de los derechos de autor y conexos, cuando en el espectáculo público se ejecuten obras causantes de dichos pagos.

      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt9_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt9_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.mt-2 Carta de autorización de bomberos
              
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt10_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt10_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.mt-2  Certificado en el que se garantiza la atención prehospitalaria por una IPS autorizada.
              p.mt-2  Póliza de responsabilidad civil extracontractual conforme a los requisitos establecidos en el Artículo 26 de la Resolución 569 de 2014 (Secretaría Distrital de Gobierno, 2014)
      .col-8.col-lg-3.mt-3
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema3/imgt5_tema_3.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              figure
                img(src='@/assets/curso/temas/tema3/imgt5_tema_3.svg', alt='Texto que describa la imagen').img.tarjeta-tema-1
              p.mt-2  Si el evento incluye manipulación de alimentos, se requiere listado del personal que preparará los mismos con su respectivo certificado del curso de manipulación de alimentos, examen clínico de uñas, frotis de garganta, coprológico.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Personal logístico

    .row
      .col-lg-9
        p.mb-0 Ahora, aparte de contar con los documentos necesarios, gran parte del éxito de un evento depende del personal logístico, quienes se encargan de mantener el contacto con el organizador, establecer tiempos y coordinar las actividades relacionadas al recinto,  equipos de audio y video, mesas, sillas y otros. El tipo y cantidad de recurso humano está dado por el tipo de evento, sus características y número de participantes. 
        p.mt-3 Este personal debe estar presente en cada etapa del evento con la intención de asegurar su éxito teniendo en cuenta lo planeado; la idea es que cada etapa esté cubierta por el staff en un mínimo de 2 personas según la cantidad de asistentes, y cubriendo entre otras las siguientes áreas: 
      .col-lg-3  
        figure
        img(width="70" height="230" src="@/assets/curso/temas/tema3/img2_tema_3.svg", alt="alt")

    ImagenInfografica.color-primario.mt-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema3/img3_tema_3.svg', alt='Texto que describa la imagen')
            
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="17%" y="29%" numero="1")
          p.heading_t4  Personal de registro, acreditación, información y orientación.
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="33%" y="29%" numero="2")
          p.heading_t4  Personal de alimentos y bebidas según corresponda.
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="42%" y="30%" numero="3")
          p.heading_t4  Personal de apoyo en montaje y desmontaje.
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="56%" y="46%" numero="4")
          p.heading_t4  Personal de protocolo, presentadores, personal bilingüe.
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="96%" y="58%" numero="5")
          p.heading_t4  Aseo y Limpieza.
  

      

</template>

<script>
export default {
  name: 'Tema3',
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
