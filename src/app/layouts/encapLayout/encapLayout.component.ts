import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-encap-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
    <header>
      <app-navegacion></app-navegacion>
      <main>
        <h1>ENCAP 2024</h1>
        <iframe title="vimeo-player" src="https://player.vimeo.com/video/1014536183?h=7434c96b86" width="640" height="360" frameborder="0"    allowfullscreen></iframe>
        <h2>Encuentro Nacional de Capacitación de Acción Popular 2024</h2>
        <p>🚀 "El futuro del Perú está en nuestras manos. En el ENCAP, nos preparamos para seguir construyendo un país más democrático y justo. ¡Vamos juntos! 🇵🇪 #AcciónPopular #FuturoAP #ENCAP2024 #LiderazgoPopular"</p>
      </main>
    </header>
    <app-footer></app-footer>
  `,
  styleUrl: './encapLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EncapLayoutComponent { }
