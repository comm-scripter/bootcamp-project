import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PleComponent } from './ple/ple.component';
import { GuageComponent } from './ple/guage/guage.component';
import { ControlsComponent } from './ple/controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    PleComponent,
    GuageComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
