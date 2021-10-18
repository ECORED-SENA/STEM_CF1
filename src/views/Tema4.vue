<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 
      h1 

    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t4/f1.svg' alt='maleta escolar con libros')
      .col-lg-8
        p 
        .cajon-color-acento-contenido.p-4
          p.mb-0 

    .row.align-items-center.mb-5
      .col-lg-7
        p 
        .row.align-items-center
          .col.col-md-3
            figure
              





































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

<style lang="sass" scoped></style>
