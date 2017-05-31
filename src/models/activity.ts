import { IActivity } from './iactivity';

import { Sport } from './sport';
import { User } from './user';

export class Activity implements IActivity {
	constructor(
		public name: string,
		public sport: string,
		public location: string,
		public description: string,
		public user?: User,
		public date?: string
	) { }

	toJson() {
		return {
			name: this.name,
			sport: this.sport,
			location: this.location,
			description: this.description,
			user_id: this.user.id,
			user_name: this.user.name,
			user_picture: this.user.picture
		}
	}
}
