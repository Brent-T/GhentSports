import { SportCategory } from './enums';

export interface ISport {
	id:number;
	name:string;
	icon:string;
	cat:SportCategory;
}
