import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbMenuModule, NbSidebarModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { DefaultComponent } from './pages/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    NavigationComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'cosmic'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule,
    NbSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
