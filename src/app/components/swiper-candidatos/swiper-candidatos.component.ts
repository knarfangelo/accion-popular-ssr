import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';

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
      <h1>Acción Popular</h1>
    </div>
    <div class="buttons">
      <button class="button-nav" (click)="updateInfo(0)">Presidente</button>
      <button class="button-nav" (click)="updateInfo(1)">Secretario Nacional General</button>
      <button class="button-nav" (click)="updateInfo(2)">Vicepresidente</button>
    </div>
    <main>
      <swiper-container init=false class="swiper-candidato">
        <!-- Presidente -->
        <swiper-slide>
          <div class="slide-custom">
            <img class="fondo-candidatos" src="banners/belaunde-terry-pueblo-peruano.webp" alt="belaunde terry saludando al pueblo peruano">
            <div class="slide-info">
              <div class="candidato">
                <h1>Julio Abraham</h1>
                <h1>Chávez Chiong</h1>
                <div class="description">
                  <p>Nacido en Callao el 22 de julio de 1981 es un político y abogado peruano.</p>
                  <p>Fue el alcalde distrital de San Martín de Porres para el periodo 2019-2022.</p>
                </div>
              </div>
              <div class="texto">
                <p>“Volver a Belaunde”</p>
                <img class="foto" src="/comite-politico/chavez-abraham.png" alt="Presidente">
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- Secretario General -->
        <swiper-slide>
          <div class="slide-custom">
            <img class="fondo-candidatos" src="banners/belaunde-terry-pueblo-peruano.webp" alt="belaunde terry saludando al pueblo peruano">
            <div class="slide-info">
              <div class="candidato">
                <h1>Juan José</h1>
                <h1>Abad Cabrera</h1>
                <div class="description">
                  <p>Nacido en Huancavelica el 23 de enero de 1956. Es un político peruano.</p>
                  <p>Fue diputado por Huancavelica durante el periodo 1990-1992 y actualmente es el secretario general del partido Acción Popular, desde el 2023 - 2025.</p>
                </div>
              </div>
              <div class="texto">
                <p>“Volver a Belaunde”</p>
                <img class="foto juan-jose" src="/politicos/juan-jose-abad-cabrero.png" alt="Secretario General">
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- Vicepresidente -->
        <swiper-slide>
          <div class="slide-custom">
            <img class="fondo-candidatos" src="banners/belaunde-terry-pueblo-peruano.webp" alt="belaunde terry saludando al pueblo peruano">
            <div class="slide-info">
              <div class="candidato">
                <h1>María Eugenia</h1>
                <h1>Nieva Muzurrieta</h1>
                <div class="description">
                  <p>Nacida en la ciudad de Huancayo, Departamento de Junín.</p>
                  <p>Laboró en el Congreso de la República, como personal de confianza, desempeñándome como Asesora y como Técnica.</p>
                </div>
              </div>
              <div class="texto">
                <p>“Volver a Belaunde”</p>
                <img class="foto" src="/politicos/maria-eugenia-nieva-muzurrieta.png" alt="Vicepresidente">
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </main>
  `,
  styleUrls: ['./swiper-candidatos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperCandidatosComponent {
  swiperElements = signal<SwiperContainer | null>(null);
  swiperInstance: Swiper | null = null;

  updateInfo(index: number) {
    // Esperar a que swiperInstance esté inicializado
    if (this.swiperInstance) {
      this.swiperInstance.slideTo(index);
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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
