import { Injectable } from '@angular/core'

@Injectable()
export class PartsListService {

	getParts() {
		return [
			{ partnr: 'abc',
			  typenr: 'type-abc'
			},
			{ partnr: 'xyz',
			  typenr: 'type-xyz'
			}
			
		];
	}
}

