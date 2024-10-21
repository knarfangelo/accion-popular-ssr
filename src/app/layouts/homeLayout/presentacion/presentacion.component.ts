import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <header>
    <h1>Construyendo el Futuro con Valores</h1>
    <main>
    <p class="texto">Bienvenidos al sitio oficial de Acción Popular, el partido de la democracia, la justicia social y el desarrollo sostenible. Desde nuestra fundación en 1956 por Fernando Belaúnde Terry, hemos sido protagonistas de la historia política del Perú, comprometidos con el bienestar de todos los peruanos. <br> <br>
    Explora nuestras propuestas, conoce nuestra historia y únete a nuestro proyecto de futuro.
    <div class="buttons">
      <a href="formulario">Únete a nosotros</a>
      <a href="propuestas">Propuestas</a>
    </div>
    </main>
  </header>
  `,
  styleUrl: './presentacion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentacionComponent { }
