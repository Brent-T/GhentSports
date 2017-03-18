import { SportCategory } from './enums';

export interface ILocation {
	id: string;
	name: string;
	sport: SportCategory;
	geo: Object;
}
