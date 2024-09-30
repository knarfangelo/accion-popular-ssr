import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-propuestas-layout',
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
      <section class="banner">
        <img class="imagen-banner" src="propuestas/banner-propuestas.png" alt="banner belaunde">
      </section>
      <main>
        <div class="propuesta">
          <p class="numero">01</p>
          <div class="contenido">
            <h1 class="titulo">El Perú como Doctrina</h1>
            <p>El Perú prehispánico es un ejemplo destacado de cooperación en obras públicas y desarrollo. Los valores de solidaridad y trabajo en equipo han persistido en la cultura de nuestras comunidades a lo largo del tiempo. La cooperación voluntaria, sin remuneración, surge cuando hay necesidades básicas que no se satisfacen. Una vez que estas necesidades se cubren, la población comienza a enfocarse en sus propias necesidades individuales.</p>
          </div>
        </div>
        <div class="propuesta">
          <p class="numero">02</p>
          <div class="contenido">
            <h1 class="titulo">La Conquista del Perú 
            por los Peruanos</h1>
            <p>Plena posesión de nuestro territorio, promoviendo un uso adecuado de la tierra. Queremos una ocupación sostenible de la ceja de selva y las áreas marginales, buscando construir un país de fundadores en lugar de uno con habitantes precarios.</p>
          </div>
        </div>
        <div class="propuesta">
          <p class="numero">03</p>
          <div class="contenido">
            <h1 class="titulo">La Educación al Encuentro del Educando</h1>
            <p>La educación es un derecho fundamental que debe estar conectada con la innovación, la ciencia y la tecnología para fomentar la productividad y el desarrollo del país. En el ámbito formal, enfrentamos problemas como la baja calidad de la educación pública y la dependencia del mercado en la educación privada.</p>
          </div>
        </div>
      </main>
    </header>
    <app-footer></app-footer>
  `,
  styleUrl: './propuestasLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropuestasLayoutComponent { }
