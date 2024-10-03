// src/app/components/articulos/articulos.component.ts
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, importProvidersFrom, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IActualidad } from '../DB/IActualidad';
import { actualidadJSON } from '../DB/actualidadJSON';
import { NavegacionComponent } from "../../navegacion/navegacion.component";
import { FooterComponent } from "../../footer/footer.component";
import { HtmlLoaderServiceService } from '../../../htmlLoaderService.service';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule, // Importa HttpClientModule aquí
    NavegacionComponent,
    FooterComponent
  ],
  template: `
    <app-navegacion></app-navegacion>
    <article *ngIf="articulo">
      <div [innerHTML]="htmlContent"></div>
    </article>
    <app-footer></app-footer>
  `,
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent {
  id: string | null = null;
  actualidad: IActualidad[] = actualidadJSON;
  articulo: IActualidad | undefined;
  htmlContent: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private htmlLoaderService: HtmlLoaderServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.articulo = this.actualidad.find(a => a.id === this.id);
      console.log("articulo obtenido")
      console.log(this.articulo?.content)
      if (this.articulo?.content) {
        this.htmlLoaderService.loadHtml(this.articulo.content).subscribe(
          (html) => {
            this.htmlContent = html;
            console.log(this.htmlContent)
          },
          (error) => {
            console.error('Error al cargar el contenido HTML', error);
          }
        );
      }
    });
  }
  }
}
