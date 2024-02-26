import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <input type="text" [(NgModule)]="userInput" placeholder="Enter your text">
      <button (click)="submit()">
        Submit
      </button>
  </div>`,
})
export class AppComponent {
  userInput: string = '';

  submit() {
    // Handle submission logic here, for example:
    console.log('User input:', this.userInput);
    // You can send this data to a service or perform any other actions
  }
}
