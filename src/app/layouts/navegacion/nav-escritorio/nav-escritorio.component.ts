import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-escritorio',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  template: `
<nav class="navegacion-escritorio">
  <ul class="redes" id="redes-accion-popular">
    <li><a href="https://www.tiktok.com/@accionpopular.pe" title="Tiktok de acción popular" target="_blank"><img src="icons/tiktok-peruano.svg" alt="tiktok"></a></li>
    <li><a href="https://www.facebook.com/people/Acci%C3%B3n-Popular/61566219825204/" title="facebook de acción popular" target="_blank"><img src="icons/facebook-peruano.svg" alt="facebook"></a></li>
    <li><a href="https://x.com/AccionPopularOk" title="twitter de acción popular" target="_blank"><img src="icons/twitter-peruano.svg" alt="twitter"></a></li>
    <li><a href="https://www.instagram.com/accionpopularpe/" title="instagram de accion popular" target="_blank"><img src="icons/instagram-peruano.svg" alt="instagram"></a></li>
    <li><a href="https://www.youtube.com/@AccionPopularPE" title="youtube de acción popular" target="_blank"><img src="icons/youtube-peruano.svg" alt="youtube"></a></li>
    <li class="correo-accion-popular"><a href="mailto:info@accionpopular.com.pe" title="correo de accion popular" target="_blank"><img src="icons/correo-peruano.svg" alt="correo electronico">info&#64;accionpopular.com.pe</a></li>
  </ul>

  <ul class="sitemap" id="sitemap-accion-popular">
    <li><a class="inicio" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" title="Inicio del partido">Inicio</a></li>
    <li><a routerLink="/quienes-somos" routerLinkActive="active" title="Conócenos - Partido">Nosotros</a></li>

    <li class="liderazgo-lista">
      <a class="liderazgo" (click)="desplegarLiderazgo($event)" [ngClass]="{'active': liderazgoDesplegado || isLiderazgoActive()}" title="Liderazgo">Liderazgo</a>
      <ul class="liderazgo-desplegable" [@slideInOut]="liderazgoDesplegado ? 'open' : 'closed'">
        <li><a routerLink="/liderazgo/comite-ejecutivo-nacional" routerLinkActive="active"><span>•</span> Comité Ejecutivo Nacional</a></li>
        <li><a routerLink="/liderazgo/comite-politico" routerLinkActive="active"><span>•</span> Comité Político</a></li>
        <li><a routerLink="/liderazgo/comites-ejecutivos-departamentales-metropolitano" routerLinkActive="active"><span>•</span> Comités Ejecutivos Departamentales y Metropolitanos</a></li>
        <li><a routerLink="/liderazgo/bancada" routerLinkActive="active"><span>•</span> Bancada</a></li>
      </ul>
    </li>

    <li class="organos-partidarios-lista">
      <a class="organos-partidarios" (click)="desplegarOrganosPartidarios($event)" [ngClass]="{'active': organosPartidariosDesplegado || isOrganosPartidariosActive()}" title="Órganos Partidarios">Órganos Partidarios</a>
      <ul class="organos-partidarios-desplegable" [@slideInOut]="organosPartidariosDesplegado ? 'open' : 'closed'">
        <li><a class="no-habilitado"><span>•</span> Presidencia</a></li>
        <li><a class="no-habilitado"><span>•</span> Comité Nacional Electoral</a></li>
        <li><a routerLink="/organos-partidarios/oficina-nacional-registro-partidario" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><span>•</span> Oficina Nacional de Registro Partidario</a></li>
        <li><a class="no-habilitado"><span>•</span> Tribunal de Disciplina</a></li>
        <li><a class="no-habilitado"><span>•</span> Defensor del Afiliado</a></li>
        <li><a class="no-habilitado"><span>•</span> Congreso Nacional</a></li>
        <li><a class="no-habilitado"><span>•</span> Plenario Nacional</a></li>
      </ul>
    </li>

    <li><a routerLink="/capacitacion" routerLinkActive="active" title="Capacitación para nuevos miembros para el partido">Capacitación</a></li>
    <li><a routerLink="/documentos" routerLinkActive="active" title="Documentos del partido político peruano acción popular">Documentos</a></li>
    <li><a routerLink="/juventudes-accion-popular" routerLinkActive="active" title="Juventudes de acción popular">Juventudes</a></li>
    <li><a routerLink="/noticias-eventos" routerLinkActive="active" title="Noticias y eventos de acción popular">Noticias y eventos</a></li>
    <li><a class="formulario no-habilitado-button" title="Formulario para nuevos integrantes">Únete a nosotros</a></li>
  </ul>
</nav>

  `,
  styleUrls: ['./nav-escritorio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      state('closed', style({
        height: '0px',
        overflow: 'hidden',
      })),
      state('open', style({
        height: '*',
      })),
      transition('closed => open', [
        animate('300ms ease-in-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
})
export class NavEscritorioComponent {

  liderazgoDesplegado = false;
  organosPartidariosDesplegado = false;

  constructor(private eRef: ElementRef, private router: Router) { }

  desplegarLiderazgo(event: Event) {
    event.stopPropagation();
    this.organosPartidariosDesplegado = false;
    this.liderazgoDesplegado = !this.liderazgoDesplegado;
  }

  desplegarOrganosPartidarios(event: Event) {
    event.stopPropagation();
    this.liderazgoDesplegado = false;
    this.organosPartidariosDesplegado = !this.organosPartidariosDesplegado;
  }

  @HostListener('document:click', ['$event'])
  cerrarMenus(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.liderazgoDesplegado = false;
      this.organosPartidariosDesplegado = false;
    }
  }

  isOrganosPartidariosActive() {
    return this.router.isActive('/organos-partidarios/oficina-nacional-registro-partidario', false) ||
           this.router.isActive('/organos-partidarios/presidencia', false) ||
           this.router.isActive('/organos-partidarios/comite-nacional-electoral', false) ||
           this.router.isActive('/organos-partidarios/tribunal-disciplina', false);
  }

  isLiderazgoActive() {
    return this.router.isActive('/liderazgo/comite-ejecutivo-nacional', false) ||
           this.router.isActive('/liderazgo/comite-politico', false) ||
           this.router.isActive('/liderazgo/comites-ejecutivos-departamentales-metropolitano', false) ||
           this.router.isActive('/liderazgo/bancada', false);
  }

}
