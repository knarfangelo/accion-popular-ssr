import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavegacionComponent,
    FooterComponent
  ],
  template: `
    <app-navegacion></app-navegacion>

    <header>
      <ng-container *ngIf="formularioReaccion; else graciasTemplate">
        <form [formGroup]="formulario" (ngSubmit)="enviarFormulario()" class="formulario">
          <h1>Bienvenido</h1>
          <p>Afíliate completando este formulario para ser parte de nuestro gran partido, y construyamos juntos el país que merecemos.</p>

          <label for="nombres">
            <span>Nombres</span>
            <input formControlName="nombres" id="nombres" type="text" placeholder="Tus nombres">
          </label>

          <label for="apellidoPaterno">
            <span>Apellido Paterno</span>
            <input formControlName="apellidoPaterno" id="apellidoPaterno" type="text" placeholder="Tu apellido paterno">
          </label>

          <label for="apellidoMaterno">
            <span>Apellido Materno</span>
            <input formControlName="apellidoMaterno" id="apellidoMaterno" type="text" placeholder="Tu apellido materno">
          </label>

          <label for="dni">
            <span>DNI</span>
            <input formControlName="dni" id="dni" type="number" placeholder="78896610" required (input)="limitarDni($event)">
            <div *ngIf="formulario.get('dni')?.invalid && formulario.get('dni')?.touched" class="error-message">
              Debes ingresar un DNI válido (máx 8 números).
            </div>
          </label>

          <label for="fechaNacimiento">
            <span>Fecha de Nacimiento</span>
            <input formControlName="fechaNacimiento" id="fechaNacimiento" type="date">
            <div *ngIf="formulario.get('fechaNacimiento')?.invalid && formulario.get('fechaNacimiento')?.touched" class="error-message">
              Debes tener al menos 18 años.
            </div>
          </label>

          <label for="estadoCivil">
            <span>Estado Civil</span>
            <select formControlName="estadoCivil" id="estadoCivil">
              <option value="">Selecciona tu estado civil</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
              <option value="viudo">Viudo</option>
            </select>
          </label>

          <label for="sexo">
            <span>Sexo</span>
            <select formControlName="sexo" id="sexo">
              <option value="">Selecciona tu sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </label>

          <label for="lugarNacimiento">
            <span>Lugar de Nacimiento</span>
            <input formControlName="lugarNacimiento" id="lugarNacimiento" type="text" placeholder="Tu lugar de nacimiento">
          </label>

          <label for="regionActual">
            <span>Región Actual</span>
            <select formControlName="regionActual" id="regionActual" (change)="onRegionChange($event)">
              <option value="">Selecciona tu región</option>
              <option *ngFor="let region of regiones" [value]="region.Departamento">{{ region.Departamento }}</option>
            </select>
          </label>

          <label for="provinciaActual">
            <span>Provincia Actual</span>
            <select formControlName="provinciaActual" id="provinciaActual" (change)="onProvinciaChange($event)">
              <option value="">Selecciona tu provincia</option>
              <option *ngFor="let provincia of provincias" [value]="provincia.Provincia">{{ provincia.Provincia }}</option>
            </select>
          </label>

          <label for="distritoActual">
            <span>Distrito Actual</span>
            <select formControlName="distritoActual" id="distritoActual">
              <option value="">Selecciona tu distrito</option>
              <option *ngFor="let distrito of distritos" [value]="distrito.Distrito">{{ distrito.Distrito }}</option>
            </select>
          </label>

          <label for="direccion">
            <span>Dirección</span>
            <input formControlName="direccion" id="direccion" type="text" placeholder="Tu dirección">
          </label>

          <label for="urbanizacion">
            <span>Urbanización</span>
            <input formControlName="urbanizacion" id="urbanizacion" type="text" placeholder="Tu urbanización">
          </label>

          <label for="telefono">
            <span>Teléfono</span>
            <input formControlName="telefono" id="telefono" type="text" placeholder="Tu teléfono">
          </label>

          <label for="correo">
            <span>Correo Electrónico</span>
            <input formControlName="correo" id="correo" type="email" placeholder="ejemplo@gmail.com">
          </label>

          <input class="submit" value="Imprimir o Guardar como pdf" (click)="enviarFormulario()">
        </form>
      </ng-container>

      <ng-template #graciasTemplate>
        <section class="reaccion-registro">
          <div class="contenido">
            <h1 class="responsive">GRACIAS POR UNIRTE <br> A ACCIÓN POPULAR</h1>
            <img class="pala" src="icons/pala-accion-popular.svg" alt="pala sin fondo de accion popular">
          </div>
          <a href="" class="regresar-inicio">REGRESAR AL INICIO</a>
        </section>
      </ng-template>
    </header>

    <app-footer></app-footer>
  `,
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  formularioReaccion = true;

  regiones: any[] = [];
  provincias: any[] = [];
  distritos: any[] = [];

  data: any[] = []; // Para almacenar los datos del JSON
  datosFormulario: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient, private fb: FormBuilder, private router:Router) {
    this.formulario = this.fb.group({
      apellidoPaterno: [''],
      apellidoMaterno: [''],
      nombres: [''],
      dni: ['', [Validators.required, Validators.maxLength(8)]],
      fechaNacimiento: ['', [this.minAgeValidator(18)]], // Validación de edad mínima
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
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.cargarProvincias();
    }
  }

  // Validación de edad mínima
  minAgeValidator(minAge: number) {
    return (control: any) => {
      const dateOfBirth = new Date(control.value);
      const today = new Date();
      const age = today.getFullYear() - dateOfBirth.getFullYear();
      const isValid = age >= minAge;

      // Si el control está vacío, no se valida
      return control.value ? (isValid ? null : { minAge: true }) : null;
    };
  }

  cargarProvincias(): void {
    this.http.get<any[]>('/db/provincias.json').subscribe(data => {
      this.data = data; // Almacena todos los datos
      this.regiones = this.getUniqueRegions(data); // Obtiene las regiones únicas
    });
  }

  getUniqueRegions(data: any[]): any[] {
    const uniqueRegions = Array.from(new Set(data.map(item => item.Departamento)));
    return uniqueRegions.map(region => ({ Departamento: region }));
  }

  getUniqueProvincias(region: string): any[] {
    return Array.from(new Set(this.data
      .filter(item => item.Departamento === region)
      .map(item => item.Provincia)
    )).map(provincia => ({ Provincia: provincia }));
  }

  onRegionChange(event: Event): void {
    const selectedRegion = (event.target as HTMLSelectElement).value;
    this.provincias = this.getUniqueProvincias(selectedRegion);
    this.formulario.get('provinciaActual')?.setValue(''); // Resetea el campo de provincia al cambiar de región
    this.formulario.get('distritoActual')?.setValue(''); // Resetea el campo de distrito al cambiar de región
  }

  onProvinciaChange(event: Event): void {
    const selectedProvincia = (event.target as HTMLSelectElement).value;
    this.distritos = this.getUniqueDistritos(selectedProvincia);
    this.formulario.get('distritoActual')?.setValue(''); // Resetea el campo de distrito al cambiar de provincia
  }

  getUniqueDistritos(provincia: string): any[] {
    return Array.from(new Set(this.data
      .filter(item => item.Provincia === provincia)
      .map(item => item.Distrito)
    )).map(distrito => ({ Distrito: distrito }));
  }

  limitarDni(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 8) {
      input.value = input.value.slice(0, 8);
    }
  }
  enviarFormulario(): void {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      this.router.navigate(['ficha-afiliacion'], {
        state: { data: this.formulario.value } // Envía los datos del formulario
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }
  
  
  
  
}
