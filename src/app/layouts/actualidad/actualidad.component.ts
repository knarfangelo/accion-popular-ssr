import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { Swiper, SwiperOptions } from 'swiper/types';
import { register, SwiperContainer } from 'swiper/element';
import { Noticia, noticias } from './mantenimiento/actualidad';
import { NoticiasEventosDesktopComponent } from "./noticias-eventos-desktop/noticias-eventos-desktop.component";
import { NoticiasEventosMobileComponent } from "./noticias-eventos-mobile/noticias-eventos-mobile.component";


@Component({
  selector: 'app-actualidad',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent,
    NoticiasEventosDesktopComponent,
    NoticiasEventosMobileComponent
],
  template: `
  <app-navegacion></app-navegacion>
  <app-noticias-eventos-desktop></app-noticias-eventos-desktop>
  <app-noticias-eventos-mobile></app-noticias-eventos-mobile>
    <app-footer></app-footer>
  `,
  styleUrls: ['./actualidad.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActualidadComponent {

}
