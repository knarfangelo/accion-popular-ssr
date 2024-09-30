import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-archivos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <section class="contenido">
      <img src="icons/lampa-ap.png" alt="">
      <p>{{titulo}}</p>
      </section>
      <section class="botones">
        <a [href]="linkDescargar" download >DESCARGAR</a>
        <a [href]="linkDescargar" target="_blank">VISUALIZAR</a>
      </section>
    </header>
  `,
  styleUrl: './archivos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchivosComponent { 

   @Input() titulo = '';
   @Input() linkDescargar = '';

}

