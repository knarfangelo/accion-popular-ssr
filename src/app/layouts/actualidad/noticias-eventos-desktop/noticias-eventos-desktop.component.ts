import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, signal } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element';
import { Noticia, noticias } from '../mantenimiento/actualidad';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-noticias-eventos-desktop',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <header>
    <h1 class="titulo">Últimas Noticias de Acción Popular</h1>
    <main>
        <section class="noticias-grid" *ngFor="let noticia of noticias">
          <a class="container-noticias" [href]="noticia.enlace" target="_blank">
            <img [src]="noticia.imagen" alt="Descripción de la imagen">
            <p class="fecha">{{noticia.fecha}}</p>
            <h1>{{noticia.titulo}}</h1>
            <p class="contenido">{{noticia.contenido}}</p>
          </a>
        </section>
    </main>
  </header>
  `,
  styleUrl: './noticias-eventos-desktop.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasEventosDesktopComponent {

  noticias: Noticia[] = noticias; // Utiliza la constante de noticias

}
