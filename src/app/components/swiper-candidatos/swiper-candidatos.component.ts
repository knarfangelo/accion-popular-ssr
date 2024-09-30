import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';
import { candidatosJSON } from './BD/candidatosJSON';
import { ICandidato } from './BD/ICandidato';

@Component({
  selector: 'app-swiper-candidatos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="titulos">
    <h4>Nuestro Partido</h4>
    <h1>Acción Popular</h1></div>
    <div class="buttons">
      <button class="button-nav" (click)="updateInfo(0)">Presidente</button>
      <button class="button-nav" (click)="updateInfo(1)">Vicepresidente</button>
      <button class="button-nav" (click)="updateInfo(2)">Secretario General</button>
    </div>
    <main>
    <swiper-container init=false class="swiper-candidato">
      @for (candidato of candidatos; track $index) {
      <swiper-slide><div class="slide-custom">
        <img class="fondo-candidatos" src="banners/belaunde-terry-pueblo-peruano.webp" alt="belaunde terry saludando al pueblo peruano">
        <div class="slide-info">
          <div class="candidato">
          <h1>{{candidato.nombre}}</h1>
          <h1>{{candidato.apellido}}</h1>
          <div class="description">
          <p>{{candidato.descripcion}}</p>
          <p>{{candidato.descripcion2}}</p></div>
          <button class="slide-button">Leer Biografía</button></div>
          <div class="texto"><p>“Volver a Belaunde”</p><img class="foto" [src]="candidato.foto" [alt]="candidato.cargo"></div>
            
        </div>
      </div>
      </swiper-slide>
    }
  </swiper-container>

    </main>
  `,
  styleUrl: './swiper-candidatos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperCandidatosComponent {
  candidatos: ICandidato[] = candidatosJSON;
  swiperElements = signal<SwiperContainer | null>(null);
  swiperInstance: Swiper | null = null;

  updateInfo(index: number) {
    // Esperar a que swiperInstance esté inicializado
    if (this.swiperInstance) {
      this.swiperInstance.slideTo(index);
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const swiperElemConstructor = document.querySelector('.swiper-candidato') as SwiperContainer;
      const swiperOptions: SwiperOptions = {
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        fadeEffect: {
          crossFade: true
        },
        slidesPerView: 1,
        speed: 1000,
        effect: 'fade'
      };

      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();

      // Obtener la instancia de Swiper después de inicializarla
      this.swiperInstance = swiperElemConstructor?.swiper as Swiper;
    }
  }
} 
