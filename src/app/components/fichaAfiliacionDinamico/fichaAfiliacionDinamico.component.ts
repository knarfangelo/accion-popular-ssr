import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { FormsModule } from '@angular/forms';

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
  <button class="boton-imprimir" (click)="printContent()">Imprimir</button>
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
          <input type="text" [value]="fechaActual">
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
        <label class="panel_3_flex1_label" for="">Apellido Materno o del esposo
          <input class="input2" type="text" [(ngModel)]="apellidoMaterno">
        </label>
        <label class="panel_3_flex1_label" for="">Nombres
        <input type="text" [(ngModel)]="nombres" (ngModelChange)="updateDatosAfiliacion()">
        </label>
      </div>

        <div class="panel_3_flex2">
          <label class="panel_3_flex2_label" for="">DNI
            <input class="input1" type="text" [(ngModel)]="datosAfiliacion.dni">
          </label>
          <label class="panel_3_flex2_label" for="">Fecha de Nacimiento
            <input class="input2" type="text" [value]="datosAfiliacion?.fechaNacimiento ?? ''">
          </label>
          <label class="panel_3_flex2_label" for="">Estado Civil
            <input class="input3" type="text" [value]="datosAfiliacion?.estadoCivil ?? ''">
          </label>
          <label class="panel_3_flex2_label" for="">Sexo
            <input class="input4" type="text" [value]="datosAfiliacion?.sexo ?? ''">
          </label>
        </div>

        <div class="panel_3_flex3">
          <label class="panel_3_flex3_label" for="">Lugar de Nacimiento: Región / Provincia / Distrito
            <input class="input1" type="text" [value]="(datosAfiliacion?.departamentoNacimiento ?? '') + ' / ' + (datosAfiliacion?.provinciaNacimiento ?? '') + ' / ' + (datosAfiliacion?.distritoNacimiento ?? '')">
          </label>
        </div>
      </div>

      <div class="panel_4">
        <p class="panel_4_titulo">DOMICILIO ACTUAL</p>
        <div class="panel_4_flex1">
          <label for="" class="panel_4_flex1_label">Región
            <input type="text" [(ngModel)]="datosAfiliacion.departamentoDomicilio">
          </label>
          <label for="" class="panel_4_flex1_label">Provincia
            <input type="text" [(ngModel)]="datosAfiliacion.provinciaDomicilio">
          </label>
          <label for="" class="panel_4_flex1_label">Distrito
            <input type="text" [(ngModel)]="datosAfiliacion.distritoDomicilio">
          </label>
        </div>

        <div class="panel_4_flex2">
          <label for="" class="panel_4_flex2_label"><span>Avenida / Calle / Jirón</span>
            <input class="input1" type="text" [(ngModel)]="datosAfiliacion.direccion">
          </label>
        </div>

        <div class="panel_4_flex3">
          <label class="panel_4_flex3_label" for="">Urbanización – Sector – Caserío
            <input type="text" [value]="datosAfiliacion?.urbanizacion ?? ''">
          </label>
          <label class="panel_4_flex3_label" for="">Teléfono
            <input type="text" [value]="datosAfiliacion?.telefono ?? ''">
          </label>
        </div>

        <div class="panel_4_flex4">
          <label class="panel_4_flex4_label" for="">Correo Electrónico
            <input type="text" [value]="datosAfiliacion?.correo ?? ''">
          </label>
        </div>
      </div>

      <div class="panel_5">
<!--
      <div class="panel_5_flotante">
        <p class="nombres-apellidos">{{ datosAfiliacion?.nombres }} {{ apellidoPaterno }} {{ apellidoMaterno }}</p>
        <p class="dni">{{ datosAfiliacion?.dni }}</p>
        <p class="calle-avenida">{{ datosAfiliacion?.direccion }}</p>
        <p class="distrito">{{ datosAfiliacion?.distritoDomicilio }}</p>
        <p class="provincia">{{ datosAfiliacion?.provinciaDomicilio }}</p>
        <p class="region">{{ datosAfiliacion?.departamentoDomicilio }}</p>
        <p class="ap">Acción Popular</p>
      </div> -->
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngOnInit(): void {
    // Recoger los datos del state (opción recomendada)
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.datosAfiliacion = this.router.getCurrentNavigation()?.extras.state?.['datosFormulario'];
    } else {
      // Alternativamente, recoger los datos del localStorage si se guardaron allí
      this.datosAfiliacion = JSON.parse(localStorage.getItem('fichaAfiliacion') || '{}');
    }

    // Asignar los apellidos a la variable correspondiente
    this.apellidos = this.datosAfiliacion?.apellidos || ''; // Asegúrate de que aquí se capture correctamente

    // Llama a la función para separar apellidos
    this.separarApellidos();
    this.nombres = this.datosAfiliacion?.nombres || ''; // Asignar nombres iniciales
    this.formatoFecha();
  }

  // Esta función se llama cada vez que el contenido del campo de apellidos cambia
  separarApellidos() {
    const partes = this.apellidos.split(' '); // Separar los apellidos por espacio

    if (partes.length >= 2) {
      this.apellidoPaterno = partes[0]; // Primer apellido (paterno)
      this.apellidoMaterno = partes[1]; // Segundo apellido (materno)
    } else {
      this.apellidoPaterno = partes[0] || ''; // Si solo hay un apellido, asignar
      this.apellidoMaterno = ''; // Si no hay segundo apellido, dejar vacío
    }
  }

  // Función para actualizar datosAfiliacion con los nuevos valores
  updateDatosAfiliacion() {
    if (this.datosAfiliacion) {
      this.datosAfiliacion.nombres = this.nombres;
      this.datosAfiliacion.apellidos = `${this.apellidoPaterno} ${this.apellidoMaterno}`;
    }
  }

  formatoFecha() {
    const hoy = new Date();
    const year = hoy.getFullYear();
    const month = ('0' + (hoy.getMonth() + 1)).slice(-2); // Agrega cero a la izquierda si es necesario
    const day = ('0' + hoy.getDate()).slice(-2); // Agrega cero a la izquierda si es necesario
    this.fechaActual = `${year}-${month}-${day}`; // Formato yyyy-mm-dd
  }

  printContent() {
    if (isPlatformBrowser(this.platformId)) {
      window.print();
    }
  }


}
