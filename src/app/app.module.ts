import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// animationes de Angular materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials';
import { SignupComponent, FaltaCamposComponent } from './components/user/signup/signup.component';
import { LoginComponent, MailErrorComponent, NoPassComponent } from './components/user/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MathComponent } from './components/juegos/math/math.component';
import { AppRoutingModule } from './servicios/app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './servicios/server.service';
import { ConeccionService } from './servicios/coneccion.service';
import { TatetiComponent, XComponent, OComponent } from './components/juegos/tateti/tateti.component';
import { PalabrasComponent } from './components/juegos/palabras/palabras.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PuntuacionesComponent } from './components/puntuaciones/puntuaciones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdivinanumeroComponent } from './components/juegos/adivinanumero/adivinanumero.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColoresComponent } from './components/juegos/colores/colores.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MenuComponent,
    MathComponent,
    MailErrorComponent,
    InicioComponent,
    NoPassComponent,
    FaltaCamposComponent,
    TatetiComponent,
    XComponent,
    OComponent,
    PalabrasComponent,
    PuntuacionesComponent,
    PrincipalComponent,
    AdivinanumeroComponent,
    ColoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ServerService,ConeccionService],
  bootstrap: [AppComponent],
  entryComponents: [
    MailErrorComponent,
    NoPassComponent,
    FaltaCamposComponent,
    XComponent,
    OComponent
]
})
export class AppModule { }
