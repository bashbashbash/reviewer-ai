import { Component, Input } from '@angular/core';

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
        (onChange)="onChange()"
    >
    </dx-text-box>
</div>`,
})
export class AppComponent {
  @Input()
  value: string = "";
  onChange() {
    console.log(this.value)
  }
}
