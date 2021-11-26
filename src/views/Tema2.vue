<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 La gestión del conocimiento y la cuarta revolución industrial

    .mb-5
      img(src='@/assets/curso/t2/f1.jpg' alt='Cuaderno y lápices').float-left
      .border24.fblanco.boxShadow.p-4.mt_1_5rem.floatRight
        p.mb-0 Comenzando por ciertas definiciones claves, abordaremos la información relevante y avance histórico para una mayor comprensión.
    .mb-5.clear

    #t_2_1.titulo-segundo
      h2 2.1 Definición

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.fcs.border134.p-5.order-lg-first.order-last
        p.text-center <i class="fas fa-quote-left cac text-big"></i>
        p.texto-blanco.text-center Históricamente el conocimiento es el pilar y desarrollo de la humanidad, necesario para la búsqueda del bienestar social del ser humano y, además, para la reducción de la pobreza y la falta de equidad social, en la actualidad es considerado un detonador del desarrollo económico de los países en el mundo, quienes trascienden en nuevos y mayores indicadores de competitividad, particularmente para las industrias la productividad se configura como un conocimiento unido al desarrollo del componente tecnológico, donde se vienen constituyendo elementos claves que potencializan y dinamizan las economías a nivel mundial. 
        div.floatRight
          h6 <span class='text-white'>Según Powell & Snellman (2004).</span> <i class="fas fa-square cac ms-4" style='font-size: 2rem; vertical-align:middle;'></i>
      .col-lg-5.bg2.order-lg-last.order-first
        .p-4
          figure
            img(src='@/assets/curso/t2/f2.svg' alt='imagen relacionada')
    .col-lg-10.mx-auto
      p.mb-5 Según B. Lundvall & Johnson (1994): en el conocimiento se distinguen cuatro tipos de saber: 

      #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
        .carousel-inner
          .carousel-item.active
            .row.justify-content-center
              .col-lg-1.col-md-2
              .col-lg-10.col-md-8.col-auto
                .row.align-items-center.justify-content-center
                  .col-lg-4.col-md-3
                    figure
                      img(src='@/assets/curso/t2/f3.svg' alt='imagen relacionada')
                  .col-8.col-sm-8.col-md-7
                    h4 Saber qué <em>(Know What)</em>
                    p Es el conocimiento basado en los “hechos”, donde el conocimiento está cerca de lo que normalmente se llama información.
              .col-lg-1.col-md-2
          .carousel-item
            .row.justify-content-center.align-items-center
              .col-lg-1.col-md-2
              .col-lg-10.col-md-8.col-auto
                .row.align-items-center.justify-content-center
                  .col-lg-4.col-md-3
                    figure
                      img(src='@/assets/curso/t2/f4.svg' alt='imagen relacionada')
                  .col-8.col-sm-8.col-md-7
                    h4 Saber por qué <em>(Know Why)</em>
                    p Se refiere al conocimiento basado en los principios y las leyes del movimiento en la naturaleza, en la mente humana y en el desarrollo de la sociedad y el medio ambiente. Este tipo de conocimiento ha sido sumamente importante para el avance y desarrollo tecnológico de la humanidad.
              .col-lg-1.col-md-2
          .carousel-item
            .row.justify-content-center.align-items-center
              .col-lg-1.col-md-2
              .col-lg-10.col-md-8.col-auto
                .row.align-items-center.justify-content-center
                  .col-lg-4.col-md-3
                    figure
                      img(src='@/assets/curso/t2/f5.svg' alt='imagen relacionada')
                  .col-8.col-sm-8.col-md-7
                    h4 Saber cómo <em>(Know How)</em>
                    p Es el saber hacer este conocimiento ha estado siempre relacionado con las habilidades y destrezas de los seres humanos, conocidas como técnicas primordiales o artesanales. Puede estar relacionado con las habilidades de los trabajadores de las áreas de producción, artes y oficios, este conocimiento es considerado clave para el desarrollo de todas las economías en el mundo.
              .col-lg-1.col-md-2
          .carousel-item
            .row.justify-content-center.align-items-center
              .col-lg-1.col-md-2
              .col-lg-10.col-md-8.col-auto
                .row.align-items-center.justify-content-center
                  .col-lg-4.col-md-3
                    figure
                      img(src='@/assets/curso/t2/f6.svg' alt='imagen relacionada')
                  .col-8.col-sm-8.col-md-7
                    h4 Saber quién <em>(Know Who)</em>
                    p Se refiere a la mezcla de diferentes clases de habilidades, incluidas las llamadas habilidades sociales, que permiten tener acceso al experto y usar su conocimiento eficientemente. 
              .col-lg-1.col-md-2
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true').align-items-center
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next

    Separador
    #t_2_2.titulo-segundo
      h2 2.2 El desarrollo tecnológico y la gestión del conocimiento

    .row.align-items-center.mb-5
      .col-lg-7
        .cajon-b.color-secundario.p-4
          p.mb-0 De acuerdo con Cantú-Martínez, “La economía del conocimiento es el análisis del comportamiento y los hechos relacionados con la aplicación económica del saber”. Esto ha llevado a la transformación de las sociedades cuando el conocimiento se convierte en aprendizaje y este se encuentra orientado a resolver los problemas sociales y ambientales. 
        .px-4
          p Es así como diversos organismos en el mundo se han determinado, en fortalecer la importancia de alinear las políticas de la Ciencia, la Tecnología, el Desarrollo y el Medio Ambiente como factores determinantes para la gestión del conocimiento y la economía: 
      .col-lg-5
        figure
          img(src='@/assets/curso/t2/f7.png' alt='OCDE')

    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/t2/f8.svg' alt='imagen relacionada')
      .col-lg-8
        .bloque-texto-b.color-primario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left.cac
            p.mb-0 En el año 1996 la Organización para la Cooperación Económica y Desarrollo - OCDE esgrimió la conveniencia de alinear las políticas de ciencia, tecnología e industria hacia la búsqueda del máximo bienestar social y el rendimiento productivo; a esto lo denominó “economías basadas en conocimiento” (Cantú-Martínez, 2017) 
            i.fas.fa-quote-right.cac
        p De acuerdo con Sánchez & Ríos: <span class="fagm2">“Una economía del conocimiento es aquella en la que el conocimiento es un activo más importante que los bienes de capital y mano de obra, y donde la cantidad y sofisticación del conocimiento que permea en las actividades económicas y sociales llega a niveles muy altos”</span>.

    p.mb-5 En la historia de la humanidad se han identificado tres revoluciones económicas que han sido importantes en el desarrollo social y cultural, permitiendo avances que mejoran la calidad de vida y generan impactos sociales positivos y de transformación, de acuerdo con Oliván (2016):

    .row.justify-content-center
      .col-lg-4.ms-auto.me-0(style='background-color:#BED0ED')
        .p-4
          img(src='@/assets/curso/t2/f9.svg' alt='icono relacionado').w73px.mb-4
          h4 
          p A finales del siglo XVIII y principios del XIX, la Primera Revolución Industrial transformó el mundo como ningún otro fenómeno histórico lo había hecho desde el periodo Neolítico. Se pasó de una economía rural basada en la agricultura y el comercio, a una economía urbana, industrial y mecanizada, que cabalgaba sobre la máquina de vapor.
      .col-lg-4.mx-0(style='background-color:#CEDBEF')
        .p-4
          img(src='@/assets/curso/t2/f10.svg' alt='icono relacionado').w73px.mb-4
          h4 
          p En la segunda, la electricidad y los combustibles fósiles darían energía a miles de fábricas que crecieron en tecnificación y tamaño, precipitando una división del trabajo sin precedentes. 
      .col-lg-4.me-auto.ms-0(style='background-color:#BED0ED')
        .p-4
          img(src='@/assets/curso/t2/f11.svg' alt='icono relacionado').w73px.mb-4
          h4 
          p En la tercera, la industria se informatizó y se automatizó a una velocidad exponencial desde la década de los setenta hasta nuestros días, en la que millones de ciudadanos viven conectados a través de su teléfono inteligente. 

    .bloque-texto-b.color-primario.p-4.mb-4
      .bloque-texto-b__texto
        i.fas.fa-quote-left.cac
        p.mb-0 Podemos observar cómo el conocimiento y el desarrollo de la economía mundial, son un insumo único para la sociedad, el cual se constituye en un tópico de sumo interés, especialmente para los países industrializados, que observan en ello un factor determinante para diversificar y generar nuevas y mejoradas propuestas de valor a sus productos y servicios, como viene sucediendo, desde la segunda revolución industrial, donde la vinculación entre el conocimiento científico y las tecnologías productivas es evidente (Villaseca et al., 2002)
        i.fas.fa-quote-right.cac

    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Historia e impacto social

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/t2/f12.png' alt='imagen relacionada')
      .col-lg-7
        p.mb-5 A diferencia de las tres revoluciones anteriores, la cuarta no se define por la emergencia de una tecnología disruptiva específica, sino por la convergencia de varias tecnologías digitales, físicas y biológicas, como la inteligencia artificial, la realidad aumentada, la robótica, la impresión 3D, el <em>cloud computing</em>, el <em>big data</em>, el internet de las cosas o la nanotecnología.
        LineaTiempoD.color-secundario.mb-5
          div(numero="1" titulo="Revoluciones Industriales")
           p En el transcurso de la historia las revoluciones industriales han generado impactos sociales que quedaron grabados en la historia, cada impacto genera sus aspectos positivos y negativos, y que tarde o temprano se termina dando en una transformación que afecta a todos los actores en los ámbitos educativos y económicos. El desafío es inminente y el ser humano ya lo ha experimentado, hay que prepararse para el cambio, de lo contrario estos aspectos negativos afectarán el entorno social como por ejemplo el desempleo. En cuanto a su aspecto positivo las nuevas tecnologías generan nuevas oportunidades laborales, empleos nuevos, el individuo desarrollará nuevas habilidades y competencias que le permitan afrontar estos trabajos calificados.
          div(numero="2" titulo="Transiciones")
            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left.cp
                p.mb-0 Así que la transición será dura y dolorosa. El escenario que se nos presenta es desempleo, precariedad y dualización. Desempleo y precariedad para quien no se recicle y adapte lo suficientemente rápido. Y dualización, porque el mundo se dividirá entre quienes sepan domar a las máquinas y quienes realicen trabajos tan poco cualificados que no salga rentable sustituirlos por dichas máquinas. (Oliván, 2016)
                i.fas.fa-quote-right.cp
          div(numero="3" titulo="Disrupción")
            .bloque-texto-b.color-secundario.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left.cp
                p.mb-0 Es así como se prevé una disrupción en el mercado laboral; en el informe titulado “The Future Of Jobs”, producto del Foro Económico Mundial, en su edición número 46, se indica que antes del año 2020, se perderán más de 5,1 millones de puestos de trabajo para siempre, primordialmente los relacionados con labores rutinarias, los trabajos de oficina y la mayoría de los roles administrativos. Así mismo, el informe indica que la manufactura y los procesos industriales serán replanteados, obligando a la mano de obra a adaptarse a estos abruptos cambios. (World Economic Forum, 2016, citado por Pérez, 2016).
                i.fas.fa-quote-right.cp
          div(numero="4" titulo="Adaptación")
           p La adaptación se tendrá que hacer rápido para poder ceñirse a la transformación, como se observa la Educación juega un papel importante en este ciclo, se tendrá que ajustar nuestra educación, generar un cambio en los currículos de formación, adaptarlos a la realidad del mercado y anticiparse a la demanda de la formación. 
           p El SENA está comprometido en este nuevo desafío, “para cumplir su misión, el SENA, a través del Servicio Público de Empleo, investiga permanentemente las tendencias del mercado laboral colombiano y renueva su oferta de formación (programas técnicos, tecnológicos y cursos complementarios), tomando en consideración las necesidades del sector productivo, impulsando así la productividad y la competitividad (SENA, 2016).
    
    .col-lg-10.mx-auto.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/t2/f13.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Un ejemplo se presenta en la imagen, se observa el <b>Agrobot Eco</b> un robot tipo carro que asiste a los caficultores en el proceso de secado de café, creado por aprendices SENA del Tecnólogo en Diseño e Integración de Automatismos Mecatrónicos, gestores del Tecnoparque nodo Neiva y aprendices de la Universidad Antonio Nariño.
        
</template>

<script>
export default {
  name: 'Tema2',
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
