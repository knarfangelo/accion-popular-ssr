import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav-escritorio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <nav class="navegacion-escritorio">
      <ul class="redes" id="redes-accion-popular">
        <li><a href="" title="Tiktok de acción popular"><img src="icons/tiktok-peruano.svg" alt="tiktok"></a></li>
        <li><a href="" title="facebook de acción popular"><img src="icons/facebook-peruano.svg" alt="facebook"></a></li>
        <li><a href="" title="twitter de acción popular"><img src="icons/twitter-peruano.svg" alt="twitter"></a></li>
        <li><a href="" title="instagram de accion popular"><img src="icons/instagram-peruano.svg" alt="instagram"></a></li>
        <li><a href="" title="youtube de accion popular"><img src="icons/youtube-peruano.svg" alt="youtube"></a></li>
        <li class="correo-accion-popular"><a href="" title="correo de accion popular"><img src="icons/correo-peruano.svg" alt="correo electronico">info&#64;accionpopular.com.pe</a></li>
      </ul>
      <ul class="sitemap" id="sitemap-accion-popular">
        <li><a class="inicio" href="/inicio" title="Inicio del partido">Inicio</a></li>
        <li><a href="/nosotros" title="Conócenos - Partido">Nosotros</a></li>
        <li><a href="/liderazgo" title="Liderazgo">Liderazgo</a></li>
        <li><a href="/capacitacion" title="Capacitación para nuevos mienbros para el partido">Capacitación</a></li>
        <li><a href="/documentos" title="Documentos del partido político peruano acción popular">Documentos</a></li>
        <li><a href="/juventudes" title="Juventudes de acción popular">Juventudes</a></li>
        <li><a href="/noticias-eventos" title="Nuevas noticias de acción popular" >Noticias y Eventos</a></li>
        <li><a href="/unete-a-nosotros" title="Formulario para nuevos integrantes">Unete a nosotros</a></li>
      </ul>
    </nav>
  `,
  styleUrl: './nav-escritorio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavEscritorioComponent { }
