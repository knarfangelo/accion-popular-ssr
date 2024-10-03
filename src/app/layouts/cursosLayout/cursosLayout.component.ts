import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-cursos-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
  <app-navegacion></app-navegacion>
  <header>
    <h1>Cursos disponibles</h1>
    <main>
    <iframe class="video" src="https://player.vimeo.com/video/1015402186?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" width="100%" height="auto" title="Doctrina de Acción Popular"></iframe>
    <p class="titulo">La doctrina de Acción Popular  por Luis Gálvez La Puente</p>
    <p>El curso "Doctrina de Acción Popular", a cargo de Luis Enrrique Gálvez, aborda los principios fundacionales del partido, sus valores democráticos y el legado de Fernando Belaúnde Terry, formando a los participantes en la visión histórica y política de Acción Popular.</p>
    </main>
  </header> 
  <app-footer></app-footer>
  `,
  styleUrl: './cursosLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursosLayoutComponent { }
