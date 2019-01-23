import { Routes } from '@angular/router'
import { EmissoraAudienciaComponent } from './emissora-audiencia/emissora-audiencia.component';
import { AudienciaComponent } from './audiencia/audiencia.component';
import { EmissoraComponent } from './emissora/emissora.component';
export const ROUTES: Routes = [
    { path: '', component: EmissoraAudienciaComponent },
    { path: 'emissora', component: EmissoraComponent },
    { path: 'audiencia', component: AudienciaComponent }
  ]