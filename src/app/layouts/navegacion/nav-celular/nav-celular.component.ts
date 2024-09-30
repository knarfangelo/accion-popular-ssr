import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-nav-celular',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav class="navegacion-movil">
      <ul class="redes" id="redes-accion-popular">
        <li><a href="" title="Tiktok en movil de acción popular"><img src="icons/tiktok-peruano.svg" alt="tiktok"></a></li>
        <li><a href="" title="facebook en movil de acción popular"><img src="icons/facebook-peruano.svg" alt="facebook"></a></li>
        <li><a href="" title="twitter en movil de acción popular"><img src="icons/twitter-peruano.svg" alt="twitter"></a></li>
        <li><a href="" title="instagram en movil de accion popular"><img src="icons/instagram-peruano.svg" alt="instagram"></a></li>
        <li><a href="" title="youtube en movil de accion popular"><img src="icons/youtube-peruano.svg" alt="youtube"></a></li>
        <li class="correo-accion-popular"><a href="" title="correo de accion popular"><img src="icons/correo-peruano.svg" alt="correo electronico en movil">info&#64;accionpopular.com.pe</a></li>
      </ul>
      <ul class="navegacion-movil-responsivo">
        <li><button (click)="toggleSitemap()"><img src="icons/burguer-responsive.svg" alt="boton responsive para moviles"></button></li>
        <li><a href="/inicio"><img src="icons/logo-partido-peruano-ap.svg" alt="logo de acción popular"></a></li>
        <li class="unete"><a href="/formulario">Únete</a></li>
      </ul>
      <ul class="sitemap-movil" id="sitemap-accion-popular"  [@slideInLeft]="sitemapVisible ? 'visible' : 'hidden'">
        <li class="icon-close"><button (click)="toggleSitemap()" ><img src="icons/close-partido-politico-peruano-ap.svg" alt="imagen para cerrar el responsive"></button></li>
        <li><a href="/"><img class="logo-accion-popular" src="icons/logo-partido-peruano-ap.svg" alt="logo para movil responsive de accion popular"></a></li>
        <li><a class="inicio" href="/inicio" title="Inicio del partido">Inicio</a></li>
        <li><a href="/quienes-somos" title="Conócenos - Partido">Nosotros</a></li>
        <li><a href="/liderazgo" title="Liderazgo">Liderazgo</a></li>
        <li><a href="/capacitacion" title="Capacitación para nuevos mienbros para el partido">Capacitación</a></li>
        <li><a href="/documentos" title="Documentos del partido político peruano acción popular">Documentos</a></li>
        <li><a href="/juventudes-accion-popular" title="Juventudes de acción popular">Juventudes</a></li>
        <li><a href="/noticias-eventos" title="Nuevas noticias de acción popular" >Noticias y Eventos</a></li>
        <li class="unete-nosotros"><a href="/formulario" title="Formulario para nuevos integrantes">Unete a nosotros</a></li>
      </ul>
    </nav> 
  `,
  styleUrl: './nav-celular.component.css',
  animations: [
    trigger('slideInLeft', [
      state('hidden', style({
        transform: 'translateX(-100%)',
      })),
      state('visible', style({
        transform: 'translateX(0)',
      })),
      transition('hidden => visible', [
        animate('800ms ease-out')
      ]),
      transition('visible => hidden', [
        animate('1000ms ease-in')
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavCelularComponent {

  sitemapVisible = false;

  toggleSitemap() {
    this.sitemapVisible = !this.sitemapVisible;
  }

}
