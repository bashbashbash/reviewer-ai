import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  template: `
    <dx-form
        [formData]="prompt-submit"
        [colCount]="2">
        <dxi-item dataField="prompt"></dxi-item>
        <dxi-item 
            itemType="button"
            [buttonOptions]="submitButtonOptions">
        </dxi-item>
    </dx-form>
  `,
})
export class AppComponent {
    employee = {
        prompt: 'Enter a prompt'
    }
}
