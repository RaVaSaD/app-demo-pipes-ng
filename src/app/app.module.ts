import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Esto es para mostrar la fecha en formato de España y en providers también
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
 imports: [ BrowserModule ],
 declarations: [ AppComponent, CapitalizadoPipe, DomseguroPipe, ContrasenaPipe ],
 providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
