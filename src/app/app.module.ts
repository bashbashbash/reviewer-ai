import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule} from '@angular/common/http';
import { DxFormModule} from 'devextreme-angular';

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, DxFormModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
