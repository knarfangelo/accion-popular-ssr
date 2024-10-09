import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-juventudes-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
  <app-navegacion></app-navegacion>
  <header>  
      <main>
        <h1>Juventudes de Acción Popular</h1>
        <h4>El Futuro es Hoy</h4>
        <article>
        <section class="contenido">
        En Acción Popular, los jóvenes son actores clave en la construcción del Perú que soñamos. Nuestras Juventudes promueven la participación activa de los jóvenes en la política y la vida cívica, impulsando el liderazgo y brindando oportunidades de formación para que puedan ser los futuros líderes del país. <br>
        <ul>
          <li><strong>Formación de Líderes:</strong> A través de programas y talleres, preparamos a la próxima generación de líderes que estarán a la vanguardia del cambio en el Perú.</li>
          <li><strong>Redes de Juventudes:</strong> Creamos espacios de diálogo y participación para los jóvenes de todas las regiones del país.</li>
          <li><strong>Acciones Sociales:</strong> Las Juventudes de Acción Popular organizan campañas solidarias y proyectos comunitarios que impactan positivamente en las comunidades más vulnerables.</li>
        </ul>
        </section>
        <img src="juventudes/juventudes.png" alt="">
      </article>
      </main>
      <a href="/formulario" class="juventudes">Únete a las juventudes</a>
    </header>
    <app-footer></app-footer>
  `,
  styleUrl: './juventudesLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JuventudesLayoutComponent { }
