import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importar HttpClient

@Component({
  selector: 'app-ficha-afiliacion-dinamico',
  standalone: true,
  imports: [
    CommonModule,
    NgxPrintModule,
    NavegacionComponent,
    FooterComponent,
    FormsModule
  ],
  template: `
  <app-navegacion></app-navegacion>
  <div class="opciones">
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
              <input type="text" [value]="fechaActual" readonly>
            </div>
            <p class="panel_2_parrafo">
              Por medio del presente manifiesto mi decisión de AFILIARME a la organización política ACCIÓN POPULAR comprometiéndome a cumplir con su estatuto y demás normas internas. En fe de lo <br> cual firmo el presente documento:
            </p>
          </div>

          <div class="panel_3">
            <p class="panel_3_titulo">DATOS PERSONALES</p>
            <div class="panel_3_flex1">
              <label class="panel_3_flex1_label" for="">Apellido Paterno
                <input class="input1" type="text" [(ngModel)]="apellidoPaterno">
              </label>
              <label class="panel_3_flex1_label" for="">Apellido Materno
                <input class="input2" type="text" [(ngModel)]="apellidoMaterno">
              </label>
              <label class="panel_3_flex1_label" for="">Nombres
                <input type="text" [(ngModel)]="nombres">
              </label>
            </div>

            <div class="panel_3_flex2">
              <label class="panel_3_flex2_label" for="">DNI
                <input class="input1" type="text" [(ngModel)]="dni">
              </label>
              <label class="panel_3_flex2_label" for="">Fecha de Nacimiento
                <input class="input2" type="text" [(ngModel)]="fechaNacimiento">
              </label>
              <label class="panel_3_flex2_label" for="">Estado Civil
                <input class="input3" type="text" [(ngModel)]="estadoCivil">
              </label>
              <label class="panel_3_flex2_label" for="">Sexo
                <input class="input4" type="text" [(ngModel)]="sexo">
              </label>
            </div>

            <div class="panel_3_flex3">
              <label class="panel_3_flex3_label" for="">Lugar de Nacimiento: Región / Provincia / Distrito
                <input class="input1" type="text" [(ngModel)]="lugarNacimiento">
              </label>
            </div>
          </div>

          <div class="panel_4">
            <p class="panel_4_titulo">DOMICILIO ACTUAL</p>
            <div class="panel_4_flex1">
              <label for="" class="panel_4_flex1_label">Región
                <input type="text" [(ngModel)]="regionDomicilio">
              </label>
              <label for="" class="panel_4_flex1_label">Provincia
                <input type="text" [(ngModel)]="provinciaDomicilio">
              </label>
              <label for="" class="panel_4_flex1_label">Distrito
                <input type="text" [(ngModel)]="distritoDomicilio">
              </label>
            </div>

            <div class="panel_4_flex2">
              <label for="" class="panel_4_flex2_label"><span>Avenida / Calle / Jirón</span>
                <input class="input1" type="text" [(ngModel)]="direccion">
              </label>
            </div>

            <div class="panel_4_flex3">
              <label class="panel_4_flex3_label" for="">Urbanización – Sector – Caserío
                <input type="text" [(ngModel)]="urbanizacion">
              </label>
              <label class="panel_4_flex3_label" for="">Teléfono
                <input type="text" [(ngModel)]="telefono">
              </label>
            </div>
            <div class="panel_4_flex4">
              <label class="panel_4_flex4_label" for="">Correo Electrónico
                <input type="text" [(ngModel)]="correo">
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
      <div class="botones">
        <button class="boton-imprimir" (click)="printContent()">IMPRIME TU FICHA</button>
      </div>
  </div>
  <app-footer></app-footer>
  `,
  styleUrls: ['./fichaAfiliacionDinamico.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichaAfiliacionDinamicoComponent {
  datosAfiliacion: any;
  fechaActual: string = '';
  apellidos: string = ''; // Campo donde el usuario ingresa ambos apellidos
  apellidoPaterno: string = ''; // Para almacenar el apellido paterno
  apellidoMaterno: string = ''; // Para almacenar el apellido materno
  nombres: string = ''; // Añadido para enlazar los nombres
  dni: string = ''; // DNI
  fechaNacimiento: string = ''; // Fecha de nacimiento
  estadoCivil: string = ''; // Estado civil
  sexo: string = ''; // Sexo
  lugarNacimiento: string = ''; // Lugar de nacimiento
  regionDomicilio: string = ''; // Región de domicilio
  provinciaDomicilio: string = ''; // Provincia de domicilio
  distritoDomicilio: string = ''; // Distrito de domicilio
  direccion: string = ''; // Dirección
  urbanizacion: string = ''; // Urbanización
  telefono: string = ''; // Teléfono
  correo: string = ''; // Correo electrónico

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private http: HttpClient // Inyección de HttpClient
  ) {}

  // Método para enviar los datos a la API
  enviarDatos() {
    const datos = {
      nombres: this.nombres,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      dni: this.dni,
      fechaNacimiento: this.fechaNacimiento,
      estadoCivil: this.estadoCivil,
      sexo: this.sexo,
      lugarNacimiento: this.lugarNacimiento,
      regionDomicilio: this.regionDomicilio,
      provinciaDomicilio: this.provinciaDomicilio,
      distritoDomicilio: this.distritoDomicilio,
      direccion: this.direccion,
      urbanizacion: this.urbanizacion,
      telefono: this.telefono,
      correo: this.correo,
    };
    console.log(datos);

    const apiUrl = '/api'; // Ruta del proxy

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('uv60tv11rhvxe:frankangelo75967915')
    });

    this.http.post(apiUrl, datos, { headers }).subscribe({
      next: (response) => {
        console.log('Datos enviados correctamente', response);
      },
      error: (error) => {
        console.error('Error al enviar los datos', error);
      }
    });
  }

  // Método para imprimir el contenido
  printContent() {
    this.enviarDatos(); // Envía los datos antes de imprimir
    if (isPlatformBrowser(this.platformId)) {
      window.print();
    }
  }

  ngOnInit(): void {
    const currentDate = new Date();
    this.fechaActual = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  }
}
