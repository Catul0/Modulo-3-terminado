import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortadaComponent } from './components/portada/portada.component';
import { BotonNavComponent } from './components/boton-nav/boton-nav.component';
import { TargetaInformacionComponent } from './components/targeta-informacion/targeta-informacion.component';
import { TargetaProyectosComponent } from './components/targeta-proyectos/targeta-proyectos.component';
import { ItemProyectoComponent } from './components/item-proyecto/item-proyecto.component';
import { AgregarProyectoComponent } from './components/agregar-proyecto/agregar-proyecto.component';
import { BotonAddComponent } from './components/boton-add/boton-add.component';
import { EditInfoComponent } from './components/edit-info/edit-info.component';
import { ContenidoInfoComponent } from './components/contenido-info/contenido-info.component';
import { BotonAddInfoComponent } from './components/boton-add-info/boton-add-info.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    BotonNavComponent,
    TargetaInformacionComponent,
    TargetaProyectosComponent,
    ItemProyectoComponent,
    AgregarProyectoComponent,
    BotonAddComponent,
    EditInfoComponent,
    ContenidoInfoComponent,
    BotonAddInfoComponent,
    SliderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
