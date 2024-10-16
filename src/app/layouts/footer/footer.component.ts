import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <footer>
      <img class="logo-black" src="icons/accion-popular-black.svg" alt="logo en negro de ap">
      <section class="redes-sociales">
        <p class="titulo">Siguenos</p>
        <div class="imagenes-redes">
          <a href="https://www.tiktok.com/@accionpopular.pe" target="_blank"><img src="icons/tiktok-peruano.svg" alt="tiktok"></a>
          <a href="https://www.facebook.com/people/Acci%C3%B3n-Popular/61566219825204/" target="_blank"><img src="icons/facebook-peruano.svg" alt="facebook"></a>
          <a href="https://x.com/AccionPopularOk" target="_blank"><img src="icons/twitter-peruano.svg" alt="twitter"></a>
          <a href="https://www.instagram.com/accionpopularpe/" target="_blank"><img src="icons/instagram-peruano.svg" alt="instagram"></a>
          <a href="https://www.youtube.com/@AccionPopularPE" target="_blank"><img src="icons/youtube-peruano.svg" alt="youtube"></a>
        </div>
      </section>
      <section class="mapa-web">
        <p class="titulo">Mapa Web</p>
        <ul>
          <li><a href="quienes-somos">Nosotros</a></li>
          <li><a href="capacitacion">Capacitación</a></li>
          <li><a href="documentos">Documentos</a></li>
          <li><a href="juventudes-accion-popular">Juventudes</a></li>
          <li><a href="noticias-eventos">Noticias y Eventos</a></li>
        </ul>
      </section>
    </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
