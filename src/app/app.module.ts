import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './backofice/auth/UI/mainpage/mainpage.component';
import { ImagenComponent } from './backofice/auth/UI/imagen/imagen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from './Shared/shared.module';
//httpClient
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ImagenComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
