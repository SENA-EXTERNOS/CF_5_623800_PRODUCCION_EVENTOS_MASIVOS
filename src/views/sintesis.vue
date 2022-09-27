<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-contenido.mb-3.mt-5
        p.mb-0 <b>Tecnología en producción de eventos masivos</b> 
        p.mb-0 Síntesis: Montajes y normatividad de los eventos
  
    .row
      .col-lg-12.mt-5
        Revisar los contenidos de este componente, le permitirá seguir apropiándose de la información y así contribuir al desarrollo de excelentes eventos. Se le invita a dar una mirada a la siguiente síntesis:

    .row.justify-content-center.mt-5
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")


</template>

<script>
export default {
  name: 'Sintesis',
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
