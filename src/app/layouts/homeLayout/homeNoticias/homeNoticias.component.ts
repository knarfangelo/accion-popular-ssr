import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-noticias',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <header>
    <h1 class="titulo">Últimas Noticias de Acción Popular</h1>
    <main>
      <swiper-container init=false class="swiper-noticias">
        <swiper-slide>
          <a class="container-noticias" href="https://rpp.pe/politica/congreso/eduardo-salhuana-encabezara-lista-para-la-mesa-directiva-del-congreso-noticia-1571893?ref=rpp" target="_blank">
            <img src="noticias/eduardo-salguana-mesa-directiva-congreso.webp" alt="Elvir Vergara exponiendo una propuesta">
            <p class="fecha">25/07/24</p>
            <h1>Eduardo Salhuana encabezará lista para la Mesa Directiva del Congreso</h1>
            <p class="contenido">El legislador, Elvis Vergara, confirmó que el integrante de Alianza Para el Progreso (APP) será el candidato de una lista multipartidaria que busca presidir el Congreso de la República.</p>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="container-noticias" href="https://rpp.pe/politica/elecciones/accion-popular-realizara-elecciones-para-elegir-a-su-nuevo-presidente-despues-de-6-anos-noticia-1562594?ref=rpp+" target="_blank">
            <img src="noticias/ap-elecciones-elegir-nuevo-presidente-6.webp" alt="julio chávez chiong hablando con un locutor">
            <p class="fecha">18/06/2024</p>
            <h1>Acción Popular realizará elecciones para elegir a su nuevo presidente después de 6 años
            </h1>
            <p class="contenido">Julio Chávez Chiong, candidato a la presidencia de Acción Popular, indicó en Ampliación de Noticias que en los últimos cinco años el partido de la lampa no ha tenido una buena representación con su bancada en el Congreso. Considera que de cara a las Elecciones del 2026 su partido debe ir sin alianzas.
            </p>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="container-noticias" href="https://rpp.pe/politica/elecciones/elecciones-2026-presidente-de-accion-popular-sostiene-que-su-agrupacion-no-debe-formar-alianzas-con-partidos-politicos-noticia-1565085?ref=rpp" target="_blank">
            <img src="noticias/presidente-ap-no-alianzas-partidos-politicos-2026.webp" alt="presidente de acción popular dando una conferencia">
            <p class="fecha">27/06/24</p>
            <h1>Presidente de Acción Popular considera que su agrupación no debe formar alianzas con partidos políticos para las Elecciones 2026
            </h1>
            <p class="contenido">El presidente del partido Acción Popular (AP), Julio Chávez, señaló que la postura de la agrupación política debe estar orientada a generar "entendimientos con movimientos o fuerzas" que están en regiones. En entrevista con el programa Nunca es Tarde, no descartó ser candidato del partido en las Elecciones 2026.
            </p>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a class="container-noticias" href="https://www.elperuano.pe/noticia/250443-jefa-del-estado-coordino-trabajo-con-accion-popular-en-favor-de-la-poblacion" target="_blank">
            <img src="noticias/jefe-del-estado-coordino-trabajo-ap-poblacion.jpg" alt="la presidenta del Perú junto con la bancada de acción popular">
            <p class="fecha">30/07/2024</p>
            <h1>Jefa del Estado coordinó trabajo con Acción Popular en favor de la población
            </h1>
            <p class="contenido">Reunión se dio en Palacio de Gobierno con líderes del partido.
            </p>
          </a>
        </swiper-slide>
      </swiper-container>
    </main>
  </header>
  

  `,
  styleUrl: './homeNoticias.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNoticiasComponent {

  
  swiperElements = signal<SwiperContainer | null>(null);


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const swiperElemConstructor = document.querySelector('.swiper-noticias');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        slidesPerView: 'auto',
        spaceBetween:34,
        breakpoints: {
          900: {
            slidesPerView:3
          },
          1200: {
            slidesPerView:4
          }
        },
        speed: 3000,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();  
    }
  }

}
