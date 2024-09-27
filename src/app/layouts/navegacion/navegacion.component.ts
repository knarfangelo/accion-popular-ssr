import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavEscritorioComponent } from "./nav-escritorio/nav-escritorio.component";
import { NavCelularComponent } from "./nav-celular/nav-celular.component";

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
    NavEscritorioComponent,
    NavCelularComponent
],
  template: `
      <app-nav-escritorio class="navegacion-escritorio" title="este contenido se renderiza en escritorio"></app-nav-escritorio>
      <app-nav-celular class="navegacion-celular" title="este contenido se renderiza en celular"></app-nav-celular>
  `,
  styleUrl: './navegacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

}
