import { Component } from '@angular/core';

import { PartsListService } from './partslist.service';

@Component({
  moduleId: module.id,
  selector: 'epl-partslist',
  templateUrl: 'partslist.template.html',
  providers: [PartsListService]
})
export class PartsListComponent { 


  constructor(private partsListService: PartsListService) {
  }

  public getParts() {
    return this.partsListService.getParts(); 
  }

}
