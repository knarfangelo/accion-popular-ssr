import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/homeLayout/homeLayout.component';
import { NosotrosLayoutComponent } from './layouts/nosotrosLayout/nosotrosLayout.component';
import { PropuestasLayoutComponent } from './layouts/propuestasLayout/propuestasLayout.component';
import { JuventudesLayoutComponent } from './layouts/juventudesLayout/juventudesLayout.component';
import { CapacitacionLayoutComponent } from './layouts/capacitacionLayout/capacitacionLayout.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EncapLayoutComponent } from './layouts/encapLayout/encapLayout.component';
import { NormativaComponent } from './components/normativa/normativa.component';
import { BancadaLayoutComponent } from './layouts/bancadaLayout/bancadaLayout.component';
import { CursosLayoutComponent } from './layouts/cursosLayout/cursosLayout.component';
import { ActualidadComponent } from './layouts/actualidad/actualidad.component';
import { ComiteEjecutivoNacionalComponent } from './layouts/comite-ejecutivo-nacional/comite-ejecutivo-nacional.component';
import { ComitePoliticoComponent } from './layouts/comite-politico/comite-politico.component';
import { ComEjeDepMetroComponent } from './layouts/com-eje-dep-metro/com-eje-dep-metro.component';
import { OficinaNacionaRegistroPartidarioComponent } from './layouts/organos-partidarios-layout/oficina-naciona-registro-partidario/oficina-naciona-registro-partidario.component';

export const routes: Routes = [
    { path: '', component:HomeLayoutComponent},
    { path: 'quienes-somos', component:NosotrosLayoutComponent},
    { path: 'propuestas', component:PropuestasLayoutComponent},
    { path: 'juventudes-accion-popular', component:JuventudesLayoutComponent},
    { path: 'capacitacion', component:CapacitacionLayoutComponent},
    { path: 'formulario', component:FormularioComponent},
    { path: 'documentos', component:NormativaComponent},
    { path: 'normativa', component:NormativaComponent},
    { path: 'encap', component:EncapLayoutComponent},
    { path: 'bancada', component:BancadaLayoutComponent},
    { path: 'cursos', component:CursosLayoutComponent},
    { path: 'noticias-eventos', component:ActualidadComponent},
    { path: 'comite-ejecutivo-nacional', component:ComiteEjecutivoNacionalComponent},
    { path: 'comite-politico', component:ComitePoliticoComponent},
    { path: 'comites-ejecutivos-departamentales-metropolitano', component:ComEjeDepMetroComponent},
    { path: 'oficina-nacional-registro-partidario', component:OficinaNacionaRegistroPartidarioComponent},
];
