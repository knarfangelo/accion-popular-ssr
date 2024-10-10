import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-nav-escritorio',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <nav class="navegacion-escritorio">
      <ul class="redes" id="redes-accion-popular">
        <li><a href="https://www.tiktok.com/@accionpopular.pe" title="Tiktok de acción popular" target="_blank"><img src="icons/tiktok-peruano.svg" alt="tiktok"></a></li>
        <li><a href="https://www.facebook.com/people/Acci%C3%B3n-Popular/61566219825204/" title="facebook de acción popular" target="_blank"><img src="icons/facebook-peruano.svg" alt="facebook"></a></li>
        <li><a href="https://x.com/accion_popular_" title="twitter de acción popular" target="_blank"><img src="icons/twitter-peruano.svg" alt="twitter"></a></li>
        <li><a href="https://www.instagram.com/accionpopularpe/" title="instagram de accion popular" target="_blank"><img src="icons/instagram-peruano.svg" alt="instagram"></a></li>
        <li><a href="https://www.youtube.com/@AccionPopularPE" title="youtube de accion popular" target="_blank"><img src="icons/youtube-peruano.svg" alt="youtube"></a></li>
        <li class="correo-accion-popular"><a href="mailto:info@accionpopular.com.pe" title="correo de accion popular" target="_blank"><img src="icons/correo-peruano.svg" alt="correo electronico">info&#64;accionpopular.com.pe</a></li>
      </ul>
      <ul class="sitemap" id="sitemap-accion-popular">
        <li><a class="inicio" href="/" title="Inicio del partido">Inicio</a></li>
        <li><a href="/quienes-somos" title="Conócenos - Partido">Nosotros</a></li>

        <li class="liderazgo-lista">
          <a class="liderazgo" (click)="desplegarLiderazgo($event)" title="Liderazgo">Liderazgo</a>
          <ul class="liderazgo-desplegable" [@slideInOut]="liderazgoDesplegado ? 'open' : 'closed'">
            <li><a href="comite-ejecutivo-nacional"><span>•</span> Comité Ejecutivo Nacional</a></li>
            <li><a href="comite-politico"><span>•</span> Comité Político</a></li>
            <li><a href="comites-ejecutivos-departamentales-metropolitano"><span>•</span> Comités Ejecutivos Departamentales y Metropolitanos</a></li>
            <li><a href="bancada"><span>•</span> Bancada</a></li>
          </ul>
        </li>

        <li class="organos-partidarios-lista">
          <a class="organos-partidarios" (click)="desplegarOrganosPartidarios($event)" title="Órganos Partidarios">Órganos Partidarios</a>
          <ul class="organos-partidarios-desplegable" [@slideInOut]="organosPartidariosDesplegado ? 'open' : 'closed'">
            <li><a class="no-habilitado"><span>•</span> Presidencia</a></li>
            <li><a class="no-habilitado"><span>•</span> Comité Nacional Electoral</a></li>
            <li><a href="oficina-nacional-registro-partidario"><span>•</span> Oficina Nacional de Registro Partidario</a></li>
            <li><a class="no-habilitado"><span>•</span> Tribunal de Disciplina</a></li>
            <li><a class="no-habilitado"><span>•</span> Defensor del Afiliado</a></li>
            <li><a class="no-habilitado"><span>•</span> Congreso Nacional</a></li>
            <li><a class="no-habilitado"><span>•</span> Plenario Nacional</a></li>
          </ul>
        </li>

        <li><a href="/capacitacion" title="Capacitación para nuevos miembros para el partido">Capacitación</a></li>
        <li><a href="/documentos" title="Documentos del partido político peruano acción popular">Documentos</a></li>
        <li><a href="/juventudes-accion-popular" title="Juventudes de acción popular">Juventudes</a></li>
        <li><a href="/noticias-eventos" title="Juventudes de acción popular">Noticias y eventos</a></li>
        <li><a class="formulario" href="/formulario" title="Formulario para nuevos integrantes">Únete a nosotros</a></li>
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
  organosPartidariosDesplegado = false; // Nueva propiedad para el nuevo menú

  constructor(private eRef: ElementRef) { }

  desplegarLiderazgo(event: Event) {
    event.stopPropagation();
    this.liderazgoDesplegado = !this.liderazgoDesplegado;
  }

  desplegarOrganosPartidarios(event: Event) {
    event.stopPropagation(); // Evita que el clic en el propio menú cierre el desplegable
    this.organosPartidariosDesplegado = !this.organosPartidariosDesplegado; // Alternar visibilidad del nuevo menú
  }

  @HostListener('document:click', ['$event'])
  cerrarMenus(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.liderazgoDesplegado = false;
      this.organosPartidariosDesplegado = false; // Cerrar el nuevo menú al hacer clic fuera
    }
  }

}
