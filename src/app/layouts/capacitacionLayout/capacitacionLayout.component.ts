import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-capacitacion-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
    <header>
    <app-navegacion>
    <li class="lista"><a class="icon-a" href=""><img class="icon-portada" src="/inicio/portada.svg" alt=""></a></li>
    </app-navegacion>
    <main>
      <h1>Capacitación y Formación para el Futuro</h1>
      <article>
      <section class="contenido">
        <p>En Acción Popular, sabemos que el conocimiento es el motor del cambio. Por eso, ofrecemos a nuestros militantes y simpatizantes un completo programa de formación y capacitación, diseñado para fortalecer sus habilidades y conocimientos en diversas áreas políticas, sociales y económicas.
        </p>
        <p>Nuestros programas incluyen:</p>
        <ul>
          <li><strong>Formación Política:</strong> Cursos y seminarios para entender la estructura política del país, procesos legislativos y la importancia de la participación democrática.</li><br>
          <li><strong>Liderazgo y Gestión Pública:</strong> Talleres especializados en liderazgo, toma de decisiones y gestión eficiente para quienes deseen incursionar en cargos públicos.</li><br>
          <li><strong>Políticas Públicas:</strong> Capacitación en el diseño y evaluación de políticas públicas para generar impacto social y económico.</li><br>
          <li><strong>Herramientas Digitales y Comunicación Política:</strong> Formación en el uso de tecnologías y plataformas digitales para potenciar la comunicación política y conectar con la ciudadanía.</li>
        </ul>
      </section>
      <img class="capacitacion" src="capacitacion/capacitacion.png" alt="capacitacion accion popular">
    </article>
      <div class="buttons">
        <a class="no-habilitado">Inscríbete en un curso</a>
        <a href="cursos">Ver más sobre nuestros programas de capacitación</a>
      </div>
    
    </main>
  </header>
  <app-footer></app-footer>
  `,
  styleUrl: './capacitacionLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapacitacionLayoutComponent { }
