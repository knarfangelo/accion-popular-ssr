import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { comitePoliticoData, IComitePolitico } from './Mantenimiento/comite-politico';

@Component({
  selector: 'app-comite-politico',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <header>
      <div class="banner">
        <h1>COMITÉ POLÍTICO</h1>
        <img class="img-banner" src="banners/belaunde-terry-pueblo-peruano.webp" alt="banner de belaunde saludando al pueblo peruano">
      </div>
      <main>
        @for (integrante of comitePoliticoData; track $index) {
          <article class="cards">
          <img [src]="integrante.imagen" [alt]="integrante.nombre + integrante.cargo">
          <section class="descripcion">
          <h1>{{integrante.nombre}}</h1>
          <h2>{{integrante.cargo}}</h2>
          </section>
        </article>
        }
      </main>
    </header>
    <app-footer></app-footer>
  `,
  styleUrl: './comite-politico.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComitePoliticoComponent { 

  comitePoliticoData:IComitePolitico[] = comitePoliticoData;

}