import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div id="container">
    <dx-text-box 
        [(value)]="value"
        mode="url"
        label="Link"
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
  onEntryKey() {
    console.log(this.value)
  }
}
