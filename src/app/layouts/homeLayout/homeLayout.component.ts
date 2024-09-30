import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";
import { SwiperHomeComponent } from "../../components/swiper-home/swiper-home.component";
import { HomeEncapComponent } from "./homeEncap/homeEncap.component";
import { PresentacionComponent } from "./presentacion/presentacion.component";
import { HomeNoticiasComponent } from "./homeNoticias/homeNoticias.component";
import { SwiperCandidatosComponent } from "../../components/swiper-candidatos/swiper-candidatos.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent,
    SwiperHomeComponent,
    HomeEncapComponent,
    PresentacionComponent,
    HomeNoticiasComponent,
    SwiperCandidatosComponent,
    FooterComponent
],
  template: `
    <app-navegacion></app-navegacion>
    <header>
      <app-swiper-home></app-swiper-home>
      <main>
        <app-presentacion></app-presentacion>
        <app-home-encap></app-home-encap>
        <app-home-noticias></app-home-noticias>
        <app-swiper-candidatos></app-swiper-candidatos>
      </main>
    </header>
    <app-footer></app-footer>
  `,
  styleUrl: './homeLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent { }
