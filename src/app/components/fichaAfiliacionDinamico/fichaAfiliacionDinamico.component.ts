import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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
    RouterLink,
    CommonModule,
    NgxPrintModule,
    NavegacionComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule

  ],
  template: `
  <div class="contenedor__color">
   <app-navegacion></app-navegacion>
   @if(terminoProceso){

 
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
                  <input class="input1" formControlName="apellidoPaterno" #apellidoPaterno> <!-- Cambia [(ngModel)] por formControlName -->
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
  <input class="input1" formControlName="dni" type="text" maxlength="8" required 
         (input)="validateDNILength($event)" (keypress)="allowOnlyNumbers($event)">
            </label>



                <label class="panel_3_flex2_label">Fecha de Nacimiento
                  <input class="input2" type="date" formControlName="fechaNacimiento">
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
  </div>  }
  @else{
    <div class="contenedor__reaccion">
    <div class="reaccion">
      <h3 class="reaccion__titulo">EL PROCESO AÚN NO TERMINA</h3>
      <p class="parrafo">Recuerda que para continuar con el proceso de afiliación tienes que firmar esta ficha de afiliación, poner tu huella dactilar y entregarla en físico a tu dirigente o llevarla al local de Acción Popular más cercano.</p>
      <button class="button" routerLink="/">REGRESAR AL INICIO</button>
    </div> 
    </div>
  }
  <app-footer></app-footer></div>
  `,
  styleUrls: ['./fichaAfiliacionDinamico.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FichaAfiliacionDinamicoComponent {

  @ViewChild('apellidoPaterno') apellidoPaternoInput!: ElementRef; 
  fechaActual: string = '';
  form: FormGroup; // Declarar el grupo de formulario
  datosFormulario: IFichaAfiliacion | undefined;
  terminoProceso: boolean = true;
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

  // Rellenar el formulario si los datos están dFisponibles
  if (this.datosFormulario) {
    this.form.patchValue(this.datosFormulario);
  }
  
  console.log(this.datosFormulario);
  }

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)){
    this.apellidoPaternoInput.nativeElement.focus(); }
  }

  // Método para imprimir el contenido
  printContent() {
    console.log(this.form.value);
    if (isPlatformBrowser(this.platformId)) {
      window.print();
    }
    this.terminoProceso = false;
    // Validar que el campo DNI no esté vacío y tenga 8 caracteres
    const dni = this.form.get('dni')?.value;
    if (!dni || dni.length !== 8) {
      console.error('El DNI debe tener exactamente 8 dígitos.');
      return; // Detener la ejecución si la validación falla
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

  validateDNILength(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 8) {
      input.value = input.value.slice(0, 8); // Recorta el valor a 8 caracteres
    }
  }
  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = (event.which) ? event.which : event.keyCode;
    // Permite solo números (48-57 son los códigos ASCII para '0'-'9')
    if (charCode < 48 || charCode > 57) {
      event.preventDefault(); // Previene la entrada de otros caracteres
    }
  }
  
}
