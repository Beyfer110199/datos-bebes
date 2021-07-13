import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MuertesCovidComponent } from './muertescov/muertescov.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PastenotfoundComponent } from './pastenotfound/pastenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    MuertesCovidComponent,
    PresentacionComponent,
    CabeceraComponent,
    PastenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
