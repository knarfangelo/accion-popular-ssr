import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-swiper-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <swiper-container init=false class="swiper-banners">
      <swiper-slide>
        <img src="banners/banner-politico-belaunde-terry.png" alt="belaunde terry saludando al pueblo peruano">
      </swiper-slide>
      <swiper-slide>
        <img src="banners/banner-politicos-juventudes.png" alt="juventudes de accion popular">
      </swiper-slide>
      <swiper-slide>
        <img src="banners/banner-politicos-accion-popular.png" alt="politicos de todas las regiones del Perú de accion popular">
      </swiper-slide>
    </swiper-container>
  `,
  styleUrl: './swiper-home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwiperHomeComponent {

  swiperElements = signal<SwiperContainer | null>(null);


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const swiperElemConstructor = document.querySelector('.swiper-banners');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        slidesPerView: 1,
        speed: 3000,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();  
    }

  }
}
