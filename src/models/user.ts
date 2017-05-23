import { IUser } from './iuser';

export class User implements IUser {
	constructor(
		public id: string = '',
		public name: string = '',
		public picture: string = ''
	) { }
}
