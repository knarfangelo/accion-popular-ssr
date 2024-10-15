import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-home-encap',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `

<a href="/encap">
    <swiper-container init=false class="swiper-encap">
      <swiper-slide>
        <img class="encap-responsivo" src="encap/encap-responsive.png" alt="Logo del Encap">
        <img class="banner-encap-peruano" src="banners/encap-fuerza-popular.png" alt="encap-accion-popular">
      </swiper-slide>
      <swiper-slide>
      <img class="encap-responsivo" src="encap/encap-responsive.png" alt="Logo del Encap">
        <img class="banner-encap-peruano" src="banners/encap-fuerza-popular.png" alt="encap-ap-2">
      </swiper-slide>
      <swiper-slide>
      <img class="encap-responsivo" src="encap/encap-responsive.png" alt="Logo del Encap">
        <img class="banner-encap-peruano" src="banners/encap-fuerza-popular.png" alt="encap-ap-3">
      </swiper-slide>
    </swiper-container></a>

  `,
  styleUrl: './homeEncap.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeEncapComponent {

  swiperElements = signal<SwiperContainer | null>(null);


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      register();
      const swiperElemConstructor = document.querySelector('.swiper-encap');
      const swiperOptions: SwiperOptions = {
        slidesPerView: 'auto',
        speed: 20000,
        loop: true,
        preventClicksPropagation: false,
        simulateTouch: false,
        autoplay: {
        delay: 1,
        disableOnInteraction: true
      },
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();  
    }

  }

}
