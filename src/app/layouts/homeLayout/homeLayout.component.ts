import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { SwiperHomeComponent } from "../../components/swiper-home/swiper-home.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    SwiperHomeComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <header>
      <app-swiper-home></app-swiper-home>
      <main>
        <h1>Construyendo el Futuro con Valores</h1>
        <p>Bienvenidos al sitio oficial de Acción Popular, el partido de la democracia, la justicia social y el desarrollo sostenible. Desde nuestra fundación en 1956 por Fernando Belaúnde Terry, hemos sido protagonistas de la historia política del Perú, comprometidos con el bienestar de todos los peruanos.</p>
        <p>Explora nuestras propuestas, conoce nuestra historia y únete a nuestro proyecto de futuro.</p>
        <section class="botones">
          <a href="/unete-nosotros">Únete a nosotros</a>
          <a href="/nosotros">Conócenos</a>
        </section>
      </main>
    </header>
  `,
  styleUrl: './homeLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent { }
