import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  template: `
    <form (submit)="handleSubmit($event)">
      <dx-form
          [formData]="prompt_submit"
          [colCount]="2">
          <dxi-item dataField="prompt"></dxi-item>
          <dxi-item 
              itemType="button"
              [buttonOptions]="submitButtonOptions">
          </dxi-item>
      </dx-form>
    </form>
  `,
})
export class AppComponent {
    prompt_submit = {
        prompt: 'Enter a prompt'
    }
    submitButtonOptions = {
        text: "Submit",
        useSubmitBehavior: true
    }
 
    handleSubmit = function(e) {
        setTimeout(() => { 
            alert("Submitted");          
        }, 1000);
 
        e.preventDefault();
    }
}
