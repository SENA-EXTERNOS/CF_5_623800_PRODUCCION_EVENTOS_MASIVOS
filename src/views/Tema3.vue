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
        h3 OJO FALTAN TARJETAS PREGUNTAR DONDE ESTAN EN EL CATALOGO DE COMPONENTES

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
