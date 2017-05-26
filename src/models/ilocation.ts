import { SportCategory } from './enums';

export interface ILocation {
	id: string;
	name: string;
	sport: SportCategory;
	distance: number;
	geo: Object;
}
