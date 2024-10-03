import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID } from '@angular/core';
import { ILideres, lideresJSON } from './BD/lideres';
import { register } from 'swiper/element';
@Component({
  selector: 'app-nosotros-lideres',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <header>
      <h1>LÍDERES HISTÓRICOS</h1>
      <img class="banner-lideres" src="nosotros/banner-lideres.png" alt="banner de peruanos celebrando">
      <swiper-container>
      @for (item of items; track $index) {
      <swiper-slide>
        <div class="descripcion">
          <h2>{{item.nombre}}</h2>
          <p>{{item.descripcion}}</p>
        </div>
        <img class="lideres" [src]="item.img" [alt]="item.nombre">
      </swiper-slide>
      }
      </swiper-container>
    </header>
  `,
  styleUrl: './nosotrosLideres.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosLideresComponent {
  items:ILideres[] = lideresJSON;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
   
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    register();
    }
  }

}
