import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nav-celular',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
   <nav class="navegacion-movil">
      <ul class="redes" id="redes-accion-popular">
        <li><a href="https://www.tiktok.com/@accionpopular.pe" target="_blank" title="Tiktok en movil de acción popular"><img src="icons/tiktok-peruano.svg" alt="tiktok"></a></li>
        <li><a href="https://www.facebook.com/people/Acci%C3%B3n-Popular/61566219825204/" target="_blank" title="facebook en movil de acción popular"><img src="icons/facebook-peruano.svg" alt="facebook"></a></li>
        <li><a href="https://x.com/AccionPopularOk" title="twitter en movil de acción popular" target="_blank"><img src="icons/twitter-peruano.svg" alt="twitter"></a></li>
        <li><a href="https://www.instagram.com/accionpopularpe/" title="instagram en movil de acción popular" target="_blank"><img src="icons/instagram-peruano.svg" alt="instagram"></a></li>
        <li><a href="https://www.youtube.com/@AccionPopularPE" title="youtube en movil de acción popular" target="_blank"><img src="icons/youtube-peruano.svg" alt="youtube"></a></li>
        <li class="correo-accion-popular"><a href="mailto:info@accionpopular.com.pe" title="correo de accion popular"><img src="icons/correo-peruano.svg" alt="correo electronico en movil">info&#64;accionpopular.com.pe</a></li>
      </ul>
      <ul class="navegacion-movil-responsivo">
        <li><button (click)="toggleSitemap()"><img src="icons/burguer-responsive.svg" alt="boton responsive para moviles"></button></li>
        <li><a href="/"><img src="icons/logo-partido-peruano-ap.svg" alt="logo de acción popular"></a></li>
        <li class="unete"><a routerLink="/formulario">Únete</a></li>
      </ul>
      <ul class="sitemap-movil" id="sitemap-accion-popular" [@slideInLeft]="sitemapVisible ? 'visible' : 'hidden'">
        <li class="icon-close"><button (click)="toggleSitemap()"><img src="icons/close-partido-politico-peruano-ap.svg" alt="imagen para cerrar el responsive"></button></li>
        <li><a routerLink="/"><img class="logo-accion-popular" src="icons/logo-partido-peruano-ap.svg" alt="logo para movil responsive de accion popular"></a></li>
        <li><a class="inicio" routerLink="/"  routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" title="Inicio del partido">Inicio</a></li>
        <li><a routerLink="/quienes-somos"  routerLinkActive="active" title="Conócenos - Partido">Nosotros</a></li>
        <li>
        <button 
  (click)="toggleLiderazgo()" 
  class="liderazgo-btn" 
  [ngClass]="{ 'active': isLiderazgoActive() }">
  Liderazgo
</button>
        <ul class="liderazgo-desplegable" [@slideInOut]="liderazgoDesplegado ? 'open' : 'closed'">
            <li class="liderazgo-item"><a class="sub-url" routerLink="/liderazgo/comite-ejecutivo-nacional" routerLinkActive="active"><span>•</span> Comité Ejecutivo Nacional</a></li>
            <li class="liderazgo-item"><a class="sub-url" routerLink="/liderazgo/comite-politico" routerLinkActive="active"><span>•</span> Comité Político</a></li>
            <li class="liderazgo-item"><a class="sub-url" routerLink="/liderazgo/comites-ejecutivos-departamentales-metropolitano" routerLinkActive="active"><span>•</span> Comités Ejecutivos Departamentales y Metropolitanos</a></li>
            <li class="liderazgo-item"><a class="sub-url" routerLink="/liderazgo/bancada" routerLinkActive="active"><span>•</span> Bancada</a></li>
          </ul>
        </li>

        <li class="organos-partidarios-lista">
          <button 
            (click)="toggleOrganosPartidarios()" 
            class="organos-partidarios-btn" 
            [ngClass]="{ 'active': isOrganosPartidariosActive() }">
            Órganos Partidarios
          </button>
          <ul class="organos-partidarios-desplegable" [@slideInOut]="organosPartidariosDesplegado ? 'open' : 'closed'">
            <li><a class="no-habilitado"><span>•</span> Presidencia</a></li>
            <li><a class="no-habilitado"><span>•</span> Comité Nacional Electoral</a></li>
            <li><a routerLink="/organos-partidarios/oficina-nacional-registro-partidario" routerLinkActive="active"><span>•</span> Oficina Nacional de Registro Partidario</a></li>
            <li><a class="no-habilitado"><span>•</span> Tribunal de Disciplina</a></li>
            <li><a class="no-habilitado"><span>•</span> Defensor del Afiliado</a></li>
            <li><a class="no-habilitado"><span>•</span> Congreso Nacional</a></li>
            <li><a class="no-habilitado"><span>•</span> Plenario Nacional</a></li>
          </ul>
        </li>
        <li><a routerLink="/capacitacion"  routerLinkActive="active" title="Capacitación para nuevos miembros para el partido">Capacitación</a></li>
        <li><a routerLink="/documentos"  routerLinkActive="active" title="Documentos del partido político peruano acción popular">Documentos</a></li>
        <li><a routerLink="/juventudes-accion-popular" routerLinkActive="active" title="Juventudes de acción popular">Juventudes</a></li>
        <li><a routerLink="/noticias-eventos"  routerLinkActive="active" title="Nuevas noticias de acción popular">Noticias y Eventos</a></li>
        <li class="unete-nosotros"><a routerLink="/formulario"  routerLinkActive="active" title="Formulario para nuevos integrantes">Únete a nosotros</a></li>
      </ul>
    </nav>
    <div class="relleno"></div>
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
    ]),
    trigger('slideInOut', [
      state('closed', style({
        height: '0',
        overflow: 'hidden',
        opacity: 0,
      })),
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      transition('closed => open', [
        animate('300ms ease-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in')
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavCelularComponent {

  sitemapVisible = false;
  liderazgoDesplegado = false;
  organosPartidariosDesplegado = false;

  constructor(private router: Router) {}

  // Check if any subroute of Órganos Partidarios is active
  isOrganosPartidariosActive() {
    return this.router.isActive('/organos-partidarios/oficina-nacional-registro-partidario', false) ||
           this.router.isActive('/organos-partidarios/presidencia', false) ||
           this.router.isActive('/organos-partidarios/comite-nacional-electoral', false) ||
           this.router.isActive('/organos-partidarios/tribunal-disciplina', false);
  }

  // Check if any subroute of Liderazgo is active
  isLiderazgoActive() {
    return this.router.isActive('/liderazgo/comite-ejecutivo-nacional', false) ||
           this.router.isActive('/liderazgo/comite-politico', false) ||
           this.router.isActive('/liderazgo/comites-ejecutivos-departamentales-metropolitano', false) ||
           this.router.isActive('/liderazgo/bancada', false);
  }

  toggleSitemap() {
    this.sitemapVisible = !this.sitemapVisible;
  }

  toggleLiderazgo() {
    this.liderazgoDesplegado = !this.liderazgoDesplegado;
  }

  toggleOrganosPartidarios() {
    this.organosPartidariosDesplegado = !this.organosPartidariosDesplegado;
  }

}
