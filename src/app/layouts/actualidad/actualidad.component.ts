import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { Swiper, SwiperOptions } from 'swiper/types';
import { register, SwiperContainer } from 'swiper/element';
import { actualidadJSON } from './DB/actualidadJSON';
register()
@Component({
  selector: 'app-actualidad',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
    <header>
      <app-navegacion>
      <li class="lista"><a class="icon-a" href=""><img class="icon-portada" src="/inicio/portada.svg" alt=""></a></li>
      </app-navegacion>
      <section class="news-section">
      <h2 class="section-title">Últimas Noticias de Acción Popular</h2>
      <div class="news-grid">
      <article class="news-item" *ngFor="let item of newsItems">
        <a [href]="item.content" target="_blank">
      <img [src]="item.imageUrl" [alt]="item.title" class="news-image" loading="lazy">
      <time class="news-date">{{item.date}}</time>
      <h3 class="news-title">{{item.title}}</h3>
      <p class="news-description">{{item.description}}</p></a>
      </article>
      </div>
      </section>
    <swiper-container init="false" class="mySwiper swiper-actualidad" pagination="true">
    @for (noticia of newsItems; track $index) {
    <swiper-slide>
      <a [href]="noticia.content" target="_blank">
      <article class="articulos">
        <img [src]="noticia.imageUrl" alt="">
        <p>{{noticia.date}}</p>
        <h3>{{noticia.title}}</h3>
        <p>{{noticia.description}}</p>
      </article></a>
    </swiper-slide>
    }
  </swiper-container>
      <app-footer></app-footer>
    </header>
  `,
  styleUrl: './actualidad.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualidadComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperInstance: Swiper | null = null;
  newsItems = actualidadJSON;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

    const swiperElemConstructor = document.querySelector('.swiper-actualidad') as SwiperContainer;
    const swiperOptions: SwiperOptions = {
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      fadeEffect: {
        crossFade: true
      },
      spaceBetween:20,
      slidesPerView: 1,
      speed: 1000,
      effect: 'slide'
    };
    
    Object.assign(swiperElemConstructor!, swiperOptions);
    this.swiperElements.set(swiperElemConstructor as SwiperContainer);
    this.swiperElements()?.initialize();

    // Obtener la instancia de Swiper después de inicializarla
    this.swiperInstance = swiperElemConstructor?.swiper as Swiper;
  }
  }
}

