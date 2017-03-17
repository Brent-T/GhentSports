export interface ILocation {
	id: string;
	name: string;
	sport: string;
	coordinates: {
		lat: number,
		long: number
	}
}
