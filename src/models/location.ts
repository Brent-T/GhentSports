import { ILocation } from './ilocation';
import { SportCategory } from './enums';

export class Location implements ILocation {
	public distance: number = null;

	constructor(
		public id: string,
		public name: string,
		public sport: SportCategory,
		public geo: any,
	) {}

	static compare(a: Location, b: Location): number {
		if (a.distance < b.distance)
			return -1;
		if (a.distance > b.distance)
			return 1;
		return 0;
	}
}
