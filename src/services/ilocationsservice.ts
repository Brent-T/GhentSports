import { Location } from './../models/location';

export interface ILocationsSerivce {
	getLocations(filter?: string): Location[];
	convertToLocation(json: any): Location;
}
