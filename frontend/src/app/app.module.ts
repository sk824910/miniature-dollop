import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiFetchComponent } from './components/api-fetch/api-fetch.component';
import { ApiService } from './services/apiservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiFetchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
