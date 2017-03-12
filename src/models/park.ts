import { IPark } from './ipark';

export class Park implements IPark {
	constructor(
		public id: number,
		public name: string,
		public surface: number,
		public sector: string
	) {}
}
