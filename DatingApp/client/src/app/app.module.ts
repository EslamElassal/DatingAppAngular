import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SerService} from './service/ser.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [SerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
