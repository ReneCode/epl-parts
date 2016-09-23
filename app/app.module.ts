import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { PartsListComponent } from './partslist/partslist.component' 
import { PartsListRowComponent } from './partslist/partslistrow.component' 
import { PartsListService } from './partslist/partslist.service' 

@NgModule({
  imports:      [ BrowserModule ],
  
  declarations: [ 
    AppComponent,
    PartsListComponent,
    PartsListRowComponent
  ],

  providers: [
    PartsListService
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
