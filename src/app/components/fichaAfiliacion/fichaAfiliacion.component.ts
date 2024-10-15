import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ficha-afiliacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="contenedor">
    <img class="ficha" src="ficha/fichaAfiliacion.png" type="application/pdf"/>
    <p class="fecha">2003/05/20</p>
    <p class="apellidoPaterno">Lopez</p>
    <p class="apellidoMaterno">Llamocca</p>
    <p class="nombres">Frank Angelo</p>
    <p class="dni">75967915</p>
  </div>
  `,
  styleUrl: './fichaAfiliacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichaAfiliacionComponent { }
