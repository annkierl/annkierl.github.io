import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { showPicture } from './components/showPicture';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    showPicture
  ],
  imports: [
    BrowserModule,

    DropDownListModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
