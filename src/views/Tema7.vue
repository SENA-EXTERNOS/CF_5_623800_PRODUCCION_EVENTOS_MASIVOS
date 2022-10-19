<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Uso de Drones en los eventos
    
    .row
      .col-lg-5
        figure
        img(src="@/assets/curso/temas/tema7/img1_tema_7.svg", alt="alt") 
          
      .col-lg-7
          p.mb-0 Un dron es un vehículo aéreo no tripulado, es decir, una máquina que vuela sin necesidad de un piloto; su trayectoria de vuelo se realiza con un control remoto o a través de un software que genera un vuelo controlado y sostenido. Su utilidad radica en el acceso que pueden tener a terrenos o espacios a distancias difíciles de lograr por el ser humano; una vez allí, puede obtener tomas de imágenes u otro tipo de datos, gracias a los dispositivos que puede transportar, como cámaras o sensores, sin que se generen riesgos para las personas. Se han convertido en una herramienta adecuada para los espectáculos y la creación de contenido.
    .row.mt-5
      .col-lg-12.order-2.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Clase A")
            p.mb-0 <b>Clase A</b>
            p.mb-3 Usados con fines recreativos, su peso va desde 250 gramos hasta 25 kilogramos. No se exige una autorización para cada vuelo, requiere inscripción ante la Aerocivil. Tienen una velocidad de 50 millas por hora y pueden ser manejados hasta 500 metros.
            p.mb-3 La operación no puede efectuarse sobre público o una reunión de personas al aire libre. El vuelo deberá realizarse solamente en horas diurnas; o nocturnas siempre y cuando se realicen en zonas libres de obstáculos y de personas. (Acosta Argote, 2021)
          
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Clase B")
            p.mb-0 <b>Clase B</b>
            p.mb-3 Tienen un peso de hasta 150 kilogramos y se usan en actividades comerciales o profesionales. Son aeronaves con alcances mayores de hasta 100 millas por hora, y una operación de máximo 750 metros con referencia a la persona que lo maneja. Dentro de sus prohibiciones están: no transportar animales u arrojar objetos, salvo cuando se trata de aspersión agrícola o trabajos relacionados al campo; prohibido sobrevolar personas; no superar una distancia mínima de dos kilómetros de los aeropuertos; no sobrevolar edificios públicos ni bases militares. Se deben registrar dos personas en la Aerocivil: el que maneje y el que esté pendiente observando; también se pide adquirir seguros por accidentes que pueden involucrar a terceros.
         
          .tarjeta.clr--gris.opciones-t8.p-4(titulo="Clase C")
            p.mb-0 <b>Clase C</b>
            p.mb-3 Sirven para operaciones de transporte de mercancías ‘o personas y/o experimentales’. Su peso puede ser mayor a 150 kilogramos.(Acosta Argote, 2021)
    
    .row.mt-5
      .col.lg-12
        .bloque-texto-g.color-secundario2.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img2_tema_7.png')})`}"
          )
          .bloque-texto-g__texto-t1.p-4
            p.mb-3 <b>Normatividad Reglamento Aeronáutico Colombiano</b> 
            p.mb-3 En Colombia se permite el vuelo de drones siempre y cuando se cumpla con el reglamento de La aeronáutica civil y la Resolución No. 04201 del 27 de Diciembre de 2018, que tiene como propósito, brindar las orientaciones para la operación y aeronavegabilidad de UAS (sistemas aéreos no tripulados, que a su vez engloban la aeronave, la estación en tierra y el enlace de comunicaciones) y para la inscripción de explotadores, operadores y equipos. La utilización de drones particularmente en espacios interiores completamente cerrados podrá llevarse a cabo de acuerdo con la información facilitada por el fabricante y el titular del recinto.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
