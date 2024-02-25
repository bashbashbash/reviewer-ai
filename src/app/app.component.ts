import { Component, Input } from '@angular/core';
import notify from 'devextreme/ui/notify';

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
    <dx-button
      text="Click me!"
      (onClick)="showMessage()"
      stylingMode="outlined"
      type="success"
      icon="comment">
    </dx-button>
</div>`,
})
export class AppComponent {
  @Input()
  value: string = "";
  onChange() {
    console.log(this.value)
  }
  showMessage = () => {
    notify("The button was clicked");
  }
}
