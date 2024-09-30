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
      <main>
      <section class="redes-sociales">
        <p class="titulo">Siguenos</p>
        <div class="imagenes-redes">
          <a href=""><img src="icons/tiktok-peruano.svg" alt="tiktok"></a>
          <a href=""><img src="icons/facebook-peruano.svg" alt="facebook"></a>
          <a href=""><img src="icons/twitter-peruano.svg" alt="twitter"></a>
          <a href=""><img src="icons/instagram-peruano.svg" alt="instagram"></a>
          <a href=""><img src="icons/youtube-peruano.svg" alt="youtube"></a>
        </div>
      </section>
      <section class="mapa-web">
        <p class="titulo">Mapa Web</p>
        <ul>
          <li><a href="">Nosotros</a></li>
          <li><a href="">Normativa</a></li>
          <li><a href="">ONRP</a></li>
          <li><a href="">Actualidad</a></li>
          <li><a href="">Únete a nosotros</a></li>
        </ul>
      </section>
      <section class="enlaces-importantes">
        <p class="titulo">Enlaces Importantes</p>
        <ul>
          <li><a href="">Jurado Nacional de Elecciones</a></li>
          <li><a href="">ONPE</a></li>
          <li><a href="">Presidencia</a></li>
          <li><a href="">Congreso de la republica</a></li>
        </ul>
      </section></main>
    </footer>
  `,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }
