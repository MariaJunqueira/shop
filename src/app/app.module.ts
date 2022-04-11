import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes.module';
import { InMemoryDataService } from '@services/in-memory-data/in-memory-data.service';

@NgModule({
  imports: [
    AppRoutesModule,
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
