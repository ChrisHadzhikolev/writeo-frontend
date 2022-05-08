import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {AuthenticationComponent} from "./authentication.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule, NbToastrModule
} from '@nebular/theme';
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbToastrModule.forRoot(),
  ]
})
export class AuthenticationModule {}
