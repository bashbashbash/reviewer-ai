import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule} from '@angular/common/http';
import { DxTextBoxModule } from 'devextreme-angular';

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, DxTextBoxModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
