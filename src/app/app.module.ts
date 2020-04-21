import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

import { AppComponent } from './app.component';
import { SetNameComponent } from './set-name/set-name.component';
import { GetNameComponent } from './get-name/get-name.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SetNameComponent,
    GetNameComponent
  ],
  imports: [
    environment.production ? [] : AkitaNgDevtools,
    CommonModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
