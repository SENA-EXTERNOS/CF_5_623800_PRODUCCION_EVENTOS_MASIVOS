<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipos de montajes para eventos presenciales, híbridos y digitales

    .row
      .col-lg-7
          p Al preparar un evento presencial, híbrido o digital se deben tener en cuenta las muchas posibilidades que existen para crear su montaje; todo dependerá de la formalidad y el protocolo que se requiera según la temática del evento y aspectos físicos, como las dimensiones del espacio donde se efectúa, número de invitados, cantidad de personas necesarias para logística, plataformas digitales a usar, etc.  El montaje es el proceso que incluye la organización de los planos para que el personal logístico sepa exactamente donde va cada elemento y se gestione de manera eficiente todos los recursos a fin de cumplir los objetivos del evento.
          p.mb-0 No importa la modalidad(virtual, híbrida, presencial); se debe accionar el equipo logístico para crear el mejor montaje que conlleve a la fluidez de la actividad. A continuación observe las características generales necesarias para crear el montaje de un evento:
      .col-lg-5
        figure
        img(src="@/assets/curso/temas/tema1/img1_tema_1.svg", alt="alt").imagen-decorativa-2
        
    .row.table-t1
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-5
          p.mb-0 <b>Figura 1.</b> <em>Características generales para crear el montaje de un evento.</em>
      .col-lg-10
        img(src="@/assets/curso/temas/tema1/img2_tema_1.svg", alt="alt")
        figcaption <p>Referencia Elaboración propia.</p> 

    .row.mt-5
      .col-lg-12
     
        p.mb-0 Los eventos pueden desarrollarse de forma presencial, virtual o como híbridos.    
              
    .row.mt-5
      .col-lg-4              
        img(src="@/assets/curso/temas/tema1/img3_tema_1.svg", alt="alt").imagen-decorativa-3
      .col-lg-8
        p.mb-0 Los eventos presenciales se desarrollan para presentar un producto o servicio, captar y fidelizar clientes o desarrollar alguna actividad lúdica para empleados. En ellos, todos los componentes se encuentran en un mismo espacio físico, existiendo contacto directo entre las personas, la cercanía y el ‘cara a cara’ son dos potentes herramientas de comunicación y conexión. 
          .cajon.color_anexo2.p-4.mt-3
            p.mb-0 Al organizar una actividad y encontrarse en el proceso de búsqueda del lugar, es muy importante definir las necesidades que tendrá según la cantidad de público que espera y las actividades a desarrollar, de esta forma podrá contratar el sitio idóneo. En el siguiente Anexo podrá reconocer los tipos de montaje más usados.

    .tarjeta.color-primario.p-3.mb-5.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/ej-02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Anexo 1
              p.text-small Tipos de montaje para eventos.
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo1_Tipo_de_montajes.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download


    .row.mt-5
      .col.lg-12
        p.mb-0 Es importante considerar que los asistentes necesitan un espacio mínimo para moverse con soltura y comodidad.          
    .row.mt-5
      .col.lg-12
        p.mb-0 <b>¿Se pueden combinar varios tipos de montajes?</b>

    .row.mt-5
      .col.lg-4
        img(src="@/assets/curso/temas/tema1/img4_tema_1.svg", alt="alt")
    .row.mt-5
      .col.lg-12
        p.mb-0 Los siguientes son elementos a tener en cuenta para este propósito, información basada en  el Instituto Nacional de Seguridad y Salud en el Trabajo (INSST), O.A., M.P (2020) 
    
    .row.mt-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Pisos, pistas y pasarelas")
            .row
              .col-lg-4
                  p.mb-0 <b>Pisos, pistas y pasarelas</b>
                  img(src="@/assets/curso/temas/tema1/tarjeta1_tema_1.svg", alt="alt")
              .col-lg-8    
                   p.mb-3 Un buen piso puede transformar el diseño de un stand, escenario e inclusive dar otra cara a eventos en lugares abiertos. Las plataformas nos permiten adecuar los pisos, creando pistas y pasarelas con diferentes áreas y alturas.  La diversidad de estilos y materiales se adaptan según las características necesarias de cada evento.
         
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Stands")
            .row
              .col-lg-4
                  p.mb-0 <b>Stands</b>
                  img(src="@/assets/curso/temas/tema1/tarjeta2_tema_1.png", alt="alt")
              .col-lg-8    
                  p.mb-3 Sin importar su tamaño, debe contribuir con su diseño atractivo a comunicar el mensaje o propósito para lo que fue creado.  
         
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Mobiliario")
            .row
              .col-lg-4
                  p.mb-0 <b>Mobiliario</b>
                  img(src="@/assets/curso/temas/tema1/tarjeta3_tema_1.png", alt="alt")
              .col-lg-8    
                  p.mb-3 Contar con mobiliario, paneles en diversos colores y accesorios versátiles y de calidad ayuda a generar impacto positivo.
         
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Carpas y techos")
            .row
              .col-lg-4
                  p.mb-0 <b>Carpas y techos</b>
                  img(src="@/assets/curso/temas/tema1/tarjeta4_tema_1.png", alt="alt")
              .col-lg-8    
                  p.mb-3 Las carpas nos permiten además de la comodidad y seguridad de los invitados, transformar totalmente los espacios haciéndolos visualmente atractivos.
          
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Tarimas para escenarios")
            .row
              .col-lg-4
                  p.mb-0 <b>Tarimas para escenarios</b>
                  img(src="@/assets/curso/temas/tema1/tarjeta5_tema_1.png", alt="alt")
              .col-lg-8    
                  p.mb-3 Diseñada adecuadamente se convierte en un punto de realce dentro de un evento, genera impacto y facilita la visualización para los invitados. 

    .row.mt-5
      .col.lg-12
        p.mb-0 <b>Montaje de eventos virtuales</b>
    .row.mt-5
      .col.lg-12
        p.mb-0 Los eventos virtuales se desarrollan a través de plataformas online que sirven para generar una conexión virtual entre los asistentes, eliminando las barreras físicas y reduciendo  los gastos en comparación con los eventos presenciales. Al igual que en otro tipo de eventos, en éste los participantes pueden igualmente vivir una experiencia innovadora. 

    .bloque-texto-g.color-secundario2.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img5_tema_1.svg')})`}"
      )
      .bloque-texto-g__texto-t1.p-4
        p.mb-0 <b>Estas son sus ventajas:</b> 
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

    .row.mt-3
      .col-lg-12 
        p.mb-3 Los eventos virtuales se desarrollan a través de plataformas online que sirven para generar una conexión virtual entre los asistentes, eliminando las barreras físicas y reduciendo  los gastos en comparación con los eventos presenciales. Al igual que en otro tipo de eventos, en éste los participantes pueden igualmente vivir una experiencia innovadora. 
        p.mb-0 A continuación, presentamos algunas de las tipologías de eventos que se pueden desarrollar de forma virtual, sin embargo, todos los formatos tradicionales se pueden convertir a este formato con organización y creatividad. 

    .row.mt-5
      .col-lg-12.titulo-img-t1
        h4 8 TIPOS DE EVENTOS VIRTUALES que se pueden desarrollar. 
      .col-lg-12.img-t1
        img(src="@/assets/curso/temas/tema1/img6_tema_1.svg", alt="alt")
    
    .row.mt-5
      .col-lg-12
        p.mb-0 Aunque los eventos virtuales no requieren de estructuras o montajes físicos; si requieren de unos pasos para que su desarrollo sea exitoso. Veamos a continuación que se debe tener en cuenta: 

    LineaTiempoD.color-primario.mt-5
      .row(numero="1" titulo="Paso 1")
        .col-md-12.mb-4.mb-md-0
          p.text-small Identificar la mejor metodología.  La experiencia virtual debe ser interactiva y  llamar la atención del público, por ello es necesario planear el contenido, con preguntas como:
            ul.lista-ul--color.mt-3
              li.fas.fa-check
                | ¿Cuál es el tiempo disponible de los asistentes?
              li.fas.fa-check
                | ¿Les gustan las nuevas tecnologías? 
              li.fas.fa-check
                | ¿Cuáles son los dispositivos tecnológicos a través de los cuales se conecta mi audiencia?
              li.fas.fa-check
                | ¿En qué tema están interesados?
              li.fas.fa-check
                | ¿Requieren interactuar entre ellos o pueden trabajar solos?
          
          p.text-small.mt-3 Esta planeación inicial permitirá determinar la metodología del evento la cual puede ser sincrónica (interacción en tiempo real a través de audio, video, y/o chat) o asincrónica (participación simultánea entre los participantes, quienes acceden a recursos en línea).
          p.text-small.mt-3 De acuerdo al Banco Interamericano de Desarrollo (2020), algunos elementos creativos que se pueden agregar a dichas metodologías son:                 
          
            ul.lista-ul--color.mt-3
                li.fas.fa-check
                  | Videos cortos pregrabados con líderes o personas importantes para la compañía.
                li.fas.fa-check
                  | Encuestas, cuestionarios o votaciones en línea
                li.fas.fa-check
                  | Paneles o foros con expertos mediante live-streaming.
                li.fas.fa-check
                  | Vídeos animados con componentes de storytelling.
                li.fas.fa-check
                  | Aplicaciones móviles.
                li.fas.fa-check
                  | Infografías, gráficos y visualización de datos que apoyen el contenido.
                li.fas.fa-check
                  | Ludificación (gamificación en inglés).
          
      .row(numero="2" titulo="Paso 2")
        .col-md-12.mb-4.mb-md-0
          p.text-small  Identificar la plataforma que mejor se adapte a los objetivos del evento. Descargue el siguiente documento:     
         
          .tarjeta.color-acento-botones.p-3.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema1/icon6_tema_1.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Anexo 2
                    p.text-small Plataformas para conocer las plataformas más usadas. 
                  .col-sm-auto
                    a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
        
      
      .row(numero="3" titulo="Paso 3")
        .col-md-12.mb-4.mb-md-0
          p.text-small Promocionar el evento con herramientas de comunicación digital de acuerdo al tipo de público: si el evento es enfocado al personal interno de una compañía, los canales a usar podrían ser los emails corporativos, periódico de la organización, intranet, grupos de redes sociales, etc.
      .row(numero="3" titulo="Paso 4")
        .col-md-12.mb-4.mb-md-0
          p.text-small Entregar instrucciones e información clara del evento: la plataforma en la que se desarrollará; los links o claves de acceso; el cronograma o agenda; los contactos para dudas o requerimientos y  relacionar las reglas de comportamiento, como momentos en los que se pueden hacer preguntas entre otros aspectos.
      .row(numero="3" titulo="Paso 5")
        .col-md-12.mb-4.mb-md-0
          p.text-small Seguimiento a los participantes  a través de encuestas de percepción del evento, entre otros. Envío de materiales de apoyo como grabaciones de video o audio y cualquier otra información útil, dentro de las 48 horas siguientes a la finalización.

    .row.mt-5
      .col-lg-12
        h3 Montaje de eventos híbridos

    .row.mt-5
      .col-lg-4              
        img(src="@/assets/curso/temas/tema1/img7_tema_1.svg", alt="alt").imagen-decorativa-4
      .col-lg-8
         p.mb-0 Son eventos “mixtos” que involucran la participación de asistentes al evento de manera presencial y una audiencia o público que se conecta de manera digital, mediante una transmisión en vivo “Streaming”. 
         p.mb-3 De forma presencial, normalmente, el número de asistentes es reducido, mientras en lo virtual la participación puede ser mayor ya que  se usan plataformas audiovisuales y tecnológicas a través de las cuales las personas se conectan desde diferentes ciudades de origen.
          .cajon.color_anexo2.p-4
            p.mb-0 <em>Streaming:</em> cualquier contenido de medios, ya sea en vivo o grabado, que se puede disfrutar en computadoras, celulares, tabletas, a través de Internet y en tiempo real. Los podcasts, webcasts, las películas, los programas de TV y los videos musicales son tipos comunes de contenido de streaming.

    .row.mt-5
      .col-lg-9             
        p.mb-0 Es necesario conocer la diferencia entre eventos híbridos y la transmisión en directo de un evento físico. Para que un evento sea considerado ‘híbrido’ se debe crear ‘una experiencia única’ en la que los participantes, independientemente de su asistencia presencial o virtual, se puedan mover libremente a través de las plataformas, involucrarse, participar y disfrutar. 
      .col-lg-3
        img(src="@/assets/curso/temas/tema1/img8_tema_1.svg", alt="alt")

    .row.mt-5
      .col-lg-12
        p.mb-0 Para lo anterior es importante la creación de un contenido de calidad, que sea dinámico, con el que se pueda interactuar en todo momento. Dentro de sus ventajas tenemos:     
      .col-lg-12.mt-5
        img(src="@/assets/curso/temas/tema1/img9_tema_1.png", alt="alt")

    .row.mt-5
      .col-lg-12
        p.mb-0 El beneficio más grande de este tipo de eventos, es que logran la unión entre los encuentros virtuales y los presenciales, aprovechando lo mejor de cada uno.      
   
    .row.mt-5.img_10_t2
      .col.lg-6
        img(src="@/assets/curso/temas/tema1/img10_tema_1.png", alt="alt")

    .row.mt-5
      .col-lg-3
        img(src="@/assets/curso/temas/tema1/img11_tema_1.svg", alt="alt").
      .col-lg-9
         p.mb-5 Sin embargo, la logística se multiplica cuando al organizar un evento de este tipo, pues es necesario contar con los elementos para un encuentro presencial y los gastos que esto implica. También se debe  sumar la infraestructura necesaria de un evento online y las herramientas de ‘realidad virtual’. Para lo anterior es importante la creación de un contenido de calidad, que sea dinámico, con el que se pueda interactuar en todo momento. Dentro de sus ventajas tenemos:     


    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Definir tipo de evento y objetivo")
        .col-md-4
          figure.img_10_t1
            img(src='@/assets/curso/temas/tema1/icon2_tema_1.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es importante contestar preguntas como las siguientes:
          ul.lista-ul--color.mt-3
            li.fas.fa-check
              | ¿El evento consiste únicamente en una charla o hay alguna actividad adicional?
            li.fas.fa-check
              | ¿Qué tipo de contenido se va a transmitir?
            li.fas.fa-check
              | ¿El público debe interactuar de alguna manera?
            li.fas.fa-check
              | ¿El público puede hacer preguntas o dar sus comentarios en vivo?
            li.fas.fa-check
              | ¿Quieres que la audiencia pueda encender sus cámaras y micrófonos?
      
      .row(titulo="Identificar cantidad y características del público presencial y virtual.")  
        .col-md-4
          figure.img_10_t1
            img(src='@/assets/curso/temas/tema1/icon3_tema_1.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Se debe estipular el número estimado de participantes con la intención de definir el tipo de herramienta streaming a usar; ya que en algunas de ellas existe un límite máximo de participantes.
          p.mt-3 Para el espacio físico se debe definir la locación con el fin de identificar el montaje ideal. Es importante comprender el tipo de asistentes para saber su adecuado trato: clientes, invitados VIP, personal de la empresa, etc.

      .row(titulo="Elegir la mejor plataforma")
        .col-md-4
          figure.img_10_t1
            img(src='@/assets/curso/temas/tema1/icon4_tema_1.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Se debe tener en cuenta el público objetivo y la popularidad de la plataforma en el mercado, el fácil acceso de los usuarios, el nivel de uso de los participantes y el valor a pagar en caso de que se cobre por descarga o por registro para el uso. 
      
      .row(titulo="Elegir un escenario acorde al evento y a la imagen que desea proyectar la compañía")
        .col-md-4
          figure.img_10_t1
            img(src='@/assets/curso/temas/tema1/icon5_tema_1.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p.mt-3 Según LinkedIn (2021), dentro de la modalidad de eventos digitales e híbridos hay 3 tipos de escenarios principales : Escenario Virtual. Hace referencia al escenario que los participantes que estarán conectados al evento de manera digital, van a visualizar.
          p.mt-3 Escenario led. Un escenario con pantallas led puede ser un poco más tradicional pues se utiliza de manera frecuente en eventos presenciales. Sin embargo, en una modalidad híbrida este tipo de escenario le permitirá tener mayor consistencia entre la información que visualizará el público presencial y el virtual.
          p.mt-3 Escenario chroma Key. utiliza un fondo comúnmente verde, donde se proyectará un escenario o fondo virtual que previamente deberá definir. Es un escenario muy versátil y puede aportar un ambiente mucho más creativo para el desarrollo del evento. (párr. 29)



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
