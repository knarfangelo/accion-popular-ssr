import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgxPrintModule } from 'ngx-print';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
                    <input class="input1" formControlName="apellidoPaterno" #apellidoPaterno 
                      [placeholder]="form.get('apellidoPaterno')?.invalid && form.get('apellidoPaterno')?.touched ? 'Apellido Paterno es obligatorio.' : ''" 
                      [ngClass]="{'input-error': form.get('apellidoPaterno')?.invalid && form.get('apellidoPaterno')?.touched}">
                  </label>
                  <label class="panel_3_flex1_label">Apellido Materno
                    <input class="input2" formControlName="apellidoMaterno" 
                      [placeholder]="form.get('apellidoMaterno')?.invalid && form.get('apellidoMaterno')?.touched ? 'Apellido Materno es obligatorio.' : ''"
                      [ngClass]="{'input-error': form.get('apellidoMaterno')?.invalid && form.get('apellidoMaterno')?.touched}">
                  </label>
                  <label class="panel_3_flex1_label">Nombres
                    <input type="text" formControlName="nombres" 
                      [placeholder]="form.get('nombres')?.invalid && form.get('nombres')?.touched ? 'Nombres son obligatorios.' : ''"
                      [ngClass]="{'input-error': form.get('nombres')?.invalid && form.get('nombres')?.touched}">
                  </label>
                </div>

                <div class="panel_3_flex2">
                  <label class="panel_3_flex2_label">DNI
                    <input class="input1" formControlName="dni" type="text" maxlength="8" required 
                      (input)="validateDNILength($event)" (keypress)="allowOnlyNumbers($event)" 
                      [placeholder]="form.get('dni')?.invalid && form.get('dni')?.touched ? 'DNI es obligatorio.' : ''"
                      [ngClass]="{'input-error': form.get('dni')?.invalid && form.get('dni')?.touched}">
                  </label>

                  <label class="panel_3_flex2_label">Fecha de Nacimiento
                    <input class="input2" type="date" formControlName="fechaNacimiento" 
                      [placeholder]="form.get('fechaNacimiento')?.invalid && form.get('fechaNacimiento')?.touched ? 'Fecha de Nacimiento es obligatoria.' : ''"
                      [ngClass]="{'input-error': form.get('fechaNacimiento')?.invalid && form.get('fechaNacimiento')?.touched}">
                  </label>
                  <label class="panel_3_flex2_label">Estado Civil
                    <input class="input3" formControlName="estadoCivil" 
                      [placeholder]="form.get('estadoCivil')?.invalid && form.get('estadoCivil')?.touched ? 'Estado Civil es obligatorio.' : ''"
                      [ngClass]="{'input-error': form.get('estadoCivil')?.invalid && form.get('estadoCivil')?.touched}">
                  </label>
                  <label class="panel_3_flex2_label">Sexo
                    <input class="input4" formControlName="sexo" 
                      [placeholder]="form.get('sexo')?.invalid && form.get('sexo')?.touched ? 'genero.' : ''"
                      [ngClass]="{'input-error': form.get('sexo')?.invalid && form.get('sexo')?.touched}">
                  </label>
                </div>

                <div class="panel_3_flex3">
                  <label class="panel_3_flex3_label">Lugar de Nacimiento: Región / Provincia / Distrito
                    <input class="input1" formControlName="lugarNacimiento" 
                      [placeholder]="form.get('lugarNacimiento')?.invalid && form.get('lugarNacimiento')?.touched ? 'Lugar de Nacimiento es obligatorio.' : ''"
                      [ngClass]="{'input-error': form.get('lugarNacimiento')?.invalid && form.get('lugarNacimiento')?.touched}">
                  </label>
                </div>
              </form>
            </div>

            <div class="panel_4">
              <p class="panel_4_titulo">DOMICILIO ACTUAL</p>
              <form [formGroup]="form">
                <div class="panel_4_flex1">
                  <label class="panel_4_flex1_label">Región
                    <input type="text" formControlName="regionActual" 
                      [placeholder]="form.get('regionActual')?.invalid && form.get('regionActual')?.touched ? 'Región es obligatoria.' : ''"
                      [ngClass]="{'input-error': form.get('regionActual')?.invalid && form.get('regionActual')?.touched}">
                  </label>
                  <label class="panel_4_flex1_label">Provincia
                    <input type="text" formControlName="provinciaActual" 
                      [placeholder]="form.get('provinciaActual')?.invalid && form.get('provinciaActual')?.touched ? 'Provincia es obligatoria.' : ''"
                      [ngClass]="{'input-error': form.get('provinciaActual')?.invalid && form.get('provinciaActual')?.touched}">
                  </label>
                  <label class="panel_4_flex1_label">Distrito
                    <input type="text" formControlName="distritoActual" 
                      [placeholder]="form.get('distritoActual')?.invalid && form.get('distritoActual')?.touched ? 'Distrito es obligatorio.' : ''"
                      [ngClass]="{'input-error': form.get('distritoActual')?.invalid && form.get('distritoActual')?.touched}">
                  </label>
                </div>

                <div class="panel_4_flex2">
                  <label class="panel_4_flex2_label"><span>Avenida / Calle / Jirón</span>
                    <input class="input1" type="text" formControlName="direccion" 
                      [placeholder]="form.get('direccion')?.invalid && form.get('direccion')?.touched ? 'Dirección es obligatoria.' : ''"
                      [ngClass]="{'input-error': form.get('direccion')?.invalid && form.get('direccion')?.touched}">
                  </label>
                </div>

                <div class="panel_4_flex3">
                  <label class="panel_4_flex3_label">Urbanización – Sector – Caserío
                    <input type="text" formControlName="urbanizacion" 
                      [placeholder]="form.get('urbanizacion')?.invalid && form.get('urbanizacion')?.touched ? 'Urbanización es obligatoria.' : ''"
                      [ngClass]="{'input-error': form.get('urbanizacion')?.invalid && form.get('urbanizacion')?.touched}">
                  </label>
                  <label class="panel_4_flex3_label">Teléfono
                    <input type="text" formControlName="telefono" 
                      [placeholder]="form.get('telefono')?.invalid && form.get('telefono')?.touched ? 'Teléfono es obligatorio.' : ''"
                      [ngClass]="{'input-error': form.get('telefono')?.invalid && form.get('telefono')?.touched}">
                  </label>
                </div>

                <div class="panel_4_flex4">
                  <label class="panel_4_flex4_label">Correo Electrónico
                    <input type="text" formControlName="correo" 
                      [placeholder]="form.get('correo')?.invalid && form.get('correo')?.touched ? 'Correo es obligatorio.' : ''"
                      [ngClass]="{'input-error': form.get('correo')?.invalid && form.get('correo')?.touched}">
                  </label>
                </div>
              </form>
            </div>

            <div class="panel_5">
  <p class="panel_5_titulo">DECLARACIÓN JURADA DE NO PERTENCER A OTRA ORGANIZACIÓN POLÍTICA</p>
  <p class="panel_5_parrafo">
    Yo <strong>{{ form.get('nombres')?.value || '________________' }}</strong> &nbsp;
    <strong>{{ form.get('apellidoPaterno')?.value || '________________' }}</strong>&nbsp;
    <strong>{{ form.get('apellidoMaterno')?.value || '________________' }}</strong>
    con DNI N° <strong>{{ form.get('dni')?.value || '________________' }}</strong> 
    con domicilio legal en (Calle, Av.) <strong>{{ form.get('direccion')?.value || '________________' }}</strong> 
    Distrito <strong>{{ form.get('distritoActual')?.value || '________________' }}</strong> 
    Provincia <strong>{{ form.get('provinciaActual')?.value || '________________' }}</strong> 
    Región <strong>{{ form.get('regionActual')?.value || '________________' }}</strong>, 
    decido afiliarme libre y voluntariamente a la Organización Política ACCIÓN POPULAR y al amparo del Artículo 18° de la Ley N° 28094 “Ley de Partidos Políticos”, 
    para lo cual <strong>DECLARO BAJO JURAMENTO NO PERTENECER A OTRA ORGANIZACIÓN POLÍTICA.</strong> Por tanto, de acuerdo a la Ley, me sujeto a las prerrogativas que corresponde, para lo cual firmo la presente Declaración Jurada.
  </p>
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
      <p class="parrafo">❗Recuerda que el proceso de unirte a nuestro partido aún no ha terminado, es importante que firmes y coloques tu huella dactilar en la ficha de afiliación impresa. Luego debes entregarlo al secretario distrital de tu jurisdicción</p>
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
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      nombres: ['', Validators.required],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]], // 8 dígitos
      fechaNacimiento: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      sexo: ['', Validators.required],
      lugarNacimiento: ['', Validators.required],
      regionActual: ['', Validators.required],
      provinciaActual: ['', Validators.required],
      distritoActual: ['', Validators.required],
      direccion: ['', Validators.required],
      urbanizacion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
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
    if (this.form.invalid) {
      // Marcar todos los campos como tocados para mostrar los errores
      this.form.markAllAsTouched();
      console.error('Por favor completa todos los campos obligatorios.');
      return; // Detener la ejecución si el formulario no es válido
    }

    console.log(this.form.value);
    
    if (isPlatformBrowser(this.platformId)) {
      window.print();
    }
    
    this.terminoProceso = false;

    const dni = this.form.get('dni')?.value;
    if (!dni || dni.length !== 8) {
      console.error('El DNI debe tener exactamente 8 dígitos.');
      return; 
    }

    const authHeader = 'Basic ' + btoa('uv60tv11rhvxe:frankangelo75967915');

    this.http.post('https://accionpopular.com.pe/api/api2.php', this.form.value, {
      headers: { 'Authorization': authHeader }
    }).subscribe(
      (response) => {
        console.log('Datos guardados exitosamente:', response);
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
