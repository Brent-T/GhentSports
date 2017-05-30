import { IActivity } from './iactivity';

import { Sport } from './sport';
import { User } from './user';

export class Activity implements IActivity {
	constructor(
		public name: string,
		public sport: Sport,
		public location: string,
		public description: string,
		public user?: User
	) { }
}
