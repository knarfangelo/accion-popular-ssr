import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importar HttpClient
import { IFichaAfiliacion } from './mantenimiento/fichaAfiliacion';

@Component({
  selector: 'app-ficha-afiliacion-dinamico',
  standalone: true,
  imports: [
    CommonModule,
    NgxPrintModule,
    NavegacionComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule

  ],
  template: `
   <app-navegacion></app-navegacion>
  <div class="opciones">
    <div class="responsive">
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
            <form [formGroup]="form"> <!-- Vincula el formulario -->
              <div class="panel_3_flex1">
                <label class="panel_3_flex1_label">Apellido Paterno
                  <input class="input1" formControlName="apellidoPaterno"> <!-- Cambia [(ngModel)] por formControlName -->
                </label>
                <label class="panel_3_flex1_label">Apellido Materno
                  <input class="input2" formControlName="apellidoMaterno">
                </label>
                <label class="panel_3_flex1_label">Nombres
                  <input type="text" formControlName="nombres">
                </label>
              </div>

              <div class="panel_3_flex2">
                <label class="panel_3_flex2_label">DNI
                  <input class="input1" formControlName="dni">
                </label>
                <label class="panel_3_flex2_label">Fecha de Nacimiento
                  <input class="input2" formControlName="fechaNacimiento">
                </label>
                <label class="panel_3_flex2_label">Estado Civil
                  <input class="input3" formControlName="estadoCivil">
                </label>
                <label class="panel_3_flex2_label">Sexo
                  <input class="input4" formControlName="sexo">
                </label>
              </div>

              <div class="panel_3_flex3">
                <label class="panel_3_flex3_label">Lugar de Nacimiento: Región / Provincia / Distrito
                  <input class="input1" formControlName="lugarNacimiento">
                </label>
              </div>
            </form>
          </div>

          <div class="panel_4">
            <p class="panel_4_titulo">DOMICILIO ACTUAL</p>
            <form [formGroup]="form">
              <div class="panel_4_flex1">
                <label class="panel_4_flex1_label">Región
                  <input type="text" formControlName="regionActual">
                </label>
                <label class="panel_4_flex1_label">Provincia
                  <input type="text" formControlName="provinciaActual">
                </label>
                <label class="panel_4_flex1_label">Distrito
                  <input type="text" formControlName="distritoActual">
                </label>
              </div>

              <div class="panel_4_flex2">
                <label class="panel_4_flex2_label"><span>Avenida / Calle / Jirón</span>
                  <input class="input1" type="text" formControlName="direccion">
                </label>
              </div>

              <div class="panel_4_flex3">
                <label class="panel_4_flex3_label">Urbanización – Sector – Caserío
                  <input type="text" formControlName="urbanizacion">
                </label>
                <label class="panel_4_flex3_label">Teléfono
                  <input type="text" formControlName="telefono">
                </label>
              </div>
              <div class="panel_4_flex4">
                <label class="panel_4_flex4_label">Correo Electrónico
                  <input type="text" formControlName="correo">
                </label>
              </div>
            </form>
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
      </div>
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

  fechaActual: string = '';
  form: FormGroup; // Declarar el grupo de formulario
  datosFormulario: IFichaAfiliacion | undefined;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private http: HttpClient,
    private fb: FormBuilder // Inyección de FormBuilder
  ) {
    // Inicializar el formulario
    this.form = this.fb.group({
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      nombres: [''],
      dni: [''],
      fechaNacimiento: [''],
      estadoCivil: [''],
      sexo: [''],
      lugarNacimiento: [''],
      regionActual: [''],
      provinciaActual: [''],
      distritoActual: [''],
      direccion: [''],
      urbanizacion: [''],
      telefono: [''],
      correo: [''],
    });
    
  // Obtener la navegación actual
  const navigation = this.router.getCurrentNavigation();
  this.datosFormulario = navigation?.extras.state?.['data'];

  // Rellenar el formulario si los datos están disponibles
  if (this.datosFormulario) {
    this.form.patchValue(this.datosFormulario);
  }
  
  console.log(this.datosFormulario);
  }


  // Método para imprimir el contenido
  printContent() {
    console.log(this.form.value);
     if (isPlatformBrowser(this.platformId)) {
          window.print();
        }
    const authHeader = 'Basic ' + btoa('uv60tv11rhvxe:frankangelo75967915');

    // Guardar los datos en la base de datos
    this.http.post('/api', this.form.value, {
      headers: { 'Authorization': authHeader }
    }).subscribe(
      (response) => {
        console.log('Datos guardados exitosamente:', response);
        // Proceder a imprimir
       
      },
      (error) => {
        console.error('Error al guardar los datos:', error);
      }
    );
    
  }
  guardarPDF() {
    const content = document.getElementById('print-section');
    if (!content) {
      console.error('No se encontró el contenido para imprimir.');
      return;
    }
  
    html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190; // Ajusta el ancho según sea necesario
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
  
      let position = 0;
  
      // Agrega una nueva página si la imagen es más alta que la página
      if (heightLeft >= pageHeight) {
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
  
        while (heightLeft >= 0) {
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
          position -= pageHeight;
        }
      } else {
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      }
  
      pdf.save('ficha_afiliacion.pdf'); // Guardar el PDF con un nombre
    });
  }
  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const data = navigation.extras.state['data'] as IFichaAfiliacion;
      if (data) {
        this.form.patchValue(data); // Rellena el formulario con los datos
      }
    }
    const currentDate = new Date();
    this.fechaActual = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  }
}
