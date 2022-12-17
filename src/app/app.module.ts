import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/c-header/header.component';
import { PortadaComponent } from './components/portada/portada.component';
import { BotonNavComponent } from './components/c-boton-nav/boton-nav.component';
import { TargetaInformacionComponent } from './components/b-targeta-informacion/targeta-informacion.component';
import { TargetaProyectosComponent } from './components/a-targeta-proyectos/targeta-proyectos.component';
import { ItemProyectoComponent } from './components/a-item-proyecto/item-proyecto.component';
import { AgregarProyectoComponent } from './components/a-agregar-proyecto/agregar-proyecto.component';
import { BotonAddComponent } from './components/a-boton-add/boton-add.component';
import { EditInfoComponent } from './components/b-edit-info/edit-info.component';
import { ContenidoInfoComponent } from './components/b-contenido-info/contenido-info.component';
import { BotonAddInfoComponent } from './components/b-boton-add-info/boton-add-info.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/c-login/login.component';
import { LogoutComponent } from './components/c-logout/logout.component';
import { TargetaSkillsComponent } from './components/d-targeta-skills/targeta-skills.component';
import { BotonAddSkillComponent } from './components/d-boton-add-skill/boton-add-skill.component';
import { ItemSkillComponent } from './components/d-item-skill/item-skill.component';
import { AgregarSkillComponent } from './components/d-agregar-skill/agregar-skill.component';

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
    LogoutComponent,
    TargetaSkillsComponent,
    BotonAddSkillComponent,
    ItemSkillComponent,
    AgregarSkillComponent
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
