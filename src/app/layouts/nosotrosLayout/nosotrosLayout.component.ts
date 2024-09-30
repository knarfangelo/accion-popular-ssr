import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";
import { NosotrosLideresComponent } from "./nosotrosLideres/nosotrosLideres.component";

@Component({
  selector: 'app-nosotros-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent,
    NosotrosLideresComponent
],
  template: `
  <app-navegacion></app-navegacion>
  <header>
    <img class="banner" src="nosotros/banner-nosotros.png" alt="banner de belaunde terry saludando al pueblo peruano">
      <main>
      <h1>Quiénes Somos</h1>
      <p>Acción Popular ha sido, desde sus inicios, un pilar fundamental en la política peruana. Fundado en 1956 por Fernando Belaúnde Terry, un líder visionario, nuestro partido ha defendido los principios de democracia, participación ciudadana y descentralización.</p>
      <p>Con dos presidencias históricas, en 1963 y 1980, hemos impulsado la modernización del Perú, defendido la libertad de prensa, y promovido reformas sociales y económicas que mejoraron la calidad de vida de los peruanos. Nuestro compromiso con los valores democráticos sigue guiando cada una de nuestras acciones, siempre con la mirada puesta en un Perú más justo y equitativo.</p>
      <h1>Nuestros Valores</h1>
      <section class="valores">
        <div class="valor">
          <h2>Democracia y Participación 
          Ciudadana</h2>
          <p>Creemos en un gobierno transparente y en el poder del pueblo para tomar decisiones</p>
          <img src="nosotros/democracia-participacion-ciudadana.png" alt="democracia y participación ciudadana">
        </div>
        <div class="valor">
          <h2>Desarrollo Sostenible</h2>
          <p>Nuestro enfoque está en el crecimiento económico equilibrado con el respeto al medio ambiente.</p>
          <img src="nosotros/desarrollo-sostenible.png" alt="desarrollo sostenible">
        </div>
        <div class="valor">
          <h2>Justicia Social</h2>
          <p>Promovemos la igualdad de oportunidades y la reducción de las brechas sociales.</p>
          <img src="nosotros/justicial-social.png" alt="justicia social">
        </div>
      </section>
      </main>
      <app-nosotros-lideres></app-nosotros-lideres>
    </header>
    <app-footer></app-footer>
  `,
  styleUrl: './nosotrosLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosLayoutComponent { }
