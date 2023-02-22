<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Riesgos en los eventos

    .row
      .col-lg-12
        .bloque-texto-b.color-primario-t4.p-4
          .bloque-texto-b__texto
            p.mb-3 Ahora, aparte de contar con los documentos necesarios, gran parte del éxito de un evento depende del personal logístico, quienes se encargan de mantener el contacto con el organizador, establecer tiempos y coordinar las actividades relacionadas al recinto, equipos de audio y video, mesas, sillas y otros. El tipo y cantidad de recurso humano está dado por el tipo de evento, sus características y número de participantes. 
            br
            br
            p.mb-5 Según su naturaleza los riesgos se pueden clasificar así:           



    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img1-t1_tema_4.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Médicos
            p.mb-0 Estampidas
            p.mb-0 Riñas
            p.mb-0 Infartos
            p.mb-0 Parto
            p.mb-0 Ahogo
            p.mb-0 Intoxicación

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img1-t2_tema_4.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Protección Civil
            p.mb-0 Incendio
            p.mb-0 Explosión
            p.mb-0 Derrumbe
            p.mb-0 Inundación
            p.mb-0 Tormenta

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img1-t3_tema_4.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Seguridad
            p.mb-0 Disparo de arma
            p.mb-0 Violencia sexual
            p.mb-0 Homicidio
            p.mb-0 Secuestro
            p.mb-0 Asalto
      
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema4/img1-t4_tema_4.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Servicios Públicos
            p.mb-0 Árbol en riesgo de caer
            p.mb-0 Cortocircuito
            p.mb-0 Cables colgando
 

    h3.mt-5 Trabajo en alturas.

    .row.mt-3
      .col-lg-4
        figure
        img(src="@/assets/curso/temas/tema4/img1_tema_4.svg", alt="alt")  
      .col-lg-8
          p.mb-3 El Ministerio de Trabajo Colombiano (2012) en su Resolución 1409 de 2012, menciona que el trabajo en alturas es “toda actividad que realiza un trabajador que ocasione la suspensión y/o desplazamiento, en el que se vea expuesto a un riesgo de caída, mayor 2.0 metros, con relación del plano de los pies del trabajador al plano horizontal inferior más cercano a él” (p. 9). Este tipo de labor es una de las principales causantes de muerte o lesiones graves debido a los múltiples riesgos que conlleva su ejecución, como por ejemplo caídas de tejados, de escaleras y de alguna superficie mal instalada o frágil.
    
    .row.doble-parraf 
      .col-lg-8       
          p.mb-3 Los principales riesgos en alturas que se pueden presentar son: manipulación de escaleras (fijas, de mano, etc.); ingreso a pozos, zanjas, aberturas; daños en plataformas (aberturas, desniveles, hoyos etc.); ascenso de materiales de gran tamaño (tuberías grandes, cadenas etc.); mal uso de máquinas, plataformas y equipos de elevación; trabajar en superficies inestables como algunos tejados, plataformas, etc.; trabajos con bordes desprotegidos (lozas, plataformas, etc.) 
      .col-lg-4        
        figure
        img(src="@/assets/curso/temas/tema4/img2_tema_4.svg", alt="alt")


    .row.mt-5
      .col.lg-12
        .bloque-texto-g.color-secundario2.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img3_tema_4.png')})`}"
          )
          .bloque-texto-g__texto-t1.p-4
            p.mb-0 De manera general, el organizador de eventos que va a contratar a una empresa externa para el trabajo en alturas, debe constatar algunos aspectos como:
            ul.lista-ul--color
              li.mt-3 
                i.fas.fa-check
                | El empleado debe trabajar desde andamios y no desde escaleras, siempre que sea posible.
              li 
                i.fas.fa-check
                | Asegurar que los trabajadores puedan subir y descender en condiciones seguras, al lugar donde realizan sus actividades.
              li 
                i.fas.fa-check
                | Verificar que el equipo de protección sea adecuado para la tarea a realizar.
              li 
                i.fas.fa-check
                | El empleado debe tomar precauciones en caso de caída de objetos.
              li 
                i.fas.fa-check
                | Tener presentes los procedimientos de evacuación y rescate de emergencia.
              li 
                i.fas.fa-check
                | No se debe permitir que una persona no competente realice trabajo en alturas.     

  
    h3.mt-5 Normativa en alturas.
    
    .row.mt-5
      .col-lg-12
          p.mb0 En Colombia la normatividad se actualiza cada año con el fin de mantener el trabajo en alturas en buen estado para prevenir los accidentes.  
     

    .row.justify-content-center.mt-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-lg
              h3 Resolución 4272 de 2021
              p Requisitos mínimos de seguridad para el desarrollo de trabajo en alturas. Fue expedida por el Ministerio de Trabajo.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema4/img4_tema_4.svg', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema4/img5_tema_4.png', alt='').img125
            .col-lg
              h3 Resolución 1248 de 202
              p Medidas transitorias frente a la capacitación y entrenamiento para trabajo seguro en alturas, durante la emergencia sanitaria del COVID 19. Fue expedida por el Ministerio de Trabajo
          .row
            .col-lg
              h3 Circular 035 de 2020
              p Se amplía la vigencia por 1 mes del certificado para trabajo seguro en alturas, a partir de la superación de la emergencia sanitaria por el COVID 19.
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema4/img6_tema_4.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema4/img7_tema_4.png', alt='').img125
            .col-lg
              h3 Resolución 1178 de 2017
              p Establece los requisitos técnicos y de seguridad que deben cumplir los proveedores que prestan servicios de capacitación y entrenamiento en protección contra caídas en trabajo en alturas.
        
          .row
            .col-lg
              h3 Resolución 3368 de 2014
              p Modifica resolución 1409 de 2012 sobre los perfiles que deben cumplir el coordinador y el entrenador de trabajo en alturas. 
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema4/img8_tema_4.png', alt='').img125

          .row
            .col-auto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema4/img9_tema_4.png', alt='').img125
            .col-lg
              h3 Resolución 1409 de 2012
              p Expide el reglamento de seguridad para protección contra caídas en trabajos en alturas.

    h3.mt-5 Implementos de protección y dotación.  

    .row-mt-5.parraf-t4
      .col-lg-12 
        .cajon.color-acento-contenido-t4.p-4
          p.mb-0 De acuerdo al tipo de evento, el personal de logística puede estar expuesto a ciertos peligros que ponen en riesgo su integridad física, sobre todo en aquellos montajes que requieren escenarios complejos, uso de andamios, torres, etc.  

    .row.mt-5
      .col-lg-12
          p.mb-0 Los siguientes son los implementos de protección y dotación para el trabajo en alturas:  

    ImagenInfografica.color-primario.mt-5
        template(v-slot:imagen)
          figure.ptos-hot-t4
            img(src='@/assets/curso/temas/tema4/img10_tema_4.svg', alt='Texto que describa la imagen')
            
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="52%" y="10%" numero="1")
          p.heading_t4  <b>Ojos y cara:</b> gafas de seguridad, careta de seguridad, gafas de soldadura.
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="44%" y="20%" numero="2")
          p.heading_t4 <b>Nariz y boca para proteger el aparato respiratorio:</b> respirador autocontenido, respirador purificante o tapabocas desechable. 
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="56%" y="24%" numero="3")
          p.heading_t4 <b>Oídos:</b> se utilizan cuando los niveles de ruido sobrepasan los 80 decibeles. Los elementos para usar son: premoldeados, moldeados y orejeras.
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="62%" y="59%" numero="4")
          p.heading_t4 <b>Manos:</b> guantes de plástico o aluminio, guantes dieléctricos y de materiales especiales para productos químicos.
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="59%" y="92%" numero="5")
          p.heading_t4 <b>Pies:</b> se usan botas plásticas y zapatos con suela antideslizante; botas con punta de acero o botas elaboradas en cuero que protegen frente a descargas eléctricas y son llamas dieléctrica.  
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="45%" y="35%" numero="6")
          p.heading_t4 <b>Piernas, tórax, caderas:</b> Arnés con una resistencia de hasta 2.500 kg y con puntos de anclaje metálicos forjados y mínimo 4 distribuidos así: Uno (1) posterior, uno (1) ventral (que no debe llegar a la cara del trabajador en caso de caída), y dos (2) laterales para posicionamiento.
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="54%" y="41%" numero="7")
          p.heading_t4 <b>Línea de posicionamiento:</b> le permite al trabajador ubicarse frente a la zona de trabajo y mantener las manos libres, ya que este elemento rodea la estructura y se fija al arnés, proporcionando estabilidad (Sumatec, 2019) 
        .tarjeta.tarjeta.color-acento-botones-t3.p-3(x="50%" y="50%" numero="8")
          p.heading_t4 <b>Salva caídas <em>troll</em> o arrestador:</b> es el elemento deslizante en un solo sentido, con doble traba de seguridad, que le permite asegurarse a la línea de vida que recorre la ruta de ascenso y descenso y que se conecta al arnés. Debe detener la caída del trabajador, mediante bloqueo automático sobre la línea de vida (Sumatec, 2019)   
    
    h3.mt-5 Documentación requerida seguridad social

    .row.mt-5
      .col-lg-4
        figure
        img(src="@/assets/curso/temas/tema4/img11_tema_4.png", alt="alt")  
      .col-lg-8.mb-5.mb-lg-0
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            p.mb-0 La seguridad social, según el Ministerio de Trabajo (s.f.) es un sistema que cubre eventualidades como la de alteración a la salud, incapacidad laboral, desempleo, vejez y muerte, para cuya protección se establecieron los sistemas de salud, pensiones, riesgos laborales y de subsidio familiar. 
            <br>
            <br>
            p.mb-3 Para el caso de la contratación de proveedores y empleados en la organización de eventos, cada empresa contratista deberá garantizar que se cuente con un Sistema de Gestión de Seguridad y Salud en el trabajo exigible por ley o en su defecto que cada empleado, realice sus aportes de manera independiente a dicho sistema y que presente su planilla de seguridad social para poder acceder al pago de sus servicios. 
            <br>
            <br>
            p.mb-3 Cada colaborador debe portar permanentemente su cédula de ciudadanía durante la realización de cualquier actividad dentro del evento.




      

</template>

<script>
export default {
  name: 'Tema4',
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
