import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  // attribute selector [...]
  selector: '[epl-partslistrow]',
  templateUrl: 'partslistrow.template.html'
})
export class PartsListRowComponent {
  // property of the component 
  @Input('epl-partslistrow') part;


}
