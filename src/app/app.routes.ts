import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/homeLayout/homeLayout.component';
import { NosotrosLayoutComponent } from './layouts/nosotrosLayout/nosotrosLayout.component';
import { PropuestasLayoutComponent } from './layouts/propuestasLayout/propuestasLayout.component';
import { JuventudesLayoutComponent } from './layouts/juventudesLayout/juventudesLayout.component';
import { CapacitacionLayoutComponent } from './layouts/capacitacionLayout/capacitacionLayout.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EncapLayoutComponent } from './layouts/encapLayout/encapLayout.component';
import { NormativaComponent } from './components/normativa/normativa.component';

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
];
