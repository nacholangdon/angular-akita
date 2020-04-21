import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetNameComponent } from './set-name/set-name.component';
import { GetNameComponent } from './get-name/get-name.component';

@NgModule({
  declarations: [
    AppComponent,
    SetNameComponent,
    GetNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
