import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgxPrintModule } from 'ngx-print';

@Component({
  selector: 'app-ficha-afiliacion-dinamico',
  standalone: true,
  imports: [
    CommonModule,
    NgxPrintModule  
  ],
  template: `
    <header id="print-section">
      <main>
        <div class="panel_1">
          <div class="panel_1_1">
            <div class="panel_1_1-img">
              <img class="titulo" src="ficha/titulo.png" alt="">
              <img class="logo" src="ficha/logo.png" alt="">
            </div>
            <p class="panel_1_1_p1">Jefe y Fundador: FERNANDO BELAUNDE TERRY</p>
            <p class="panel_1_1_p2">Alcance de la organización política: Nacional</p>
          </div>
          <div class="panel_1_2">
            <p>FOTO <br> DEL <br> AFILIADO</p>
          </div>
        </div>
        <div class="panel_2">
          <p class="panel_2_titulo">OFICINA NACIONAL DE REGISTRO PARTIDARIO</p>
          <div class="panel_2_afiliacion">
            <p>FECHA DE AFILIACIÓN</p>
            <input type="text">
          </div>
          <p class="panel_2_parrafo">
            Por medio del presente manifiesto mi decisión de AFILIARME a la organización política ACCIÓN POPULAR comprometiéndome a cumplir con su estatuto y demás normas internas. En fe de lo <br> cual firmo el presente documento:
          </p>
        </div>
        <div class="panel_3">
          <p class="panel_3_titulo">DATOS PERSONALES</p>
          <div class="panel_3_flex1">
            <label class="panel_3_flex1_label" for="">Apellido Paterno
              <input class="input1" type="text">
            </label>
            <label class="panel_3_flex1_label" for="">Apellido Materno o del esposo
              <input class="input2" type="text">
            </label>
            <label class="panel_3_flex1_label" for="">Nombres
              <input type="text">
            </label>
          </div>
          <div class="panel_3_flex2">
            <label class="panel_3_flex2_label" for="">DNI
              <input class="input1" type="text">
            </label>
            <label class="panel_3_flex2_label" for="">Fecha de Nacimiento
              <input class="input2" type="text">
            </label>
            <label class="panel_3_flex2_label" for="">Estado Civil
              <input class="input3" type="text">
            </label>
            <label class="panel_3_flex2_label" for="">Sexo
              <input class="input4" type="text">
            </label>
          </div>
          <div class="panel_3_flex3">
            <label class="panel_3_flex3_label" for="">Lugar de Nacimiento: Región / Provincia / Distrito
              <input class="input1" type="text">
            </label>
          </div>
        </div>
        <div class="panel_4">
          <p class="panel_4_titulo">DOMICILIO ACTUAL</p>
          <div class="panel_4_flex1">
            <label for="" class="panel_4_flex1_label">Región
              <input type="text">
            </label>
            <label for="" class="panel_4_flex1_label">Provincia
              <input type="text">
            </label>
            <label for="" class="panel_4_flex1_label">Distrito
              <input type="text">
            </label>
          </div>
          <div class="panel_4_flex2">
            <label for="" class="panel_4_flex2_label"><span>Avenida / Calle / Jirón</span>
              <input class="input1" type="text">
            </label>
          </div>
          <div class="panel_4_flex3">
            <label class="panel_4_flex3_label" for="">Urbanización – Sector – Caserío
              <input type="text">
            </label>
            <label class="panel_4_flex3_label" for="">Teléfono
              <input type="text">
            </label>
          </div>
          <div class="panel_4_flex4">
            <label class="panel_4_flex4_label" for="">Correo Electrónico
              <input type="text">
            </label>
          </div>
        </div>
        <div class="panel_5">
          <p class="panel_5_titulo">DECLARACIÓN JURADA DE NO PERTENCER A OTRA ORGANIZACIÓN POLÍTICA</p>
          <p class="panel_5_parrafo">Yo…………………………………………………………………………………………………… con DNI N°…………………………………con domicilio legal en (Calle, Av.) …...……………………………………………………Distrito…………………………………Provincia…………………………………. Región ………………………, decido afiliarme libre y voluntariamente a la Organización Política…………………...… y al amparo del Artículo 18° de la Ley N° 28094 “Ley de Partidos Políticos”, para lo cuál <strong>DECLARO BAJO JURAMENTO NO PERTENECER A OTRA ORGANIZACIÓN POLÍTICA.</strong> Por tanto, de acuerdo a la Ley, me sujeto a las prerrogativas que corresponde, para lo cual firmo la presente Declaración Jurada.</p>
        </div>
        <div class="panel_6">
          <div class="firma_afiliado">
            ______________________________ <br>
            Firma del Afiliado <br>
            (Igual a la firma del D.N.I)
          </div>
          <div class="huella_digital">
            <div class="bloque"></div>
            <p>HUELLA DIGITAL</p>
          </div>
        </div>
      </main>
      <div class="paraguas">
        <img src="ficha/paraguas.png" alt="">
      </div>
    </header>
    <button (click)="printContent()">Imprimir</button>
  `,
  styleUrls: ['./fichaAfiliacionDinamico.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichaAfiliacionDinamicoComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  printContent() {
    if (isPlatformBrowser(this.platformId)) {
      const printContents = document.getElementById('print-section')?.innerHTML; // Captura el contenido a imprimir
      const styles = document.querySelectorAll('style, link[rel="stylesheet"]'); // Captura todos los estilos
  
      if (printContents) {
        const popupWindow = window.open('', '_blank', 'width=595,height=842'); // Tamaño A4 en píxeles
        popupWindow?.document.open();
        popupWindow?.document.write(`
          <html>
            <head>
              <title>Imprimir</title>
              ${Array.from(styles).map(style => style.outerHTML).join('')} <!-- Inserta los estilos -->
              <style>
                @media print {
                  body {
                    margin: 0;
                    padding: 0;
                    width: 595px; /* Ancho A4 */
                    height: 842px; /* Alto A4 */
                    overflow: hidden; /* Oculta contenido desbordante */
                  }
                }
              </style>
            </head>
            <body onload="window.print(); window.close()">
              ${printContents} <!-- Contenido a imprimir -->
            </body>
          </html>
        `);
        popupWindow?.document.close();
      }
    }
  }
  
}
