import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { NosotrosLideresComponent } from "./nosotrosLideres/nosotrosLideres.component";
import { register, SwiperContainer } from 'swiper/element'; 
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-nosotros-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent,
    NosotrosLideresComponent
],
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <app-navegacion></app-navegacion>
  <header>
    <img class="banner" src="nosotros/banner-nosotros.png" alt="banner de belaunde terry saludando al pueblo peruano">
      <main>
      <h1 class="titulo">Quiénes Somos</h1>
      <p>Acción Popular ha sido, desde sus inicios, un pilar fundamental en la política peruana. Fundado en 1956 por Fernando Belaúnde Terry, un líder visionario, nuestro partido ha defendido los principios de democracia, participación ciudadana y descentralización.</p>
      <p>Con dos presidencias históricas, en 1963 y 1980, hemos impulsado la modernización del Perú, defendido la libertad de prensa, y promovido reformas sociales y económicas que mejoraron la calidad de vida de los peruanos. Nuestro compromiso con los valores democráticos sigue guiando cada una de nuestras acciones, siempre con la mirada puesta en un Perú más justo y equitativo.</p>
      <h1 class="titulo">Nuestros Valores</h1>
      <swiper-container init=false class="swiper-valores">
        <swiper-slide><div class="info">
          <h2>Democracia y Participación 
          Ciudadana</h2>        
          <p>Creemos en un gobierno transparente y en el poder del pueblo para tomar decisiones</p>
      </div>
        <img src="nosotros/democracia-participacion-ciudadana.png" alt="democracia y participación ciudadana">
        </swiper-slide>
        <swiper-slide class="valor"><div class="info">
          <h2>Desarrollo Sostenible</h2>          
          <p>Nuestro enfoque está en el crecimiento económico equilibrado con el respeto al medio ambiente.</p>
        </div>    <img src="nosotros/desarrollo-sostenible.png" alt="desarrollo sostenible">
      </swiper-slide>
        <swiper-slide class="valor">
       <div class="info">   <h2>Justicia Social</h2>      
          <p>Promovemos la igualdad de oportunidades y la reducción de las brechas sociales.</p>
        </div>  <img src="nosotros/justicial-social.png" alt="justicia social">
        </swiper-slide>
      </swiper-container>
      </main>  
    </header>
    <app-nosotros-lideres></app-nosotros-lideres>
    <app-footer></app-footer>
  `,
  styleUrl: './nosotrosLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosLayoutComponent {

  swiperElements = signal<SwiperContainer | null>(null);

  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    register();
    const swiperElemConstructor = document.querySelector('.swiper-valores');
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
        slidesPerView: 'auto',
        breakpoints: {
          900: {
            slidesPerView: 1
          },
          1100: {
            slidesPerView: 2
          },
          1300: {
            slidesPerView: 3
          },
        },
        speed: 2000,
      };
      Object.assign(swiperElemConstructor!, swiperOptions);
      this.swiperElements.set(swiperElemConstructor as SwiperContainer);
      this.swiperElements()?.initialize();  
    }
  }


}
