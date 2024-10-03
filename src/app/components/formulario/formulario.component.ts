import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavegacionComponent } from "../../layouts/navegacion/navegacion.component";
import { FooterComponent } from "../../layouts/footer/footer.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    FooterComponent
],
  template: `
    <app-navegacion>
    </app-navegacion>
  <header>
    
    <form class="formulario" action="">
      <h1>Bienvenido</h1>
      <p>Afíliate completando este formulario para ser parte de nuestro gran partido, y construyamos juntos el país que merecemos.</p>
      <label for="" class="nombres"><span>Nombres</span>
        <input type="text" placeholder="Tus nombres">
      </label>
      <label for="" class="apellidos"><span>Apellidos</span>
        <input type="text" placeholder="Tus apellidos">
      </label>
      <label for=""><span>Correo electronico</span>
        <input type="email" placeholder="ejemplo@gmail.com">
        <img src="icons/email.svg" alt="">
      </label>
      <label for=""><span>DNI</span>
        <input type="number" placeholder="78896610">
        <img src="icons/dni.svg" alt="">
      </label>
      <label for="fecha"><span>Fecha de Nacimiento</span>
        <input type="date" id="fecha" placeholder="DD/MM/AAAA">
      </label>
      <div class="container">
      <h3>Lugar de nacimiento </h3><div class="linea"></div></div>

      <label for="departamentoNacimiento"><span>Departamento</span>
    <select id="departamentoNacimiento" class="direccion" (change)="onDepartamentoNacimientoChange($event)">
      <option value="">Selecciona departamento</option>
      <option *ngFor="let dep of departamentosNacimiento" [value]="dep">{{dep}}</option>
    </select>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <label for="provinciaNacimiento"><span>Provincia</span>
    <select id="provinciaNacimiento" class="direccion" (change)="onProvinciaNacimientoChange($event)">
      <option value="">Selecciona provincia</option>
      <option *ngFor="let prov of provinciasNacimiento" [value]="prov">{{prov}}</option>
    </select>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <label for="distritoNacimiento"><span>Distrito</span>
    <select id="distritoNacimiento" class="direccion">
      <option value="">Selecciona distrito</option>
      <option *ngFor="let dist of distritosNacimiento" [value]="dist">{{dist}}</option>
    </select>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <div class="container">
    <h3>Domicilio actual  </h3><div class="linea"></div>
  </div>

  <label for="departamentoDomicilio"><span>Departamento</span>
    <select id="departamentoDomicilio" class="direccion" (change)="onDepartamentoDomicilioChange($event)">
      <option value="">Selecciona departamento</option>
      <option *ngFor="let dep of departamentosDomicilio" [value]="dep">{{dep}}</option>
    </select>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <label for="provinciaDomicilio"><span>Provincia</span>
    <select id="provinciaDomicilio" class="direccion" (change)="onProvinciaDomicilioChange($event)">
      <option value="">Selecciona provincia</option>
      <option *ngFor="let prov of provinciasDomicilio" [value]="prov">{{prov}}</option>
    </select>
    <img class="map" src="icons/map.svg" alt="">
  </label>

  <label for="distritoDomicilio"><span>Distrito</span>
    <select id="distritoDomicilio" class="direccion">
      <option value="">Selecciona distrito</option>
      <option *ngFor="let dist of distritosDomicilio" [value]="dist">{{dist}}</option>
    </select>
    <img class="map" src="icons/map.svg" alt="">
  </label>
      <label class="checkbox" for=""><input type="checkbox">
        <p>Al continuar, confirmo que he leído y acepto los Términos y Condiciones</p>
      </label>
      <input class="submit" type="submit" value="Enviar">
    </form> 
  </header>
  <app-footer></app-footer>
  
  `,
  styleUrl: './formulario.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioComponent {

  provincias: any[] = [];
  departamentos: any[] = [];
  distritos: any[] = [];
  provinciasOriginales: any[] = [];
  departamentosOriginales: any[] = [];
  
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: HttpClient) {}


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
    if (isPlatformBrowser(this.platformId)) {
      const txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    }
    return html; // En el servidor no haces nada con document, solo devuelves el valor original
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
  }

  onProvinciaNacimientoChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedProvinciaNacimiento = target.value;

    const distritosFiltrados = this.provinciasOriginales
      .filter(p => p.Provincia === this.selectedProvinciaNacimiento)
      .map(p => p.Distrito);
    
    this.distritosNacimiento = [...new Set(distritosFiltrados)];
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
  }

  onProvinciaDomicilioChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedProvinciaDomicilio = target.value;

    const distritosFiltrados = this.provinciasOriginales
      .filter(p => p.Provincia === this.selectedProvinciaDomicilio)
      .map(p => p.Distrito);
    
    this.distritosDomicilio = [...new Set(distritosFiltrados)];
  }

}
