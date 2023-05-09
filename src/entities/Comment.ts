export default class Comment {
	constructor(
		readonly id: string,
		readonly name: string,
		readonly text: string,
		readonly datetime: Date
	) {}
}
