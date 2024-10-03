import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { comiteEjecutivoNacionalData, IComiteEjecutivoNacional } from './mantenimiento/comite-ejecutivo-nacional';

@Component({
  selector: 'app-comite-ejecutivo-nacional',
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
        <h1>COMITÉ EJECUTIVO NACIONAL</h1>
        <img class="img-banner" src="banners/belaunde-terry-pueblo-peruano.webp" alt="banner de belaunde saludando al pueblo peruano">
      </div>
      <main>
        @for (integrante of comiteEjecutivoNacional; track $index) {
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
  styleUrl: './comite-ejecutivo-nacional.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComiteEjecutivoNacionalComponent {

  comiteEjecutivoNacional:IComiteEjecutivoNacional[] = comiteEjecutivoNacionalData;

}
