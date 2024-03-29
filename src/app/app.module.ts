import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from './services/Authentication.service';
import {StockService} from './services/Stock.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    UserComponent
  ],
  providers: [AuthenticationService, StockService, HttpClient],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
