import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { congresistasData, ICongresistas } from './Mantenimiento/congresistas';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-bancada-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
  <header>
    <app-navegacion></app-navegacion>
    <img class="banner" src="congresistas/banner-congresistas.png" alt="">
  <main>
  @for (congresista of congresistas; track $index) {
   <article>
    <img class="imagenes" [src]="congresista.img" [alt]="congresista.nombre + ', '+ congresista.cargo">
    <section class="descripcion">
      <h1 class="nombre">{{congresista.nombre}}</h1>
      <h2 class="cargo">{{congresista.cargo}}</h2>
    </section>
   </article>
  }
  </main>
  <app-footer>
  </app-footer>
  </header>
  `,
  styleUrl: './bancadaLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BancadaLayoutComponent {

  congresistas:ICongresistas[] = congresistasData;

}
