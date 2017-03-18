import { ILocation } from './ilocation';
import { SportCategory } from './enums';

export class Location implements ILocation {
	constructor(
		public id: string,
		public name: string,
		public sport: SportCategory,
		public geo: any
	) {}
}
