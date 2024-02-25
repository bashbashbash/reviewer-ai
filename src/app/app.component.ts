import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div id="container">
    <dx-text-box 
        [(value)]="value"
        mode="url"
        label="Enter Prompt"
        labelMode="floating"
        [maxLength]="20"
        [showClearButton]="true"
        (onEnterKey)="onEnterKey()"
    >
    </dx-text-box>
</div>`,
})
export class AppComponent {
  value: string = "";
  onEnterKey() {
    console.log(this.value)
  }
}
