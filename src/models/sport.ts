import { ISport } from './isport';

export class Sport implements ISport {
	constructor(
		public name:string, 
		public icon:any
	) {}
}
