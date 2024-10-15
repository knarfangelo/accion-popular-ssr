import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { noticias } from '../../actualidad/mantenimiento/actualidad';

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
      <swiper-container init="false" class="swiper-noticias">
        <swiper-slide *ngFor="let noticia of noticias">
          <a class="container-noticias" [href]="noticia.enlace" target="_blank">
            <img [src]="noticia.imagen" [alt]="noticia.titulo">
            <p class="fecha">{{ noticia.fecha }}</p>
            <h1>{{ noticia.titulo }}</h1>
            <p class="contenido">{{ noticia.contenido }}</p>
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

  
  noticias = noticias.slice(0, 4); // Assigning the imported noticias array

  swiperElements = signal<SwiperContainer | null>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const swiperElemConstructor = document.querySelector('.swiper-noticias');
      const swiperOptions: SwiperOptions = {
        slidesPerView: 'auto',
        spaceBetween: 34,
        pagination: {
          enabled: true,
          clickable: true,
        },
        breakpoints: {
          800: {
            slidesPerView: 1,
          },
          1300: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 4,
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