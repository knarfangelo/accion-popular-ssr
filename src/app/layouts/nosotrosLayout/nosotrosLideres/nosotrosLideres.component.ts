import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ILideres, lideresJSON } from './BD/lideres';

@Component({
  selector: 'app-nosotros-lideres',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Líderes Históricos</h1>
      @for (item of items; track $index) {
      <div class="lider">
        <div class="descripcion">
          <h2>{{item.nombre}}</h2>
          <p>{{item.descripcion}}</p>
        </div>
        <img [src]="item.img" [alt]="item.nombre">
      </div>}
    </header>
  `,
  styleUrl: './nosotrosLideres.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosLideresComponent {
  items:ILideres[] = lideresJSON;
}
