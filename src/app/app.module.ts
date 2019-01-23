import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmissoraComponent } from './emissora/emissora.component';
import { AudienciaComponent } from './audiencia/audiencia.component';
import { EmissoraAudienciaComponent } from './emissora-audiencia/emissora-audiencia.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EmissoraService } from './_services/emissora.service';
import { AudienciaService } from './_services/audiencia.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    EmissoraComponent,
    AudienciaComponent,
    EmissoraAudienciaComponent,
    NavbarComponent,
    
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [EmissoraService, AudienciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
