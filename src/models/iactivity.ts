import { Sport } from './sport';
import { User } from './user';

export interface IActivity {
	name: string;
	sport: string;
	location: string;
	description: string;
	user?: User;
}
