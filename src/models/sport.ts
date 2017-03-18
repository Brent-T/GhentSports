import { ISport } from './isport';
import { SportCategory } from './enums';

export class Sport implements ISport {
	constructor(
		public id: number,
		public name: string, 
		public icon: any,
		public cat: SportCategory
	) {}
}
