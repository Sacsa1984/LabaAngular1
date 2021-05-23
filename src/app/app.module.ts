import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponComponent } from './my-compon/my-compon.component';
import { MyImegComponent } from './my-imeg/my-imeg.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponComponent,
    MyImegComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
