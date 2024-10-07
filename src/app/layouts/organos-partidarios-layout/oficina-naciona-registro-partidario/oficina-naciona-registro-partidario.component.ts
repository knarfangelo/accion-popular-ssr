import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../../navegacion/navegacion.component";
import { FooterComponent } from "../../footer/footer.component";
import { ArchivosComponent } from "../../../components/normativa/archivos/archivos.component";
import { archivosData } from './mantenimiento/oficina-nacional-registro-partidario';

@Component({
  selector: 'app-oficina-nacional-registro-partidario',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent,
    ArchivosComponent
  ],
  template: `
  <app-navegacion></app-navegacion>
  <header>
    <section class="banner">
      <img class="banner_fondo" src="banners/belaunde-terry-pueblo-peruano.webp" alt="banner de belaunde terry saludando al pueblo peruano">
      <div class="banner_contenido">
        <h1 class="banner_contenido_titulo">OFICINA NACIONAL DE <br>REGISTRO PARTIDARIO</h1>
        <img class="banner_pala" src="icons/pala-accion-popular.svg" alt="logo de accion popular con fondo transparente">
      </div>
    </section>
    <main>
      <!-- DIRECTIVAS Section -->
  <section>
    <h1 class="titulo">DIRECTIVAS</h1>
    <section class="archivos directivas"> <!-- Apply directivas class here -->
      <app-archivos
        *ngFor="let archivo of archivosData[0].archivos"
        [titulo]="archivo.titulo"
        [linkDescargar]="archivo.linkDescargar">
      </app-archivos>
    </section>
  </section>

  <!-- SOLICITUDES DE AFILIACIÓN Section -->
  <section>
    <h1 class="titulo">SOLICITUDES DE AFILIACIÓN</h1>
    <section class="archivos solicitudes_afiliacion">
      <app-archivos
        *ngFor="let archivo of archivosData[1].archivos"
        [titulo]="archivo.titulo"
        [linkDescargar]="archivo.linkDescargar">
      </app-archivos>
    </section>
  </section>

  <!-- COMUNICADOS Section -->
  <section>
    <h1 class="titulo ">COMUNICADOS</h1>
    <section class="archivos comunicados">
      <app-archivos
        *ngFor="let archivo of archivosData[2].archivos" 
        [titulo]="archivo.titulo"
        [linkDescargar]="archivo.linkDescargar">
      </app-archivos>
    </section>
  </section>      
    </main>
  </header>
  <app-footer></app-footer>
  `,
  styleUrls: ['./oficina-naciona-registro-partidario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OficinaNacionaRegistroPartidarioComponent {
  archivosData = archivosData; // Asigna los datos a la propiedad del componente
}
