import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoapComponent } from './componentes/logoap/logoap.component';
import { SocialComponent } from './componentes/social/social.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
/*La linea de abajo permite incluir el circulo de progresion en el proyecto*/
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BotonComponent } from './componentes/boton/boton.component';
import {HttpClientModule} from '@angular/common/http'





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    SocialComponent,
    AcercadeComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    FooterComponent,
    BotonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /*La linea de abajo permite incluir el circulo de progresion en el proyecto*/
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
