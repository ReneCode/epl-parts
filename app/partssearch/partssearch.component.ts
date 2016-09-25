import { Component } from '@angular/core'


@Component({
	moduleId: module.id,
	selector: 'epl-partssearch',
	templateUrl: 'partssearch.component.html',
	styleUrls: ['partssearch.component.css']
})
export class PartsSearchComponent {

	public onSearch(value) {
		console.log("search:" + value);
	}
}