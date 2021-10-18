<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 La educación STEM y el desarrollo de la economía circular
 
    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t3/f1.svg' alt='STEM')
      .col-lg-8
        p La educación STEM es relativamente nueva a nivel mundial. Sin embargo, si echamos una mirada a los países con mejor desempeño en los resultados de las pruebas PISA (China, Taiwán, Japón, Singapur, Corea del Sur, Canadá, Alemania, Finlandia, Francia, Reino Unido, Brasil, Australia) podemos ver cómo sus propuestas educativas nacionales, tienen una relación con los cambios constantes de los mercados y los avances de manera vertiginosa de la ciencia y la tecnología presentan retos comunes para todos los países, es aquí donde la Educación STEM, presenta sus bondades:

        #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
          .carousel-inner
            .carousel-item.active
              .row.align-items-center.justify-content-center
                .col-lg-2
                  figure
                    img(src='@/assets/curso/t3/f2.svg' alt='imagen relacionada')
                .col-lg-10
                  p ●	A nivel mundial se considera a la ciencia y la tecnología como pilares de una economía sostenible y próspera.
            .carousel-item
              .row.align-items-center.justify-content-center
                .col-lg-2
                  figure
                    img(src='@/assets/curso/t3/f3.svg' alt='imagen relacionada')
                .col-lg-10
                  p ●	La educación STEM con énfasis en la integración de las áreas, brinda una vía sólida para potencializar a los futuros ciudadanos hacia un desarrollo sostenible y próspero a todos los países.
            .carousel-item
              .row.align-items-center.justify-content-center
                .col-lg-2
                  figure
                    img(src='@/assets/curso/t3/f4.svg' alt='imagen relacionada')
                .col-lg-10
                  p ●	Se presenta una tendencia a la disminución del número de profesionales en las áreas de ciencias, tecnología e ingeniería.
            .carousel-item
              .row.align-items-center.justify-content-center
                .col-lg-2
                  figure
                    img(src='@/assets/curso/t3/f5.svg' alt='imagen relacionada')
                .col-lg-10
                  p ●	Es fundamental aumentar la participación de la mujer en las áreas de desarrollo de los países, ya que su participación en los puestos de trabajo de liderazgo en Ciencia y Tecnología es muy baja.
            .carousel-item
              .row.align-items-center.justify-content-center
                .col-lg-2
                  figure
                    img(src='@/assets/curso/t3/f6.svg' alt='imagen relacionada')
                .col-lg-10
                  p ●	La educación STEM debe atraer mayor interés por parte de los aprendices, pero en especial de las niñas a quienes se les debe impulsar su liderazgo en ciencia y tecnología.
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next

    .contenedor.traslapeTop.traslapeBottom.bg3
      h3.cs La economía Circular
      p.mb-5 El nuevo modelo económico denominado economía circular, es un nuevo modelo de producción y consumo que garantiza un crecimiento sostenible en el tiempo, que promueve la optimización de los recursos, la reducción en el consumo de materias primas y el aprovechamiento de los residuos, reciclándolos o dándoles una nueva vida para convertirlos en nuevos productos.

      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 
      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src='@/assets/curso/t3/f7.png' alt='imagen relacionada')
        .col-lg-8
          .cajon.color-acento-contenido.p-4.mb-4
            p.mb-0 El objetivo principal de la economía circular es aprovechar al máximo los recursos materiales, disponemos alargando el ciclo de vida de los productos. La idea surge de imitar a la naturaleza, donde todo tiene valor y todo se aprovecha, donde los residuos se convierten en un nuevo recurso. Así, se logra mantener el equilibrio entre el progreso y la sostenibilidad.
          p En Colombia, en el año 2018, se realizó el lanzamiento de la Estrategia Nacional de Economía Circular, para avanzar en la transformación de las cadenas de producción y consumo, a través del cierre de ciclos de materiales, agua y energía, en nuevos modelos de negocio, con esta iniciativa se promueve la innovación y la generación de valor en sistemas de producción y consumo a través de optimizar, compartir, intercambiar y reciclar y regenerar materiales, agua y energía.

      .row.align-items-center.justify-content-center.mb-4
        .col-lg-5.fcs.border134
          .p-5.text-center.texto-blanco
            i.fas.fa-quote-left.cab
            p Este Pacto que acompaña la Estrategia Nacional de Economía Circular se enmarca en el Plan de Desarrollo, Pacto por Colombia. Pacto Por la Equidad, en el capítulo de sostenibilidad, donde se definió el objetivo de fomentar la reducción, el reciclaje y la reutilización de los residuos y materiales. 
            h6.text-right (Ministerio Ambiente, 2018)
        .col-lg-5.p-5
          figure
            img(src='@/assets/curso/t3/f8.svg' alt='imagen relacionada')

      .col-lg-10.mx-auto.mb-5
        p.mb-0 Podemos observar, cómo las iniciativas de transformación de las economías se convierten cada vez en pilares esenciales para los procesos de educación y sostenibilidad planetaria.

      .tarjeta.bgdegradado.p-4.p-md-5.mb-5
        .row.justify-content-around.align-items-center
          .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
            img(src="@/assets/curso/t3/f9.svg" alt='Descarga')
          .col-md.col-lg-6
            .titulo-segundo
              h3 El conocimiento colectivo y la cooperación
            p.mb-4 El avance de las nuevas tecnologías y el desarrollo de un mundo globalizado, genera conocimiento científico y los procesos de innovación son cada vez más importantes, como factores de competitividad para el progreso de la sociedad.
            a.boton.color-acento-botones(:href="obtenerLink('/downloads/conocimiento_colectivo_la_cooperación.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
    
    .row.align-items-center.mb-5
      .col-lg-7
        h3.cs El trabajo colaborativo y la inteligencia emocional
        .cajon-b.color-secundario.p-4
          p.mb-0 Teniendo en cuenta los grandes cambios sociales que se están dando para la sociedad en las formas de generar, gestionar y crear conocimiento que han permitido el desarrollo de nuevas economías emergentes, se observa la necesidad en estos nuevos escenarios el trabajo colaborativo como lo define Antúnez (1999) quien manifiesta que la colaboración y el trabajo grupal, enfatiza en la conjunción de acciones para el logro de objetivos comunes. 
        .px-4
          p.mb-0 La acción de trabajar juntamente con otro u otros con el propósito de alcanzar un mismo fin (tareas o trabajos solicitados) La destreza de colaborar puede desarrollarse entre grupos: instructores, aprendices, investigadores; entre otros que colaboran, compartiendo recursos, para alcanzar unos propósitos específicos durante un período de tiempo determinado.
        .cajon-c.color-primario.p-4
          p.mb-0 En estas interacciones se conforman redes de conocimiento, donde las emociones tiene un papel determinante ya que éstas juegan un papel protagónico en las relaciones interpersonales. identificarlas, nombrarlas más profundo y dar respuestas favorables según los contextos. El trabajo colaborativo precisa desarrollar la inteligencia emocional y favorecer aquellas emociones que faciliten la búsqueda colectiva de la satisfacción de las necesidades de todos.
      .col-lg-5
        figure
          img(src='@/assets/curso/t3/f10.png' alt='imagen relacionada')
    
    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t3/f11.png' alt='imagen relacionada')
      .col-lg-7
        h3.cs Las habilidades duras y blandas de los ciudadanos del siglo XXI
        p Los aprendices del siglo XXI deben formarse en habilidades para vivir en una sociedad cada vez más alfabetizada en el uso de las tecnologías y sobresalir en un mercado laboral cada vez más competitivo, en la actualidad la demanda de instructores y aprendices que desarrollen una serie de habilidades y competencias es necesaria para lograr la transformación efectiva de la sociedad a desarrollos económicos sostenibles y amigables con el planeta. Estas nuevas habilidades requieren que las formas en que se ha venido entendiendo la educación, cambien incorporando acciones mediadas por los principios y valores, pero también con los nuevos sistemas de comunicación e información que permita a la adaptación basada en las nuevas condiciones que manifiesta la sociedad.

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/t3/f12.svg' alt='imagen relacionada')
      .col-lg-3.mx-0
        figure
          img(src='@/assets/curso/t3/f13.svg' alt='imagen relacionada')
      .col-lg-3
        figure
          img(src='@/assets/curso/t3/f14.svg' alt='imagen relacionada')

    .col-lg-10.mx-auto.mb-5
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/t3/f15.png' alt='imagen relacionada')
          .col-lg-7
            .bloque-texto-a__texto.p-4
              p.mb-0 El desarrollo de estas habilidades es cada vez más importante para ayudar a los ciudadanos a navegar por ecosistemas complejos en diferentes etapas de sus vidas. Los sistemas de aprendizaje en el desarrollo de la vida requieren de personas que deben tomar muchas decisiones en diferentes momentos sobre las diferentes formas de aprendizaje y capacitación formal y no informal necesarias para tener vigencia en el mercado laboral, conseguir un ascenso o cambiar a un nuevo empleo. La oferta de aprendizaje es muy amplia y estas decisiones tendrán gran impacto en la capacidad de los aprendices para superar todos estos cambios.

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

<style lang="sass" scoped></style>
