import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../Api.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Importar el módulo de formularios reactivos
    NavegacionComponent,
    FooterComponent
  ],
  template: `
    <app-navegacion></app-navegacion>
    
    <header>
      @if( formularioReaccion ) {
    <form [formGroup]="formulario" (ngSubmit)="enviarFormulario()" class="formulario">
  <h1>Bienvenido</h1>
  <p>Afíliate completando este formulario para ser parte de nuestro gran partido, y construyamos juntos el país que merecemos.</p>

  <label for="nombres" class="nombres"><span>Nombres</span>
    <input formControlName="nombres" id="nombres" type="text" placeholder="Tus nombres" required>
    <div *ngIf="formulario.get('nombres')?.invalid && formulario.get('nombres')?.touched" class="error-message">
      El campo nombres es obligatorio.
    </div>
  </label>

  <label for="apellidos" class="apellidos"><span>Apellidos</span>
    <input formControlName="apellidos" id="apellidos" type="text" placeholder="Tus apellidos" required>
    <div *ngIf="formulario.get('apellidos')?.invalid && formulario.get('apellidos')?.touched" class="error-message">
      El campo apellidos es obligatorio.
    </div>
  </label>

  <label for="correo"><span>Correo electronico</span>
    <input formControlName="correo" id="correo" type="email" placeholder="ejemplo@gmail.com" required>
    <div *ngIf="formulario.get('correo')?.invalid && formulario.get('correo')?.touched" class="error-message">
      Debes ingresar un correo electrónico válido.
    </div>
  </label>

  <label for="dni"><span>DNI</span>
    <input formControlName="dni" id="dni" type="number" placeholder="78896610" required>
    <div *ngIf="formulario.get('dni')?.invalid && formulario.get('dni')?.touched" class="error-message">
      Debes ingresar un DNI válido.
    </div>
  </label>

  <label for="fechaNacimiento"><span>Fecha de Nacimiento</span>
    <input formControlName="fechaNacimiento" id="fechaNacimiento" type="date" required>
    <div *ngIf="formulario.get('fechaNacimiento')?.invalid && formulario.get('fechaNacimiento')?.touched" class="error-message">
      Debes seleccionar una fecha de nacimiento.
    </div>
  </label>

  <div class="container">
    <h3>Lugar de nacimiento</h3>
    <div class="linea"></div>
  </div>

  <label for="departamentoNacimiento"><span>Departamento</span>
    <select formControlName="departamentoNacimiento" id="departamentoNacimiento" class="direccion" (change)="onDepartamentoNacimientoChange($event)">
      <option value="">Selecciona departamento</option>
      <option *ngFor="let dep of departamentosNacimiento" [value]="dep">{{dep}}</option>
    </select>
    <div *ngIf="formulario.get('departamentoNacimiento')?.invalid && formulario.get('departamentoNacimiento')?.touched" class="error-message">
      Debes seleccionar un departamento de nacimiento.
    </div>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <label for="provinciaNacimiento"><span>Provincia</span>
    <select formControlName="provinciaNacimiento" id="provinciaNacimiento" class="direccion" (change)="onProvinciaNacimientoChange($event)">
      <option value="">Selecciona provincia</option>
      <option *ngFor="let prov of provinciasNacimiento" [value]="prov">{{prov}}</option>
    </select>
    <div *ngIf="formulario.get('provinciaNacimiento')?.invalid && formulario.get('provinciaNacimiento')?.touched" class="error-message">
      Debes seleccionar una provincia de nacimiento.
    </div>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <label for="distritoNacimiento"><span>Distrito</span>
    <select formControlName="distritoNacimiento" id="distritoNacimiento" class="direccion">
      <option value="">Selecciona distrito</option>
      <option *ngFor="let dist of distritosNacimiento" [value]="dist">{{dist}}</option>
    </select>
    <div *ngIf="formulario.get('distritoNacimiento')?.invalid && formulario.get('distritoNacimiento')?.touched" class="error-message">
      Debes seleccionar un distrito de nacimiento.
    </div>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <div class="container">
    <h3>Domicilio actual</h3>
    <div class="linea"></div>
  </div>

  <label for="departamentoDomicilio"><span>Departamento</span>
    <select formControlName="departamentoDomicilio" id="departamentoDomicilio" class="direccion" (change)="onDepartamentoDomicilioChange($event)">
      <option value="">Selecciona departamento</option>
      <option *ngFor="let dep of departamentosDomicilio" [value]="dep">{{dep}}</option>
    </select>
    <div *ngIf="formulario.get('departamentoDomicilio')?.invalid && formulario.get('departamentoDomicilio')?.touched" class="error-message">
      Debes seleccionar un departamento de domicilio.
    </div>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <label for="provinciaDomicilio"><span>Provincia</span>
    <select formControlName="provinciaDomicilio" id="provinciaDomicilio" class="direccion" (change)="onProvinciaDomicilioChange($event)">
      <option value="">Selecciona provincia</option>
      <option *ngFor="let prov of provinciasDomicilio" [value]="prov">{{prov}}</option>
    </select>
    <div *ngIf="formulario.get('provinciaDomicilio')?.invalid && formulario.get('provinciaDomicilio')?.touched" class="error-message">
      Debes seleccionar una provincia de domicilio.
    </div>
  </label>

  <label for="distritoDomicilio"><span>Distrito</span>
    <select formControlName="distritoDomicilio" id="distritoDomicilio" class="direccion">
      <option value="">Selecciona distrito</option>
      <option *ngFor="let dist of distritosDomicilio" [value]="dist">{{dist}}</option>
    </select>
    <div *ngIf="formulario.get('distritoDomicilio')?.invalid && formulario.get('distritoDomicilio')?.touched" class="error-message">
      Debes seleccionar un distrito de domicilio.
    </div>
  </label>

  <label class="checkbox terminos-condiciones-label" for="">
    <div class="terminos-condiciones">
    <input formControlName="terminos" type="checkbox" required>
    <p>Al continuar, confirmo que he leído y acepto los Términos y Condiciones</p></div>
    <div *ngIf="formulario.get('terminos')?.invalid && formulario.get('terminos')?.touched" class="error-message terminos-condiciones-error">
      Debes aceptar los términos y condiciones.
    </div>
  </label>

  <input class="submit" type="submit" value="Enviar">
</form>
} @else {
      <section class="reaccion-registro">
      <div class="contenido">
      <h1 class="responsive">
      GRACIAS POR UNIRTE <br> 
      A ACCIÓN POPULAR
      </h1>
      <img class="pala" src="icons/pala-accion-popular.svg" alt="pala sin fondo de accion popular"></div>
      <a href="" class="regresar-inicio">REGRESAR AL INICIO</a>
      </section>
    }
    </header>
    
    <app-footer></app-footer>
  `,
  styleUrls: ['./formulario.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  formularioReaccion = true;

  provincias: any[] = [];
  departamentos: any[] = [];
  distritos: any[] = [];
  provinciasOriginales: any[] = [];

  // Variables para lugar de nacimiento
  departamentosNacimiento: any[] = [];
  provinciasNacimiento: any[] = [];
  distritosNacimiento: any[] = [];
  selectedDepartamentoNacimiento: string = '';
  selectedProvinciaNacimiento: string = '';

  // Variables para domicilio actual
  departamentosDomicilio: any[] = [];
  provinciasDomicilio: any[] = [];
  distritosDomicilio: any[] = [];
  selectedDepartamentoDomicilio: string = '';
  selectedProvinciaDomicilio: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient, private fb: FormBuilder,  private apiService: ApiService) {
    this.formulario = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo números
      fechaNacimiento: ['', Validators.required],
      departamentoNacimiento: ['', Validators.required],
      provinciaNacimiento: ['', Validators.required],
      distritoNacimiento: ['', Validators.required],
      departamentoDomicilio: ['', Validators.required],
      provinciaDomicilio: ['', Validators.required],
      distritoDomicilio: ['', Validators.required],
      terminos: [false, Validators.requiredTrue], // Checkbox
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecutar código relacionado con DOM o interacciones de cliente en el navegador
      this.http.get<any[]>('/db/provincias.json').subscribe(data => {
        this.provinciasOriginales = data.map(item => ({
          ...item,
          Departamento: this.decodeHtmlEntities(item.Departamento),
          Provincia: this.decodeHtmlEntities(item.Provincia),
          Distrito: this.decodeHtmlEntities(item.Distrito),
        }));
        this.updateDepartamentos();
      });
    }
  }

  decodeHtmlEntities(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;    
  }

  updateDepartamentos() {
    // Actualiza departamentos para lugar de nacimiento y domicilio actual
    this.departamentosNacimiento = [...new Set(this.provinciasOriginales.map(p => p.Departamento))];
    this.departamentosDomicilio = [...new Set(this.provinciasOriginales.map(p => p.Departamento))];
  }

  onDepartamentoNacimientoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedDepartamentoNacimiento = target.value;

    const provinciasFiltradas = this.provinciasOriginales
      .filter(p => p.Departamento === this.selectedDepartamentoNacimiento)
      .map(p => p.Provincia);
    
    this.provinciasNacimiento = [...new Set(provinciasFiltradas)];
    this.selectedProvinciaNacimiento = '';
    this.distritosNacimiento = [];
    this.formulario.get('provinciaNacimiento')?.setValue('');
    this.formulario.get('distritoNacimiento')?.setValue('');
  }

  onProvinciaNacimientoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedProvinciaNacimiento = target.value;

    const distritosFiltrados = this.provinciasOriginales
      .filter(p => p.Provincia === this.selectedProvinciaNacimiento)
      .map(p => p.Distrito);
    
    this.distritosNacimiento = [...new Set(distritosFiltrados)];
    this.formulario.get('distritoNacimiento')?.setValue('');
  }

  onDepartamentoDomicilioChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedDepartamentoDomicilio = target.value;

    const provinciasFiltradas = this.provinciasOriginales
      .filter(p => p.Departamento === this.selectedDepartamentoDomicilio)
      .map(p => p.Provincia);
      
    this.provinciasDomicilio = [...new Set(provinciasFiltradas)];
    this.selectedProvinciaDomicilio = '';
    this.distritosDomicilio = [];
    this.formulario.get('provinciaDomicilio')?.setValue('');
    this.formulario.get('distritoDomicilio')?.setValue('');
  }

  onProvinciaDomicilioChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedProvinciaDomicilio = target.value;

    const distritosFiltrados = this.provinciasOriginales
      .filter(p => p.Provincia === this.selectedProvinciaDomicilio)
      .map(p => p.Distrito);
    
    this.distritosDomicilio = [...new Set(distritosFiltrados)];
    this.formulario.get('distritoDomicilio')?.setValue('');
  }

  enviarFormulario() {
    // Marcar todos los campos como tocados para mostrar mensajes de error
    this.formulario.markAllAsTouched();
  
    if (this.formulario.valid) {
      
      this.formularioReaccion = false;
      const datosFormulario = this.formulario.value;
  
      // Llamar al servicio para enviar datos
      this.apiService.enviarDatos(datosFormulario).subscribe(
        response => {
          console.log('Formulario enviado con éxito:', response);
        },
        error => {
          console.error('Error al enviar el formulario:', error);
        }
      );
    } else {
      console.error('Formulario no válido');
    }
  }
  
  

}
