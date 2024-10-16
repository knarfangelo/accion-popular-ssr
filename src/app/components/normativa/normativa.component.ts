import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchivosComponent } from "./archivos/archivos.component";
import { IArchivos } from './archivos/DB/IArchivos';
import { archivosJSON } from './archivos/DB/archivosJSON';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-normativa',
  standalone: true,
  imports: [
    CommonModule,
    ArchivosComponent,
    NavegacionComponent,
    FooterComponent
],
  template: `
    <header>
      <app-navegacion></app-navegacion>
      <main>
      <section class="banner">
      <img class="banner_fondo" src="banners/belaunde-terry-pueblo-peruano.webp" alt="banner de belaunde terry saludando al pueblo peruano">
      <div class="banner_contenido">
        <h1 class="banner_contenido_titulo">Estatutos y Reglamentos</h1>
        <img class="banner_pala" src="icons/pala-accion-popular.svg" alt="logo de accion popular con fondo transparente">
      </div>
    </section>
      <h1>ESTATUTOS</h1>
      <app-archivos class="archivo" [linkDescargar]="item[0].linkDescargar" [titulo]="item[0].titulo"></app-archivos>
      <h1>REGLAMENTOS</h1>
      <section class="archivos">
      @for (item of items; track $index) {
      <app-archivos class="archivos-int" [linkDescargar]="item.linkDescargar" [titulo]="item.titulo"></app-archivos>
      }</section>
      </main>
      <app-footer></app-footer>
    </header>
  `,
  styleUrl: './normativa.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NormativaComponent { 
  items:IArchivos[] = archivosJSON.slice(1);
  item:IArchivos[] = archivosJSON;
}
