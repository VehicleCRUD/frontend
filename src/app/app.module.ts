import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { VehicleInputComponent } from './vehicle-input/vehicle-input.component';
import { VehicleWrapperComponent } from './vehicle-wrapper/vehicle-wrapper.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleWrapperComponent,
    VehicleEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    VehicleDisplayComponent,
    VehicleInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
