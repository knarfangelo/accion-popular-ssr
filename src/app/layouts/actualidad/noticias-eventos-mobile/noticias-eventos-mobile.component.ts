import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { Noticia, noticias } from '../mantenimiento/actualidad';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-noticias-eventos-mobile',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <header>
    <h1 class="titulo">Últimas Noticias de Acción Popular</h1>
    <main>
      <swiper-container init=false class="swiper-noticias-eventos">
        <swiper-slide *ngFor="let noticia of noticias">
          <a class="container-noticias" [href]="noticia.enlace" target="_blank">
            <img [src]="noticia.imagen" alt="Descripción de la imagen">
            <p class="fecha">{{noticia.fecha}}</p>
            <h1>{{noticia.titulo}}</h1>
            <p class="contenido">{{noticia.contenido}}</p>
          </a>
        </swiper-slide>
      </swiper-container>
      <div class="buttons">
        <button class="swiper-button-prev"> < </button>
        <button class="swiper-button-next"> > </button>
      </div>
    </main>
  </header>

  `,
  styleUrl: './noticias-eventos-mobile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasEventosMobileComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  noticias: Noticia[] = noticias; // Utiliza la constante de noticias

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const swiperElemConstructor = document.querySelector('.swiper-noticias-eventos');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        loop: true,
        slidesPerView: 'auto',
        spaceBetween:34,
        breakpoints: {
          900: {
            slidesPerView:3,
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
