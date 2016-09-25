import { Injectable } from '@angular/core'

@Injectable()
export class PartsListService {

	getParts() {
		return [
			{ partnr: 'abc',
			  typenr: 'type-abc',
				id: 43
			},
			{ partnr: 'xyz',
			  typenr: 'type-xyz',
				id: 42
			}
			
		];
	}
}

