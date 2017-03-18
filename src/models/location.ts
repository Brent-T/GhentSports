import { ILocation } from './ilocation';

export class Location implements ILocation {
	constructor(
		public id: string,
		public name: string,
		public sport: string,
		public maps: any
	) {}
}
