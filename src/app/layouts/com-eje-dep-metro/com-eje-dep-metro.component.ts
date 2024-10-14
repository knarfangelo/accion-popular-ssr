import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavegacionComponent } from "../navegacion/navegacion.component";
import {comEjeDepMetroData, IComEjeDepMetro} from './Mantenimiento/comEjeDepMetro';

@Component({
  selector: 'app-com-eje-dep-metro',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    NavegacionComponent
],
  template: `
   <app-navegacion></app-navegacion>
    <header>
      <div class="banner">
        <h1>COMITÉS EJECUTIVOS DEPARTAMENTALES Y METROPOLITANO</h1>
        <img class="img-banner" src="banners/belaunde-terry-pueblo-peruano.webp" alt="banner de belaunde saludando al pueblo peruano">
      </div>
      <main>
        @for (integrante of comEjeDepMetroData; track $index) {
          <article class="cards">
            <img [src]="integrante.imagen" [alt]="integrante.cargo">
            <section class="descripcion">  
              <h1 class="nombre">{{integrante.nombre}}</h1>
              <h2 class="cargo">{{integrante.cargo}}</h2>
              </section>
          </article>
        }
      </main>
    </header>
    <app-footer></app-footer>
  `,
  styleUrl: './com-eje-dep-metro.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComEjeDepMetroComponent {
  comEjeDepMetroData:IComEjeDepMetro[] = comEjeDepMetroData;

}
