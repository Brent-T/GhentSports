import { IUser } from './iuser';

export class User implements IUser {
	public id: string;
	public name: string;
	public picture: string;

	constructor() { }
}
