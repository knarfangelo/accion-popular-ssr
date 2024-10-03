import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-noticias-eventos',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
  <app-navegacion>
  </app-navegacion>
  
  <app-footer></app-footer>
  `,
  styleUrl: './noticias-eventos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasEventosComponent { }
