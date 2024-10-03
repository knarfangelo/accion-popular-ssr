import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { ILideres, lideresJSON } from './BD/lideres';
import { register, SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-nosotros-lideres',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
      <h1>LÍDERES HISTÓRICOS</h1>
      <img class="banner-lideres" src="nosotros/banner-lideres.png" alt="banner de peruanos celebrando">
      <swiper-container init=false class="swiper-lideres">
      @for (item of items; track $index) {
      <swiper-slide>
        <div class="descripcion">
          <h2>{{item.nombre}}</h2>
          <p>{{item.descripcion}}</p>
        </div>
        <img class="lideres" [src]="item.img" [alt]="item.nombre">
      </swiper-slide>
      }
      </swiper-container>
    </header>
  `,
  styleUrl: './nosotrosLideres.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosLideresComponent {
  items:ILideres[] = lideresJSON;
  swiperElements = signal<SwiperContainer | null>(null);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    register();
    if (isPlatformBrowser(this.platformId)) {
      register();
      const swiperElemConstructor = document.querySelector('.swiper-lideres');
      const swiperOptions: SwiperOptions = {
        navigation:{
          enabled:true,
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
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

}
